// Global Typewriter Effect for Page Titles

document.addEventListener('DOMContentLoaded', function() {
  initTypewriter();
  initEasterEgg();
});

// Typewriter Effect - works on any element with .page-title class
function initTypewriter() {
  const titleElement = document.querySelector('.page-title');
  if (!titleElement) return;

  const text = titleElement.getAttribute('data-text') || titleElement.textContent;
  titleElement.textContent = '';

  let i = 0;
  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  cursor.textContent = '_';
  titleElement.appendChild(cursor);

  function type() {
    if (i < text.length) {
      titleElement.insertBefore(document.createTextNode(text.charAt(i)), cursor);
      i++;
      setTimeout(type, 80 + Math.random() * 40);
    }
    // Cursor keeps blinking via CSS animation (no class toggle needed)
  }

  // Small delay before starting
  setTimeout(type, 300);
}

// Easter Egg Hidden Log (only works on pages with these elements)
function initEasterEgg() {
  const trigger = document.getElementById('easter-egg-trigger');
  const log = document.getElementById('hidden-log');

  if (!trigger || !log) return;

  trigger.addEventListener('click', function(e) {
    e.preventDefault();
    log.classList.toggle('revealed');

    if (log.classList.contains('revealed')) {
      trigger.textContent = '[hide log]';
      log.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      trigger.textContent = '[show hidden log]';
    }
  });
}
