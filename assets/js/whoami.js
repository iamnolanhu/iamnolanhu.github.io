// WHOAMI Page Interactive Features

document.addEventListener('DOMContentLoaded', function() {
  // Typewriter effect for title
  initTypewriter();

  // Easter egg log toggle
  initEasterEgg();
});

// Typewriter Effect
function initTypewriter() {
  const titleElement = document.getElementById('whoami-title');
  if (!titleElement) return;

  const text = titleElement.getAttribute('data-text') || '0xWHOAMI';
  titleElement.textContent = '';
  titleElement.classList.add('typewriter-active');

  let i = 0;
  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  cursor.textContent = '_';
  titleElement.appendChild(cursor);

  function type() {
    if (i < text.length) {
      titleElement.insertBefore(document.createTextNode(text.charAt(i)), cursor);
      i++;
      setTimeout(type, 100 + Math.random() * 50);
    } else {
      // Keep cursor blinking after typing completes
      cursor.classList.add('blink');
    }
  }

  // Small delay before starting
  setTimeout(type, 500);
}

// Easter Egg Hidden Log
function initEasterEgg() {
  const trigger = document.getElementById('easter-egg-trigger');
  const log = document.getElementById('hidden-log');

  if (!trigger || !log) return;

  trigger.addEventListener('click', function(e) {
    e.preventDefault();
    log.classList.toggle('revealed');

    if (log.classList.contains('revealed')) {
      trigger.textContent = '[hide log]';
      // Scroll to log
      log.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      trigger.textContent = '[show hidden log]';
    }
  });
}
