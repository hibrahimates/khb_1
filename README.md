# Bina Kullanım Kılavuzu Toplama Uygulaması

Bu proje, yüklenicilerden bina kullanım kılavuzu için gerekli bilgi ve belgeleri toplamak amacıyla geliştirilmiş basit bir web uygulamasıdır. React 18 ve Vite kullanılarak oluşturulmuştur ve TailwindCSS ile stillendirilmiştir.

## Özellikler

- Ürün adı, marka/model, bakım firması ve iletişim bilgilerini içeren kayıt formu
- Dosya yükleyebilme ve yüklenen belgeyi indirme
- Kayıtların bulutta saklanması için bir API (`VITE_API_URL`)
- Kolay takip için tablo görünümü
- Tüm kayıtları Word formatında dışa aktarma
- Eklenen kayıtları düzenleyebilme ve silebilme

## Kurulum

```bash
npm install
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

