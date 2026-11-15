/* DUMI theme interactions: gallery switch + quote mailto composer. */
(function () {
  var main = document.getElementById('dumi-main-image');
  document.querySelectorAll('.dumi-thumb').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      if (main && thumb.dataset.full) main.src = thumb.dataset.full;
    });
  });

  var form = document.getElementById('dumi-quote-form');
  if (!form) return;
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var email = (form.querySelector('[name=email]').value || '').trim();
    var lines = [
      'Name: ' + (form.querySelector('[name=name]').value || ''),
      'Company: ' + (form.querySelector('[name=company]').value || ''),
      'Email: ' + email,
      'Country: ' + (form.querySelector('[name=country]').value || ''),
      'Product: ' + (form.querySelector('[name=product]').value || ''),
      'Quantity: ' + (form.querySelector('[name=qty]').value || ''),
      'Destination: ' + (form.querySelector('[name=port]').value || ''),
      '',
      (form.querySelector('[name=msg]').value || '')
    ];
    var subject = 'Quote request' + (form.querySelector('[name=product]').value ? ' — ' + form.querySelector('[name=product]').value : '');
    var href = 'mailto:carstcover@aliyun.com?subject=' + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent(lines.join('\n'));
    window.location.href = href;
  });
})();
