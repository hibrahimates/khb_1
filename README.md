# Bina Kullanım Kılavuzu Toplama Uygulaması

Bu proje, yüklenicilerden bina kullanım kılavuzu için gerekli bilgi ve belgeleri toplamak amacıyla geliştirilmiş basit bir web uygulamasıdır. React 18 ve Vite kullanılarak oluşturulmuştur ve TailwindCSS ile stillendirilmiştir.

## Özellikler

- Ürün adı, marka/model, bakım firması ve iletişim bilgilerini içeren kayıt formu
- Dosya yükleyebilme ve yüklenen belgeyi indirme
- Kayıtların Firebase Firestore ve Storage'da saklanması
- Kolay takip için tablo görünümü
- Tüm kayıtları Word formatında dışa aktarma
- Eklenen kayıtları düzenleyebilme ve silebilme
- Firebase Authentication ile giriş/kayıt

## Kurulum

```bash
npm install
```

### Ortam Değişkenleri

`.env` dosyası oluşturup aşağıdaki Firebase bilgilerini ekleyin:

```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

### Geliştirme Sunucusu

```bash
npm run dev
```

### Üretim İçin Derleme

```bash
npm run build
```

Derleme çıktısı `docs` klasörüne alınır. GitHub Pages üzerinden ön izleme yapmak için depo ayarlarından `main` dalı ve `docs` klasörünü seçebilirsiniz. Sayfa yayınlandıktan sonra şu adreste ulaşılabilir:

```
https://<kullanici-adi>.github.io/khb_1/
```

## Lisans

GPL lisansı ile yayınlanmıştır.

