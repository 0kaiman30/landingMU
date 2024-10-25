function createSocialIcon(iconPath, className) {
  const a = document.createElement('a');
  a.href = '#';
  a.className = 'social-icon';
  a.onclick = openRickRoll;

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute('width', '24');
  svg.setAttribute('height', '24');
  svg.setAttribute('fill', 'currentColor');
  svg.setAttribute('class', `bi bi-${className}`);
  svg.setAttribute('viewBox', '0 0 16 16');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', iconPath);

  svg.append(path);
  a.append(svg);

  return a;
}

function createFooterIcons() {
  const footerRight = document.querySelector('.footer__right');

  const iconsData = [
    {
      className: 'facebook',
      path: 'M8 0C3.58 0 0 3.58 0 8c0 4.41 3.58 8 8 8 4.41 0 8-3.59 8-8 0-4.42-3.59-8-8-8zm1.9 8H8V4.88c0-.63.18-1.05 1.11-1.05H10V0h-2C5.67 0 5 1.42 5 3.3V8H2v2h3v8h2V10h2.9z'
    },
    {
      className: 'twitter',
      path: 'M5.026 15c6.036 0 9.328-5 9.328-9.334 0-.142 0-.283-.01-.423A6.682 6.682 0 0 0 16 3.538a6.533 6.533 0 0 1-1.885.517A3.293 3.293 0 0 0 15.558 2a6.569 6.569 0 0 1-2.084.793A3.287 3.287 0 0 0 7.88 6.746a9.325 9.325 0 0 1-6.757-3.42 3.285 3.285 0 0 0 1.016 4.377A3.292 3.292 0 0 1 .64 7.26v.041a3.287 3.287 0 0 0 2.638 3.219 3.287 3.287 0 0 1-1.482.057 3.287 3.287 0 0 0 3.066 2.277A6.578 6.578 0 0 1 .97 14.5a9.284 9.284 0 0 0 5.026 1.482'
    },
    {
      className: 'instagram',
      path: 'M8 0C3.58 0 0 3.58 0 8c0 4.41 3.58 8 8 8 4.41 0 8-3.59 8-8 0-4.42-3.59-8-8-8zm4.9 4.5a1.4 1.4 0 0 1 1.1 1.1c.01.1.01.2.01.3s0 .2-.01.3a1.4 1.4 0 0 1-1.1 1.1c-.1.01-.2.01-.3.01s-.2 0-.3-.01a1.4 1.4 0 0 1-1.1-1.1c-.01-.1-.01-.2-.01-.3s0-.2.01-.3a1.4 1.4 0 0 1 1.1-1.1c.1-.01.2-.01.3-.01s.2 0 .3.01zM8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM8 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z'
    }
  ];

  iconsData.forEach(icon => {
    footerRight.append(createSocialIcon(icon.path, icon.className));
  });
}

function openRickRoll(event) {
  event.preventDefault();
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
}

createFooterIcons();