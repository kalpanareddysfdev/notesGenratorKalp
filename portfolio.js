'use strict';

const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const grid = document.getElementById('itemsGrid');
const emptyState = document.getElementById('emptyState');
const resultCount = document.getElementById('resultCount');
const loadStatus = document.getElementById('loadStatus');
let activeCategory = 'all';
let activeTopic = 'all';
const topicFilters = document.getElementById('topicFilters');
const topicButtons = topicFilters.querySelectorAll('.topic-btn');
const menuToggle = document.getElementById('menuToggle');
const navigation = document.querySelector('.nav');

navigation.classList.add('js-menu');
menuToggle.hidden = false;
function setMenu(open) {
  navigation.classList.toggle('menu-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  menuToggle.firstElementChild.textContent = open ? '\u00d7' : '\u2630';
}
menuToggle.addEventListener('click', () => setMenu(!navigation.classList.contains('menu-open')));
navigation.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => setMenu(false)));
navigation.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('menu-open')) {
    setMenu(false);
    menuToggle.focus();
  }
});

function setTheme(theme) {
  const dark = theme === 'dark';
  root.dataset.theme = dark ? 'dark' : 'light';
  themeIcon.textContent = dark ? '\u2600' : '\u263e';
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
}

try {
  setTheme(localStorage.getItem('hub-theme') === 'dark' ? 'dark' : 'light');
} catch (error) {
  console.warn('Theme preferences could not be read; using the default light theme.', error);
}

themeToggle.addEventListener('click', () => {
  const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(theme);
  try {
    localStorage.setItem('hub-theme', theme);
  } catch (error) {
    console.warn('The selected theme could not be saved for your next visit.', error);
  }
});

function filterCards() {
  const query = searchInput.value.toLowerCase().trim();
  let visibleCount = 0;
  grid.querySelectorAll('.resource-card').forEach(card => {
    const matchesCategory = activeCategory === 'all' || card.dataset.category === activeCategory;
    const searchableText = `${card.textContent} ${card.dataset.tags || ''}`.toLowerCase();
    const topicLabels = Array.from(card.querySelectorAll('.resource-topics span'), label => label.textContent).join(' ');
    const topics = `${topicLabels} ${card.dataset.tags || ''}`.toLowerCase().split(/[^a-z0-9]+/);
    const matchesTopic = activeTopic === 'all' || activeTopic.toLowerCase().split(' ').every(word => topics.includes(word));
    card.hidden = !(matchesCategory && matchesTopic && searchableText.includes(query));
    if (!card.hidden) visibleCount++;
  });
  resultCount.textContent = `${visibleCount} ${visibleCount === 1 ? 'resource' : 'resources'} to explore`;
  emptyState.hidden = visibleCount !== 0;
  filterButtons.forEach(button => {
    const category = button.dataset.category;
    const count = category === 'all' ? grid.querySelectorAll('.resource-card').length : grid.querySelectorAll(`.resource-card[data-category="${category}"]`).length;
    const label = category === 'all' ? 'Everything' : category === 'apps' ? 'Tools & apps' : 'Notes & guides';
    button.textContent = `${label} (${count})`;
  });
}

function selectCategory(category) {
  activeCategory = category;
  filterButtons.forEach(button => {
    const selected = button.dataset.category === category;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  filterCards();
}

searchInput.addEventListener('input', filterCards);
filterButtons.forEach(button => button.addEventListener('click', () => selectCategory(button.dataset.category)));
function selectTopic(topic) {
  activeTopic = topic;
  topicButtons.forEach(button => {
    const selected = button.dataset.topic === topic;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  filterCards();
}
topicFilters.hidden = false;
topicButtons.forEach(button => button.addEventListener('click', () => selectTopic(button.dataset.topic)));
document.getElementById('resetFilters').addEventListener('click', () => {
  searchInput.value = '';
  selectTopic('all');
  selectCategory('all');
  searchInput.focus();
});

document.getElementById('messageForm').addEventListener('submit', event => {
  event.preventDefault();
  const nameInput = document.getElementById('senderName');
  const emailInput = document.getElementById('senderEmail');
  const messageInput = document.getElementById('senderMessage');
  if (![nameInput, emailInput, messageInput].every(input => input.value.trim())) {
    const status = document.getElementById('messageStatus');
    status.textContent = 'Please enter your name, email address, and a message before opening an email draft.';
    status.hidden = false;
    return;
  }
  const subject = `Learning hub note from ${nameInput.value.trim()}`;
  const body = `${messageInput.value.trim()}\n\nFrom: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}`;
  const status = document.getElementById('messageStatus');
  status.textContent = 'Opening your email app. If no draft appears, use the email link to send your message. Nothing has been sent by this website.';
  status.hidden = false;
  window.location.href = `mailto:kalpanavreddy1996@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

// Old repository names map to the renamed local resources during deployment.
const renamedFiles = {
  'Claude tutorial.pdf': 'Claude-AI-Tutorial.pdf',
  'GCP Fundamentals Study Note.pdf': 'GCP-Fundamentals-Notes.pdf',
  'Git-Basics-AI-Pages.pdf': 'Git-Basics-AI-Illustrated-Notes.pdf',
  'RAG and data retrival Notes.pdf': 'RAG-and-Data-Retrieval-Notes.pdf',
  'Salesforce-Integration-Complete-Notes.pdf': 'Salesforce-Integration-Notes.pdf',
  'Study Note Generator - Create Beautiful Notes for Any Topic.pdf': 'Study-Note-Generator-Guide.pdf'
};
const excludedPages = new Set(['index.html', 'about.html', 'contact.html', 'privacy.html']);

function createResourceCard(file) {
  const isApp = /\.html$/i.test(file.name);
  const title = file.name.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
  const card = document.createElement('article');
  card.className = 'resource-card';
  card.dataset.file = file.name;
  card.dataset.category = isApp ? 'apps' : 'docs';
  card.dataset.tags = `${file.name} ${title}`;
  const top = document.createElement('div');
  top.className = 'resource-cover generic-cover';
  const icon = document.createElement('span');
  icon.className = 'resource-icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = isApp ? '</>' : 'doc.';
  const type = document.createElement('span');
  type.className = 'resource-type';
  type.textContent = isApp ? 'INTERACTIVE TOOL' : `${file.name.split('.').pop().toUpperCase()} DOCUMENT`;
  top.append(icon, type);
  const body = document.createElement('div');
  body.className = 'resource-body';
  const heading = document.createElement('h3');
  heading.textContent = title;
  const description = document.createElement('p');
  description.textContent = isApp ? 'A hands-on tool from my learning collection.' : 'A reference resource from my growing study library.';
  const actions = document.createElement('div');
  actions.className = 'resource-actions';
  const open = document.createElement('a');
  open.className = 'button button-primary';
  open.href = encodeURIComponent(file.name);
  open.textContent = isApp ? 'Open tool \u2192' : 'Open document \u2197';
  open.setAttribute('aria-label', `Open ${title}`);
  if (!isApp) {
    open.target = '_blank';
    open.rel = 'noopener noreferrer';
  }
  actions.append(open);
  if (!isApp) {
    const download = document.createElement('a');
    download.className = 'button button-secondary';
    download.href = encodeURIComponent(file.name);
    download.download = file.name;
    download.textContent = 'Download \u2193';
    download.setAttribute('aria-label', `Download ${title}`);
    actions.append(download);
  }
  body.append(heading, description, actions);
  card.append(top, body);
  return card;
}

async function loadRepoFiles() {
  try {
    const response = await fetch('https://api.github.com/repos/kalpanareddysfdev/notesGenratorKalp/contents?ref=main', {
      headers: { Accept: 'application/vnd.github.v3+json' }
    });
    if (!response.ok) throw new Error(`Repository request failed (${response.status}).`);
    const files = await response.json();
    if (!Array.isArray(files)) throw new Error('Repository returned an unexpected file listing.');
    const existingFiles = new Set(Array.from(grid.querySelectorAll('.resource-card'), card => card.dataset.file.toLowerCase()));
    for (const file of files) {
      if (!file || file.type !== 'file' || typeof file.name !== 'string') continue;
      const lowerName = file.name.toLowerCase();
      if (file.name.startsWith('.') || excludedPages.has(lowerName) || !/\.(html|pdf|docx?)$/i.test(file.name)) continue;
      const canonicalName = renamedFiles[file.name] || file.name;
      if (existingFiles.has(canonicalName.toLowerCase())) continue;
      grid.append(createResourceCard(file));
      existingFiles.add(canonicalName.toLowerCase());
    }
    filterCards();
  } catch (error) {
    console.warn('New repository resources could not be loaded. The curated library remains available.', error);
    loadStatus.textContent = 'Showing the curated library. New additions could not be checked right now.';
    loadStatus.hidden = false;
  }
}

filterCards();
loadRepoFiles();
