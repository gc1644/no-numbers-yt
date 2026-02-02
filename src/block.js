const blockedKeys = new Set([
  '0','1','2','3','4','5','6','7','8','9',
  'Numpad0','Numpad1','Numpad2','Numpad3','Numpad4',
  'Numpad5','Numpad6','Numpad7','Numpad8','Numpad9',
  'Home','End'
]);

function stopSeek(e) {
  if (blockedKeys.has(e.code) || blockedKeys.has(e.key)) {
    // Only block when we're likely watching video (not typing in input/search)
    if (!e.target.matches('input, textarea, [contenteditable="true"], select')) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

// Capture phase → we can block before the site sees it
window.addEventListener('keydown', stopSeek, true);
window.addEventListener('keypress', stopSeek, true);
window.addEventListener('keyup',   stopSeek, true);
