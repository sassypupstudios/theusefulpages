/* ===========================================
   The Useful Pages — Shared JavaScript
   =========================================== */

// Apply dark mode before paint to prevent flash
(function () {
  const stored = localStorage.getItem('tup_dark');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (stored !== null ? stored === '1' : prefersDark) {
    document.documentElement.classList.add('dark');
  }
})();

document.addEventListener('DOMContentLoaded', function () {
  const html = document.documentElement;

  // --- Dark Mode Toggle ---
  const darkToggle = document.getElementById('dark-toggle');
  if (darkToggle) {
    darkToggle.addEventListener('click', function () {
      const isDark = html.classList.toggle('dark');
      localStorage.setItem('tup_dark', isDark ? '1' : '0');
    });
  }

  // --- Mobile Menu ---
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden', isOpen);
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
    });
    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Highlight active nav link
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('nav a[data-nav]').forEach(function (link) {
    const href = link.getAttribute('href').replace(/\/$/, '') || '/';
    if (currentPath === href || (href !== '' && href !== '/' && currentPath.startsWith(href))) {
      link.classList.add('text-indigo-600', 'font-semibold');
      link.classList.remove('text-gray-600');
    }
  });
});

// --- Toast Notification ---
function showToast(message, duration) {
  duration = duration || 2200;
  var toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._tid);
  toast._tid = setTimeout(function () { toast.classList.remove('show'); }, duration);
}

// --- Copy to Clipboard ---
async function copyToClipboard(text, msg) {
  msg = msg || 'Copied to clipboard!';
  try {
    await navigator.clipboard.writeText(text);
    showToast(msg);
    return true;
  } catch (_) {
    const ta = document.createElement('textarea');
    ta.value = text;
    Object.assign(ta.style, { position: 'fixed', opacity: '0', top: '0', left: '0' });
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast(msg);
      return true;
    } catch (e) {
      showToast('Copy failed — please select and copy manually.');
      return false;
    } finally {
      document.body.removeChild(ta);
    }
  }
}
