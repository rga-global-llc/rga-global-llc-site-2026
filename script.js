const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

document.querySelectorAll('[data-service-tab]').forEach((tab) => {
  tab.addEventListener('click', () => {
    const selected = tab.dataset.serviceTab;
    document.querySelectorAll('[data-service-tab]').forEach((item) => {
      const active = item === tab;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', String(active));
    });
    document.querySelectorAll('.service-panel').forEach((panel) => {
      const active = panel.id === `panel-${selected}`;
      panel.classList.toggle('is-active', active);
      panel.hidden = !active;
    });
  });
});
