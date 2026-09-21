# Landing page — in ảnh nam châm tủ lạnh (HTML/CSS)

Trang tĩnh viết bằng HTML + CSS thuần. Gồm **8 trang**, link qua lại đầy đủ.
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
| Chi tiết khung để bàn | `khung-de-ban.html` |

Nút **"Gửi ảnh để in" / "Gửi ảnh ngay"** ở mọi trang đều dẫn sang `order.html`.
Nút **"Nhắn Zalo"** và icon social trỏ ra link ngoài (Zalo/WhatsApp/FB/IG/TikTok).

## Cấu trúc

```
.
├── index.html         # trang chủ
├── products.html      # sản phẩm
├── reviews.html       # đánh giá (47 ảnh feedback)
├── about.html         # giới thiệu (câu chuyện + timeline cột mốc)
├── contact.html       # liên hệ (6 kênh)
├── order.html         # gửi ảnh để in (wizard 3 bước + chọn khung)
├── details.html       # chi tiết ảnh nam châm (30 ảnh khách hàng)
├── khung-de-ban.html  # chi tiết khung để bàn (12 ảnh khách hàng)
├── styles.css         # style DÙNG CHUNG cho cả 8 trang, design token ở :root
└── assets/
    ├── reviews/r01..r47.jpg  # ảnh gallery trang đánh giá
    ├── magnets/m01..m30.jpg  # ảnh khách hàng — trang chi tiết ảnh nam châm
    ├── frames/f01..f12.jpg   # ảnh khách hàng — trang chi tiết khung
    ├── nano.jpg              # keo dán nano acrylic
    ├── hero-fridge.jpg       # ảnh hero trang chủ
    ├── magnet-closeup.jpg    # dán ảnh lên tủ lạnh
    ├── desk-frame.jpg        # khung để bàn trên bàn làm việc
    ├── layer-stack.jpg       # sơ đồ 6 lớp
    ├── desk-frame-real.jpg   # khung 12 ảnh
    ├── gallery-1..2.jpg      # ảnh sản phẩm trên tay
    ├── feedback-1..6.jpg     # screenshot feedback khách hàng
    ├── cta.jpg               # ảnh nghiêng ở banner cuối
    └── icon-{zalo,zalo-color,whatsapp,facebook,instagram,tiktok,telegram,email}.svg
```

Mỗi trang tự chứa header + footer (site tĩnh, không có template engine) nên
**sửa menu thì phải sửa ở cả 8 file**. Style thì chỉ có một `styles.css` duy nhất.

Thay ảnh: giữ nguyên tên file trong `assets/` thì không cần sửa HTML.

## Các section — trang chủ

| # | Section | Ghi chú |
|---|---------|---------|
| 1 | Header | sticky, logo 2 dòng, 5 menu, CTA vàng; ≤1023px đổi thành hamburger |
| 2 | Hero | 2 cột chồng lên ảnh, phủ gradient kem; 3 price card nổi góc phải dưới |
| 3 | Ảnh nam châm | panel kem, ảnh + badge bên trái, 6 set card + note + ví dụ tính tiền + 4 thông số |
| 4 | Khung để bàn | nền gradient nâu vàng, 11 swatch màu, 5 mức giá, 2 nút |
| 5 | Quy trình đặt hàng | 4 bước có đường nối đứt nét + box phí ship quốc tế |
| 6 | Chất lượng + Feedback | grid 2 cột: sơ đồ 6 lớp / lưới 6 ảnh feedback |
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

**`reviews.html`** — hero phủ gradient lên ảnh + lưới 47 ảnh feedback
(4 cột desktop → 3 → 2 trên điện thoại) + banner CTA. Ảnh dùng `loading="lazy"`.

**`about.html`** — hero + khối "Hành trình" + timeline 9 cột mốc
(chấm tròn coral, cột mốc cuối màu nâu đậm) + khối quote nền gradient vàng→coral
với dấu ngoặc kép Georgia mờ.

**`contact.html`** — hero + panel vàng chứa 6 kênh liên hệ (Zalo, WhatsApp,
Facebook, Instagram, Telegram, Email), 3 cột desktop → 2 → 1.

**`order.html`** — wizard 3 bước (Thêm Ảnh / Thông Tin / Hoàn Tất), vùng kéo-thả
ảnh, khối chọn khung để bàn (5 cỡ × 11 màu × số lượng), nút "Tiếp tục" disabled.
Chỉ là **giao diện tĩnh** — không có xử lý upload thật.

**`details.html`** — trang chi tiết ảnh nam châm: hero, 6 set giá,
4 điểm nổi bật, quy trình 4 bước, 3 thông số, khối cấu tạo 6 lớp, khối keo nano,
lưới 30 ảnh khách hàng.

**`khung-de-ban.html`** — trang chi tiết khung để bàn:
hero, 5 mức giá, 11 swatch màu, 2 nút, 3 điểm nổi bật, lưới 12 ảnh khách hàng.

### Nút "Xem chi tiết" dẫn đi đâu

| Ở đâu | Dẫn tới |
|---|---|
| `index.html` — khối khung để bàn | `khung-de-ban.html` |
| `products.html` — khối ảnh nam châm | `details.html` |
| `products.html` — khối khung để bàn | `khung-de-ban.html` |

### Khối "Thêm khung" ở `order.html`

Có JS thật:

1. Mặc định chỉ hiện nút **"+ Thêm khung"**.
2. Bấm vào → hiện form: 5 cỡ khung (mặc định **Khung 4 ảnh**), 11 màu (mặc định
   **Trắng**), số lượng −/+, rồi 2 nút **Thêm** (coral) / **Huỷ** (viền).
3. Bấm **Thêm** → khung được đẩy vào danh sách (`Khung 8 ảnh - Hồng · x2 · 370K`),
   tổng tiền hiện ở góc phải header, form đóng lại, nút **Tiếp tục** bật.
   Thêm lại đúng cỡ + đúng màu thì cộng dồn số lượng thay vì tạo dòng mới.
4. Mỗi dòng có nút **Xoá**; xoá hết thì **Tiếp tục** khoá lại.

Giá: 2 ảnh 55K · 3 ảnh 80K · 4 ảnh 105K · 8 ảnh 185K · 12 ảnh 285K.
Phần upload ảnh vẫn chỉ là giao diện (không có backend).
