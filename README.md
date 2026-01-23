# Jekyll Tailwind Blog Template

Bu proje, modern ve minimalist bir blog şablonudur. Jekyll, Tailwind CSS ve Alpine.js kullanılarak oluşturulmuştur.

## 🛠 Teknolojiler

- **Static Site Generator:** [Jekyll](https://jekyllrb.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Interactivity:** [Alpine.js](https://alpinejs.dev/)
- **Icons:** Inline SVG (Lucide-inspired)
- **Deployment:** [GitHub Pages](https://pages.github.com/)

## 🚀 Yerel Geliştirme

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

### 1. Jekyll Sunucusunu Başlatma
```bash
jekyll serve --livereload
```

### 2. Tailwind CSS İzleyicisini Başlatma (Geliştirme sırasında)
```bash
npx tailwindcss -i ./assets/main.css -o ./assets/main.css --watch
```

## 📁 Dosya Yapısı

- `_posts/`: Markdown formatındaki blog yazıları.
- `_layouts/`: Sayfa şablonları (default, post vb.).
- `assets/`: Resimler, CSS ve JavaScript dosyaları.
- `_config.yml`: Jekyll yapılandırma dosyası.
- `CNAME`: Özel alan adı (Custom Domain) tanımı.

## 📜 Lisans

Bu proje MIT lisansı ile lisanslanmıştır.
