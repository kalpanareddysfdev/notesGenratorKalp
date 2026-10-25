'use strict';

const aboutThemeButton = document.getElementById('aboutTheme');

function applyAboutTheme(theme) {
  const dark = theme === 'dark';
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  aboutThemeButton.setAttribute('aria-pressed', String(dark));
  aboutThemeButton.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  aboutThemeButton.firstElementChild.textContent = dark ? '\u2600' : '\u263e';
}

try {
  applyAboutTheme(localStorage.getItem('hub-theme') === 'light' ? 'light' : 'dark');
} catch (error) {
  console.warn('Theme preferences could not be read; using the default dark theme.', error);
  applyAboutTheme('dark');
}

aboutThemeButton.hidden = false;
aboutThemeButton.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyAboutTheme(theme);
  try {
    localStorage.setItem('hub-theme', theme);
  } catch (error) {
    console.warn('The selected theme could not be saved for your next visit.', error);
  }
});
