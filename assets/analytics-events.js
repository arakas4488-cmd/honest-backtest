document.addEventListener('click', function (e) {
  var a = e.target.closest('a');
  if (!a) return;
  var href = a.getAttribute('href') || '';
  if (href.indexOf('mailto:') === 0) {
    if (typeof gtag === 'function') gtag('event', 'contact_click', { method: 'email' });
    var address = decodeURIComponent(href.slice('mailto:'.length).split('?')[0]);
    if (navigator.clipboard && address) {
      navigator.clipboard.writeText(address).then(function () {
        showEmailToast(address);
      }).catch(function () {});
    }
  } else if (href.indexOf('whop.com') !== -1) {
    if (typeof gtag === 'function') gtag('event', 'cta_click', { destination: 'whop', link_url: href });
  }
});

function showEmailToast(address) {
  var toast = document.createElement('div');
  toast.textContent = 'Copied ' + address + ' to your clipboard';
  toast.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);' +
    'background:#0a1b2a;color:#eef6f6;border:1px solid #4dd9d4;border-radius:8px;' +
    'padding:10px 16px;font:14px/1.4 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;' +
    'z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,0.3);';
  document.body.appendChild(toast);
  setTimeout(function () { toast.remove(); }, 4000);
}
