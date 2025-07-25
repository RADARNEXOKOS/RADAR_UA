// assets/js/deeplink.js
(function() {
  const link = document.getElementById('openTelegram');
  if (!link) return;

  link.addEventListener('click', function(e) {
    e.preventDefault();
    const ua = navigator.userAgent || '';
    // Invite deep-link for group/channel
    const tgDeepLink = 'tg://join?invite=f-0be4MLfREzYmIy';
    const fallbackUrl = 'https://t.me/+f-0be4MLfREzYmIy';

    // Attempt to open Telegram via hidden iframe
    const openApp = () => {
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = tgDeepLink;
      document.body.appendChild(iframe);
    };

    if (/Android|iPhone|iPad|iPod/i.test(ua)) {
      // Mobile in-app browsers
      openApp();
      // Fallback to web link after delay
      setTimeout(function() {
        window.location.href = fallbackUrl;
      }, 2000);
    } else {
      // Desktop or normal browsers: open web link directly
      window.open(fallbackUrl, '_blank');
    }
  });
})();
