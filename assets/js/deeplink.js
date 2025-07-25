// assets/js/deeplink.js
(function() {
  const link = document.getElementById('openTelegram');
  if (!link) return;

  link.addEventListener('click', function(e) {
    const ua = navigator.userAgent || '';
    // Android intent-схема
    const androidIntent = 
      'intent://t.me/+f-0be4MLfREzYmIy#Intent;package=org.telegram.messenger;scheme=https;end';
    // iOS deep-link
    const iosDeepLink = 'tg://join?invite=f-0be4MLfREzYmIy';
    // Фолбек на веб-лінк
    const webFallback = 'https://t.me/+f-0be4MLfREzYmIy';

    if (/Android/i.test(ua)) {
      e.preventDefault();
      // Спочатку пробуємо Intent
      window.location.href = androidIntent;
      // На випадок, якщо Telegram не встановлений
      setTimeout(() => {
        window.location.href = webFallback;
      }, 1500);
    }
    else if (/iPhone|iPad|iPod/i.test(ua)) {
      e.preventDefault();
      // Direct tg://join…
      window.location.href = iosDeepLink;
      // Фолбек через 1.5с
      setTimeout(() => {
        window.location.href = webFallback;
      }, 1500);
    }
    // У десктопних WebView (те саме) або звичайному браузері нічого не блокуємо:
    // href="tg://..." спрацює, або якщо не підтримується — користувач все одно потрапить на HTTPS-лінк при довгому-натисканні.
  });
})();
