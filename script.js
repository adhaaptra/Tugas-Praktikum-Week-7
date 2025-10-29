document.addEventListener('DOMContentLoaded', function() {
    const btnGabung = document.getElementById('btnGabung');
    if (btnGabung) {
        btnGabung.addEventListener('click', function(event) {
            event.preventDefault(); 
            alert('VAMOS, Madridista!');
        });
    }

    const infoButton = document.getElementById('infoButton');
    if (infoButton) {
        infoButton.addEventListener('click', function() {
            if (infoButton.textContent === 'Pelajari Lebih Lanjut') {
                infoButton.textContent = 'Hala Madrid! 🤍'; // Teks berubah
                infoButton.style.backgroundColor = '#0a2d64'; // Ubah warna ke biru gelap
                infoButton.style.color = 'white';
            } else {
                infoButton.textContent = 'Pelajari Lebih Lanjut';
                infoButton.style.backgroundColor = '#fbc02d'; // Kembalikan warna emas
                infoButton.style.color = 'white';
            }
        });
    }

    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 80) { // Scroll sedikit lebih jauh untuk efek
            header.style.backgroundColor = '#ffffff'; // Tetap putih
            header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)'; // Bayangan lebih jelas
            header.style.borderBottom = '#0a2d64 4px solid'; // Garis bawah biru
        } else {
            header.style.backgroundColor = '#ffffff'; 
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            header.style.borderBottom = '#fbc02d 4px solid'; // Garis bawah emas asli
        }
    });
});