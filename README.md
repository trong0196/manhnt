# Landing page — in ảnh nam châm tủ lạnh (HTML/CSS)

Trang tĩnh viết bằng HTML + CSS thuần. Gồm **7 trang**, link qua lại đầy đủ.
Không build, không dependency, không framework.

## Chạy thử

Mở trực tiếp `index.html` bằng trình duyệt — không cần build, không cần server.

Nếu muốn chạy qua HTTP (từ trong thư mục này):

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

| Trang | File |
|---|---|
| Trang chủ | `index.html` |
| Sản phẩm | `products.html` |
| Đánh giá | `reviews.html` |
| Giới thiệu | `about.html` |
| Liên hệ | `contact.html` |
| Gửi ảnh để in | `order.html` |
| Chi tiết ảnh nam châm | `details.html` |

Nút **"Gửi ảnh để in" / "Gửi ảnh ngay"** ở mọi trang đều dẫn sang `order.html`.
Nút **"Nhắn Zalo"** và icon social trỏ ra link ngoài (Zalo/WhatsApp/FB/IG/TikTok).
Trên máy tính, bấm link Zalo sẽ mở hộp mã QR (`zalo.js`) thay vì đi thẳng ra
zaloapp.com — trên điện thoại vẫn mở app Zalo như bình thường.

## Cấu trúc

```
.
├── index.html         # trang chủ
├── products.html      # sản phẩm
├── reviews.html       # đánh giá (kênh xem phản hồi + cách gửi feedback)
├── about.html         # giới thiệu (bố cục riêng: giá trị, quy trình xưởng, cam kết)
├── contact.html       # liên hệ (6 kênh)
├── order.html         # gửi ảnh để in (nhúng Google Form)
├── details.html       # chi tiết ảnh nam châm (24 ảnh sản phẩm)
├── styles.css         # style DÙNG CHUNG cho cả 7 trang, design token ở :root
├── zalo.js            # bấm nút Zalo trên máy tính → hiện hộp mã QR
└── assets/
    ├── magnets/m01..m24.jpg  # ảnh sản phẩm của tiệm — trang chi tiết ảnh nam châm
    ├── hero-fridge.jpg       # ảnh hero (trang chủ, giới thiệu, liên hệ, đánh giá)
    ├── magnet-closeup.jpg    # ảnh nam châm xếp trên bàn (trang chủ, sản phẩm, chi tiết)
    ├── product-magnets.jpg   # nam châm tròn + chữ nhật (khối khung, trang khung để bàn)
    ├── layer-stack.jpg       # sơ đồ 6 lớp
    ├── gallery-1..2.jpg      # ảnh máy dập ở xưởng (khối Chất lượng)
    ├── favicon.png           # icon tab trình duyệt (180x180)
    ├── zalo-qr.jpg           # danh thiếp Zalo, hiện trong hộp QR
    ├── cta.jpg               # ảnh nghiêng ở banner cuối (tủ lạnh có logo TM)
    └── icon-{zalo,zalo-color,whatsapp,facebook,instagram,tiktok,telegram,email}.svg
```

Mỗi trang tự chứa header + footer (site tĩnh, không có template engine) nên
**sửa menu thì phải sửa ở cả 7 file**. Style thì chỉ có một `styles.css` duy nhất.

Thay ảnh: giữ nguyên tên file trong `assets/` thì không cần sửa HTML.

## Các section — trang chủ

| # | Section | Ghi chú |
|---|---------|---------|
| 1 | Header | sticky, logo 2 dòng, 5 menu, CTA vàng; ≤1023px đổi thành hamburger |
| 2 | Hero | 2 cột chồng lên ảnh, phủ gradient kem; 3 price card nổi góc phải dưới |
| 3 | Ảnh nam châm 5,4x8 | panel kem, ảnh + badge bên trái, 6 set card + note + ví dụ tính tiền + 4 thông số |
| 4 | Ảnh nam châm tròn | nền gradient nâu vàng, mô tả sản phẩm, 5 mức giá set tròn, 2 nút |
| 5 | Quy trình đặt hàng | 4 bước có đường nối đứt nét + box phí ship quốc tế |
| 6 | Chất lượng + Khách nói gì | grid 2 cột: sơ đồ 6 lớp + 2 ảnh xưởng / thẻ dẫn sang Facebook + Zalo |
| 7 | Final CTA | banner vàng, ảnh nghiêng -7°, nút nâu đậm |
| 8 | Footer | **không có** — xem ghi chú bên dưới |

> **Footer:** `index.html` và `products.html` cố ý không có footer.
> 6 trang còn lại vẫn có footer bình thường.

## Design token

Khai báo ở `:root` trong `styles.css`.

| Token | Giá trị | Dùng cho |
|-------|---------|----------|
| `--brand` | `#f6bd16` | nút chính, banner CTA, panel liên hệ, số thứ tự |
| `--brand-footer` | `#f2b705` | nền footer |
| `--brand-soft` | `#fff3c7` | chip trong set card, ô đang chọn |
| `--brand-ink` | `#3b2a05` | heading, wordmark, nút tối trên banner vàng |
| `--on-brand` | `#2b2004` | chữ + icon nằm trên nền vàng |
| `--coral` | `#f36b57` | eyebrow, giá khung, link |
| `--coral-cta` | `#ff6d59` | nút coral (hero trang phụ, form chọn khung) |
| `--gold` | `#f5ca62` | badge "Bán chạy" / "Freeship" |
| `--cream` | `#fffdf8` | nền trang |
| `--cream-warm` | `#fffaf2` | panel lồng bên trong |
| `--line` | `#eadfce` | viền card, divider |

- **Font**: Inter (Google Fonts), weight 400–900. Có fallback system font nên vẫn
  đọc được khi offline.
- **Bo góc**: 5 / 8 / 10px. **Shadow**: ấm (`rgba(53,43,31,…)`), không dùng đen thuần.

## Responsive

Một cây DOM duy nhất, co giãn bằng media query:

- `≥1280px` — layout desktop đầy đủ
- `1024–1279px` — thu gọn, khối ảnh nam châm xuống 1 cột
- `≤1023px` — 1 cột, header đổi sang hamburger, hero price card xuống dưới ảnh
- `≤599px` — điện thoại: set card / thông số / nút xếp dọc

## Ghi chú

- CSS viết tay, class name đặt theo ngữ nghĩa (`.set-card`, `.frame-prices`…),
  không dùng utility class.
- Icon social là SVG đen trên nền trong suốt, để nguyên màu đen trên nền vàng
  (footer, panel liên hệ).
- Không có script analytics / tracking / widget chat.

## Các trang phụ

**`products.html`** — tiêu đề trang + khối "Chọn set ảnh nam châm" + khối "Khung ảnh để bàn".
Giống trang chủ nhưng bỏ phần ví dụ tính tiền / thông số, và 2 nút đổi thành
"Xem chi tiết" (đậm) + "Gửi ảnh để in" (viền).

**`reviews.html`** — hero phủ gradient lên ảnh + 2 thẻ ("Đánh giá mới nhất nằm ở
Facebook" và "Bạn vừa nhận hàng?" với 3 bước gửi feedback) + banner CTA.
Chưa có ảnh feedback thật nên trang không còn lưới ảnh.

**`about.html`** — bố cục riêng (`.story-*`), khác trang chủ: mở đầu 2 cột với 2 ảnh
chồng nghiêng, 4 thẻ "Tiệm làm gì cho tấm ảnh của bạn", danh sách 5 bước ở xưởng
kèm ảnh sticky bên phải, panel cam kết nền nâu đậm, CTA cuối.

**`contact.html`** — hero + panel vàng chứa 6 kênh liên hệ (Zalo, WhatsApp,
Facebook, Instagram, Telegram, Email), 3 cột desktop → 2 → 1.

**`order.html`** — phần mở đầu (3 việc cần chuẩn bị) + khung nhúng **Google Form**
để khách điền đơn và tải ảnh. Dán đường dẫn form vào biến `FORM_URL` trong thẻ
`<script>` cuối trang. Chưa dán thì trang tự hiện khối "Gửi ảnh qua Zalo" thay cho
biểu mẫu, nên không bao giờ hiện ô trống.

**`details.html`** — trang chi tiết ảnh nam châm: hero, 6 set giá,
4 điểm nổi bật, quy trình 4 bước, 3 thông số, khối cấu tạo 6 lớp, khối keo nano,
lưới 24 ảnh sản phẩm của tiệm.

### Nút "Xem chi tiết" dẫn đi đâu

| Ở đâu | Dẫn tới |
|---|---|
| `products.html` — khối ảnh nam châm | `details.html` |

### Nhúng Google Form ở `order.html`

1. Tạo Google Form, thêm các câu hỏi (tên, SĐT, địa chỉ, set ảnh, khung, tải ảnh, ghi chú).
2. Trong form bấm **Send → tab `< >`**, copy phần `src` (dạng
   `https://docs.google.com/forms/d/e/…/viewform?embedded=true`).
3. Dán vào `const FORM_URL = '…'` ở cuối `order.html`.
4. Form dài hơn khung thì chỉnh `min-height` của `.order-form-frame` trong `styles.css`.

Câu trả lời tự vào Google Sheet qua **Responses → Link to Sheets**.
Giá ảnh 5,4x8: 6 ảnh 120k · 20 ảnh 400k · 30 ảnh 600k · 50 ảnh 1.000k · 100 ảnh 1.990k.
Giá ảnh tròn 6x6: 6 ảnh 60k · 20 ảnh 200k · 30 ảnh 300k · 50 ảnh 500k · 100 ảnh 1tr.
