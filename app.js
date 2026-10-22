(function () {
  'use strict';
  const config = window.APP_CONFIG || {};
  const hasApk = typeof config.apkUrl === 'string' && config.apkUrl.trim().length > 0;
  const downloadLinks = document.querySelectorAll('.download-link');
  const labels = document.querySelectorAll('.download-button-label');
  const version = document.getElementById('app-version');
  const message = document.getElementById('download-message');
  const year = document.getElementById('current-year');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.getElementById('main-nav');

  if (version) version.textContent = 'Version ' + (config.version || '—');
  if (year) year.textContent = String(new Date().getFullYear());

  downloadLinks.forEach(function (link) {
    if (hasApk) {
      link.href = config.apkUrl.trim();
      link.removeAttribute('aria-disabled');
      link.classList.remove('is-disabled');
      if (link.tagName === 'A') link.setAttribute('download', '');
      labels.forEach(function (label) { label.textContent = 'APK Download လုပ်ရန်'; });
    } else {
      link.href = '#download';
      link.setAttribute('aria-disabled', 'true');
      link.classList.add('is-disabled');
      link.addEventListener('click', function (event) { event.preventDefault(); });
      labels.forEach(function (label) { label.textContent = 'APK မတင်ရသေးပါ'; });
    }
  });

  if (hasApk && message) message.textContent = 'Download လုပ်ပြီးနောက် Android စက်၏ လုံခြုံရေးညွှန်ကြားချက်များကို ဖတ်ရှုပါ။';
  if (menuButton && nav) {
    menuButton.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(function (item) { observer.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add('visible'); });
  }
})();
