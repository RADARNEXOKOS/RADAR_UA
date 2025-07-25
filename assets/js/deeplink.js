// assets/js/deeplink.js
(function() {
  const link = document.getElementById('openTelegram');
  if (!link) return;

  link.addEventListener('click', function(e) {
    e.preventDefault();
    const ua = navigator.userAgent || '';
    const tgDeepLink = 'tg://resolve?domain=%2Bf-0be4MLfREzYmIy';
    const fallbackUrl = 'https://t.me/+f-0be4MLfREzYmIy';

    // Спроба відкрити Telegram через прихований iframe
    const openApp = () => {
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = tgDeepLink;
      document.body.appendChild(iframe);
    };

    if (/Android|iPhone|iPad|iPod/i.test(ua)) {
      // Мобільні in-app браузери
      openApp();
      // Якщо через 2 секунди додаток не відкрився, переходимо на веб‑версію
      setTimeout(function() {
        window.location.href = fallbackUrl;
      }, 2000);
    } else {
      // Десктоп або звичайні браузери — просто відкрити веб‑лінк
      window.open(fallbackUrl, '_blank');
    }
  });
})();
