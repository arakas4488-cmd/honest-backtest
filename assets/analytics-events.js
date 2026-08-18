document.addEventListener('click', function (e) {
  var a = e.target.closest('a');
  if (!a || typeof gtag !== 'function') return;
  var href = a.getAttribute('href') || '';
  if (href.indexOf('mailto:') === 0) {
    gtag('event', 'contact_click', { method: 'email' });
  } else if (href.indexOf('whop.com') !== -1) {
    gtag('event', 'cta_click', { destination: 'whop', link_url: href });
  }
});
