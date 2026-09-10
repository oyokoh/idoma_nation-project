// Theme toggle — light/dark. No localStorage (this file may render inside a
// sandboxed preview that blocks it); if you're self-hosting this site and
// want the choice to persist across page loads, add localStorage yourself:
//   localStorage.setItem('theme', theme) / localStorage.getItem('theme')
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeToggle.setAttribute('aria-pressed', String(!isDark));
  });
}

// Header background on scroll
const header = document.getElementById('siteHeader');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  siteNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  }));
}

// Generic "demo form" handler — works for the contribute form and the
// palace visitation request form. Both just need a friendly confirmation
// until a real backend/email endpoint is wired up.
function wireDemoForm(formId, confirmId, buildMessage) {
  const form = document.getElementById(formId);
  const confirmBox = document.getElementById(confirmId);
  if (!form || !confirmBox) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    confirmBox.textContent = buildMessage(form);
    confirmBox.classList.add('show');
    form.reset();
    const dz = form.querySelector('.dropzone');
    if (dz) dz.dataset.defaultText && (dz.innerHTML = dz.dataset.defaultText);
    confirmBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

// Dropzone file-name preview — works for any file input paired with a
// sibling .dropzone label.
document.querySelectorAll('input[type="file"]').forEach((input) => {
  const label = input.previousElementSibling;
  if (!label || !label.classList.contains('dropzone')) return;
  label.dataset.defaultText = label.innerHTML;
  input.addEventListener('change', () => {
    if (input.files.length) {
      label.innerHTML = '<strong>' + input.files[0].name + '</strong> selected';
    }
  });
});
