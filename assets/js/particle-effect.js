(function() {
  const MATRIX_GREEN = '#b5e853';
  const MATRIX_CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF';

  let isAnimating = false;

  document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.getElementById('profile-pic');
    if (!profileImg) return;

    profileImg.addEventListener('click', function(e) {
      e.preventDefault();
      if (isAnimating) return;
      startMatrixEffect(profileImg);
    });
  });

  function startMatrixEffect(img) {
    isAnimating = true;

    const rect = img.getBoundingClientRect();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;
      pointer-events: none;
    `;
    document.body.appendChild(canvas);

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Create particles that start FROM the profile pic
    const particles = [];
    const particleCount = 100; // More particles for better effect

    for (let i = 0; i < particleCount; i++) {
      // Start at random position within the circular profile pic
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * (rect.width / 2);
      const startX = centerX + Math.cos(angle) * radius;
      const startY = centerY + Math.sin(angle) * radius;

      // Random dispersion with arc - can go anywhere on screen
      // Bias towards sides (left/right) for more dramatic effect
      const sidesBias = Math.random() < 0.6; // 60% chance to go more sideways
      let disperseAngle;
      if (sidesBias) {
        // Bias towards left or right
        const side = Math.random() < 0.5 ? -1 : 1;
        disperseAngle = side * (Math.PI / 4 + Math.random() * Math.PI / 2);
      } else {
        // Any direction
        disperseAngle = Math.random() * Math.PI * 2;
      }

      // Much larger dispersion distances - can reach edges of screen
      const maxDistance = Math.max(canvas.width, canvas.height);
      const disperseDistance = 200 + Math.random() * maxDistance * 0.8;

      // Calculate end point
      const disperseX = startX + Math.cos(disperseAngle) * disperseDistance;
      const disperseY = startY + Math.sin(disperseAngle) * disperseDistance;

      // Arc control point - perpendicular to trajectory for curved motion
      const arcDirection = Math.random() < 0.5 ? 1 : -1;
      const arcStrength = 100 + Math.random() * 300; // Random arc intensity
      const perpAngle = disperseAngle + (Math.PI / 2) * arcDirection;
      const midX = (startX + disperseX) / 2;
      const midY = (startY + disperseY) / 2;
      const controlX = midX + Math.cos(perpAngle) * arcStrength;
      const controlY = midY + Math.sin(perpAngle) * arcStrength;

      particles.push({
        startX: startX,
        startY: startY,
        x: startX,
        y: startY,
        controlX: controlX,
        controlY: controlY,
        disperseX: disperseX,
        disperseY: disperseY,
        rainSpeed: 4 + Math.random() * 10,
        char: MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)],
        trail: [],
        trailLength: 5 + Math.floor(Math.random() * 12),
        disperseDelay: Math.random() * 300, // More random delay spread
        disperseDuration: 400 + Math.random() * 400 // Each particle has its own duration
      });

      for (let t = 0; t < particles[i].trailLength; t++) {
        particles[i].trail.push({
          char: MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)],
          opacity: 1 - (t / particles[i].trailLength) * 0.8
        });
      }
    }

    img.style.visibility = 'hidden';
    img.style.opacity = 0;

    let startTime = performance.now();
    let phase = 'disperse';
    const maxDisperseDuration = 800; // Max duration for disperse phase
    let rainStartTime = 0;
    let reappearStart = 0;

    // Quadratic bezier curve helper
    function quadraticBezier(t, p0, p1, p2) {
      const mt = 1 - t;
      return mt * mt * p0 + 2 * mt * t * p1 + t * t * p2;
    }

    function animate(currentTime) {
      const elapsed = currentTime - startTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (phase === 'disperse') {
        let allDispersed = true;

        particles.forEach(p => {
          const pElapsed = Math.max(0, elapsed - p.disperseDelay);
          const progress = Math.min(pElapsed / p.disperseDuration, 1);
          const eased = easeOutCubic(progress);

          // Use quadratic bezier for arcing motion
          p.x = quadraticBezier(eased, p.startX, p.controlX, p.disperseX);
          p.y = quadraticBezier(eased, p.startY, p.controlY, p.disperseY);

          // Only draw if within screen bounds (with some padding)
          if (p.x > -50 && p.x < canvas.width + 50 && p.y > -50 && p.y < canvas.height + 50) {
            ctx.fillStyle = progress < 0.3 ? '#ffffff' : MATRIX_GREEN;
            ctx.shadowColor = MATRIX_GREEN;
            ctx.shadowBlur = 15;
            ctx.font = '14px monospace';
            ctx.fillText(p.char, p.x, p.y);
          }

          if (Math.random() < 0.15) {
            p.char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
          }

          if (progress < 1) allDispersed = false;
        });

        ctx.shadowBlur = 0;

        // Transition when all particles have finished dispersing or max time reached
        if (allDispersed || elapsed > maxDisperseDuration + 400) {
          phase = 'rain';
          rainStartTime = currentTime;
          particles.forEach(p => {
            p.rainStartX = p.x;
            p.rainStartY = p.y;
          });
        }
      } else if (phase === 'rain') {
        const rainElapsed = currentTime - rainStartTime;
        let allDone = true;

        particles.forEach(p => {
          p.y = p.rainStartY + rainElapsed * p.rainSpeed * 0.05;
          p.x = p.rainStartX; // Straight down

          p.trail.forEach((t, idx) => {
            const trailY = p.y - (idx + 1) * 14;
            if (trailY > 0 && trailY < canvas.height) {
              ctx.fillStyle = `rgba(181, 232, 83, ${t.opacity})`;
              ctx.font = '14px monospace';
              ctx.fillText(t.char, p.x, trailY);

              if (Math.random() < 0.05) {
                t.char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
              }
            }
          });

          if (p.y > 0 && p.y < canvas.height + 50) {
            allDone = false;
            ctx.fillStyle = '#ffffff';
            ctx.shadowColor = MATRIX_GREEN;
            ctx.shadowBlur = 15;
            ctx.font = '14px monospace';
            ctx.fillText(p.char, p.x, p.y);
            ctx.shadowBlur = 0;

            if (Math.random() < 0.08) {
              p.char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
            }
          }

          const trailTop = p.y - p.trailLength * 14;
          if (trailTop <= canvas.height) {
            allDone = false;
          }
        });

        if (allDone || rainElapsed > 4000) {
          phase = 'reappear';
          reappearStart = currentTime;
        }
      } else if (phase === 'reappear') {
        const reappearElapsed = currentTime - reappearStart;
        const duration = 2000;
        const progress = Math.min(reappearElapsed / duration, 1);
        const eased = easeInOutQuad(progress);

        img.style.visibility = 'visible';
        img.style.opacity = eased;

        const glowIntensity = Math.sin(progress * Math.PI) * 20;
        img.style.filter = `drop-shadow(0 0 ${glowIntensity}px ${MATRIX_GREEN})`;

        if (progress >= 1) {
          canvas.remove();
          img.style.opacity = 1;
          img.style.filter = '';
          isAnimating = false;
          return;
        }
      }

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }
})();
