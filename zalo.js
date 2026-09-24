/* ══════════════════════════════════════════════════════════════════════════
   Nút Zalo: trên máy tính, link zaloapp.com bấm vào không mở được gì,
   nên chặn lại và hiện hộp mã QR để khách quét bằng điện thoại.
   Trên điện thoại vẫn để link chạy bình thường (mở thẳng app Zalo).
   ══════════════════════════════════════════════════════════════════════════ */
(function () {
  var ZALO_URL = 'https://zaloapp.com/qr/p/19hxy2br83hor';
  var PHONE = '0973547609';
  var box = null, lastFocus = null;

  function isPhone() {
    return window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  }

  function build() {
    box = document.createElement('div');
    box.className = 'zalo-modal';
    box.hidden = true;
    box.innerHTML =
      '<div class="zalo-backdrop" data-close></div>' +
      '<div class="zalo-card" role="dialog" aria-modal="true" aria-label="Nhắn Zalo cho TMSTUDIO">' +
        '<button class="zalo-close" type="button" data-close aria-label="Đóng">&times;</button>' +
        '<h2>Quét mã để nhắn Zalo</h2>' +
        '<p>Mở Zalo trên điện thoại, bấm biểu tượng quét mã rồi hướng vào mã bên dưới.</p>' +
        '<img src="assets/zalo-qr.jpg" alt="Mã QR Zalo của TMSTUDIO" width="600" height="700"/>' +
        '<p class="zalo-phone">Hoặc tìm số <strong>' + PHONE + '</strong> trên Zalo</p>' +
        '<a class="btn btn-primary" href="' + ZALO_URL + '" target="_blank" rel="noopener noreferrer">Mở Zalo trên máy này</a>' +
      '</div>';
    document.body.appendChild(box);
    box.addEventListener('click', function (e) {
      if (e.target.hasAttribute('data-close')) close();
    });
  }

  function open() {
    if (!box) build();
    lastFocus = document.activeElement;
    box.hidden = false;
    document.body.style.overflow = 'hidden';
    var btn = box.querySelector('.zalo-close');
    if (btn) btn.focus();
  }

  function close() {
    if (!box) return;
    box.hidden = true;
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href*="zaloapp.com"]') : null;
    if (!a || isPhone()) return;
    if (box && !box.hidden && box.contains(a)) return;   // nút trong chính hộp
    e.preventDefault();
    open();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
