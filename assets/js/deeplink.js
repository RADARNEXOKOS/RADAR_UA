// assets/js/deeplink.js
(function() {
  const link = document.getElementById('openTelegram');
  if (!link) return;

  link.addEventListener('click', function(e) {
    const ua = navigator.userAgent || '';
    const tgUrl = 'https://t.me/+f-0be4MLfREzYmIy';
    const iosDeep = 'tg://resolve?domain=%2Bf-0be4MLfREzYmIy';
    const androidIntent = 'intent://t.me/+f-0be4MLfREzYmIy#Intent;package=org.telegram.messenger;scheme=https;end';

    if (/Android/i.test(ua)) {
      e.preventDefault();
      window.location.href = androidIntent;
    } else if (/iPhone|iPad|iPod/i.test(ua)) {
      e.preventDefault();
      window.location.href = iosDeep;
      setTimeout(function() {
        window.location.href = tgUrl;
      }, 500);
    }
    // на десктопі href спрацює як звичайно
  });
})();
