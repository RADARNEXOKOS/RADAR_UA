// assets/js/deeplink.js
const link = document.getElementById('openTelegram');
if (link) {
  link.addEventListener('click', e => {
    e.preventDefault();
    const tgUrl = 'https://t.me/+f-0be4MLfREzYmIy';
    const iosDeep = 'tg://resolve?domain=%2Bf-0be4MLfREzYmIy';
    const androidIntent = 'intent://t.me/+f-0be4MLfREzYmIy#Intent;package=org.telegram.messenger;scheme=https;end';
    const ua = navigator.userAgent || '';
    if (/android/i.test(ua)) {
      window.location = androidIntent;
    } else if (/iPhone|iPad|iPod/i.test(ua)) {
      window.location = iosDeep;
      setTimeout(() => window.location = tgUrl, 500);
    } else {
      window.location = tgUrl;
    }
  });
}
