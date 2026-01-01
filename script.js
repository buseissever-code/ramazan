// Gerekli HTML elemanlarını seçelim
const turnPageBtn = document.getElementById('turn-page-btn');
const bookContainer = document.querySelector('.book-container');
const pageTurnSound = document.getElementById('page-turn-sound');

// Butona tıklandığında çalışacak fonksiyon
turnPageBtn.addEventListener('click', () => {
    
    // 1. Sayfa çevirme sesini çal
    // (Sesi başa sarıp çalmak, tekrar tekrar tıklanırsa sorun olmasını engeller)
    pageTurnSound.currentTime = 0;
    pageTurnSound.play();
    
    // 2. Animasyonu başlatmak için 'turn' class'ını ekle
    bookContainer.classList.add('turn');
    
    // 3. Animasyonun bitmesini bekle ve sonra yeni sayfaya git
    // CSS'deki transition süresi 1.5s, biz ondan biraz önce yönlendirme yapalım.
    setTimeout(() => {
        window.location.href = 'cv.html';
    }, 1400); // 1400 milisaniye = 1.4 saniye
});
window.location.href = "cv.html";
const book = document.getElementById("book");

book.addEventListener("click", (e) => {
  const rect = book.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // sağ alt 140x140 alan
  if (x > rect.width - 140 && y > rect.height - 140) {
    window.location.href = "cv.html";
  }
});
const hotspot = document.getElementById("hotspot-next");

hotspot.addEventListener("click", () => {
  window.location.href = "cv.html";
});
const panController = document.getElementById('pan-controller');
const movableLayer = document.getElementById('movable-layer');

let isDragging = false;
let startX, startY;
let initialLeft, initialTop;

// Mevcut konumu CSS'den al (Transform değerini parse etmek yerine offset kullanıyoruz)
let currentX = 50;
let currentY = 50;

// Mouse tuşuna basıldığında (Sadece sağ alttaki kutuda)
panController.addEventListener('mousedown', (e) => {
    isDragging = true;
    
    // Mouse'un ilk pozisyonu
    startX = e.clientX;
    startY = e.clientY;
    
    // Katmanın şu anki pozisyonunu kaydet
    // (CSS'de top ve left ile konumlandırdığımız için offset değerlerini alıyoruz)
    initialLeft = movableLayer.offsetLeft;
    initialTop = movableLayer.offsetTop;

    // Sürükleme sırasında seçim yapmayı engelle (yazı seçilmesin diye)
    document.body.style.userSelect = 'none';
    panController.style.cursor = 'grabbing';
});

// Mouse hareket ettiğinde (Tüm pencerede dinliyoruz ki mouse kutudan çıksa bile devam etsin)
window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    e.preventDefault();

    // Ne kadar hareket ettik?
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    // Yeni pozisyonu uygula
    movableLayer.style.left = `${initialLeft + dx}px`;
    movableLayer.style.top = `${initialTop + dy}px`;
});

// Mouse tuşu bırakıldığında
window.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.userSelect = 'auto'; // Yazı seçimini geri aç
    panController.style.cursor = 'move';
});
// Mail Kopyalama Fonksiyonu
function copyEmail(element) {
    // Mail adresini al
    const emailText = document.getElementById("email-text").innerText;
    
    // Panoya kopyala (Modern tarayıcılar için)
    navigator.clipboard.writeText(emailText).then(() => {
        
        // Kopyalandı mesajını bul
        const feedback = element.querySelector(".copy-feedback");
        
        // Mesajı görünür yap
        feedback.classList.add("show");
        
        // 2 saniye sonra mesajı tekrar gizle
        setTimeout(() => {
            feedback.classList.remove("show");
        }, 2000);
        
    }).catch(err => {
        console.error('Kopyalama hatası:', err);
    });
}
window.location.href = "cv.html";
// Mail Kopyalama Fonksiyonu
function copyEmail(element) {
    // Mail adresini al (HTML içindeki span id'si 'email-text' olmalı)
    const emailText = document.getElementById("email-text").innerText;
    
    // Panoya kopyala
    navigator.clipboard.writeText(emailText).then(() => {
        
        // Bu elementin içindeki .copy-feedback sınıfını bul
        const feedback = element.querySelector(".copy-feedback");
        
        // 'show' sınıfını ekle (Görünür yap)
        feedback.classList.add("show");
        
        // 2000 milisaniye (2 saniye) sonra 'show' sınıfını kaldır (Gizle)
        setTimeout(() => {
            feedback.classList.remove("show");
        }, 2000);
        
    }).catch(err => {
        console.error('Kopyalama başarısız:', err);
    });
}
// geri
document.querySelector(".hotspot-prev")?.addEventListener("click", () => {
    window.location.href = "cv.html";
});

// ileri
document.querySelector(".hotspot-next")?.addEventListener("click", () => {
    window.location.href = "projects.html";
});
document.querySelectorAll(".hotspot-next").forEach(hotspot => {
    hotspot.addEventListener("mouseenter", () => {
        document.body.style.cursor = "grab";
    });

    hotspot.addEventListener("mouseleave", () => {
        document.body.style.cursor = "default";
    });

    hotspot.addEventListener("click", () => {
        const target = hotspot.dataset.target;
        if (target) {
            window.location.href = target;
        }
    });
});

document.querySelectorAll(".hotspot-prev").forEach(hotspot => {
    hotspot.addEventListener("mouseenter", () => {
        document.body.style.cursor = "grab";
    });

    hotspot.addEventListener("mouseleave", () => {
        document.body.style.cursor = "default";
    });

    hotspot.addEventListener("click", () => {
        history.back();
    });
});
