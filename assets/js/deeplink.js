// assets/js/deeplink.js
const link = document.getElementById('openTelegram');
if (link) {
  link.addEventListener('click', e => {
    const ua = navigator.userAgent || '';
    if (/Android|iPhone|iPad|iPod/i.test(ua)) {
      e.preventDefault();
      const tgUrl = 'https://t.me/+f-0be4MLfREzYmIy';
      const iosDeep = 'tg://resolve?domain=%2Bf-0be4MLfREzYmIy';
      const androidIntent = 'intent://t.me/+f-0be4MLfREzYmIy#Intent;package=org.telegram.messenger;scheme=https;end';
      if (/android/i.test(ua)) {
        window.location = androidIntent;
      } else {
        window.location = iosDeep;
        setTimeout(() => window.location = tgUrl, 500);
      }
    }
    // на десктопі нічого не блокуємо — просто href спрацює
  });
