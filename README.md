# Botito - Yapay Zeka Soru-Cevap Sistemi

<img width="1506" alt="botito" src="https://github.com/user-attachments/assets/27500cf8-f982-4a6f-9dae-277a1bf1db46" />
<img width="1370" alt="train" src="https://github.com/user-attachments/assets/6d435071-c980-49e4-b0f8-65dda3a6f5f1" />


## Proje Hakkında
Botito, kullanıcıların doğal dilde sordukları soruları anlamlandırarak cevap verebilen bir yapay zeka tabanlı sohbet botudur. Bu proje, [Google Gemini API](https://aistudio.google.com) kullanılarak özelleştirilmiş ve verimli bir şekilde çalışması için eğitilmiştir. 

### Özellikler
- **Doğal Dil İşleme (NLP):** Kullanıcıların metinlerini analiz ederek anlamlı yanıtlar üretir.
- **Eğitilmiş Model Kullanımı:** Özel olarak hazırlanmış bir dataset ile model eğitimi yapılmıştır.
- **Gerçek Zamanlı Yanıtlar:** Kullanıcının sorularına hızlı ve doğru cevaplar sağlar.
- **Modern UI:** Kullanıcı dostu bir arayüz ile interaktif bir deneyim sunar.

---

## Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (>=16.0)
- NPM veya Yarn
- Google Gemini API erişimi (API anahtarı gereklidir)

### Adımlar
1. **Projeyi Klonlayın:**
   ```bash
   git clone https://github.com/kullanici/botito.git
   cd botito
   ```

2. **Bağımlılıkları Yükleyin:**
   ```bash
   npm install
   ```

3. **API Anahtarını Ekleyin:**
   `src/lib/gemini.js` dosyasını açarak `API_KEY` kısmını kendi anahtarınızla değiştirin.

4. **Uygulamayı Başlatın:**
   ```bash
   npm run dev
   ```
   Tarayıcınızda [http://localhost:5173](http://localhost:5173) adresine giderek uygulamayı görüntüleyebilirsiniz.

---

## Kullanım

1. **Bir Soru Sorun:** Sohbet kutusuna herhangi bir soru yazın.
2. **Cevap Alın:** Botito, sizin için en uygun cevabı üretir.
3. **Deneyimi Keşfedin:** Daha fazla soru sorarak Botito'nun kapasitesini test edin!

---

## Lisans

Bu proje MIT lisansı ile lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına göz atabilirsiniz.
