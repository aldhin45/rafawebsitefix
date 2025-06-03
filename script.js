// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk animasi fade-in saat halaman dimuat
    const body = document.body;
    body.style.opacity = 0; // Mulai dengan opacity 0
    body.style.transition = 'opacity 1s ease-in-out'; // Tambahkan transisi

    setTimeout(() => {
        body.style.opacity = 1; // Ubah opacity menjadi 1 setelah 100ms
    }, 100);

    // --- Tombol "Scroll to Top" ---
    // Buat elemen tombol
    const scrollTopButton = document.createElement('button');
    scrollTopButton.id = 'scrollTopBtn';
    scrollTopButton.innerHTML = '&#9650;'; // Panah ke atas
    document.body.appendChild(scrollTopButton);

    // Tambahkan style dasar untuk tombol (ini juga bisa di CSS)
    scrollTopButton.style.display = 'none'; // Sembunyikan secara default
    scrollTopButton.style.position = 'fixed';
    scrollTopButton.style.bottom = '30px';
    scrollTopButton.style.right = '30px';
    scrollTopButton.style.backgroundColor = '#007bff';
    scrollTopButton.style.color = 'white';
    scrollTopButton.style.border = 'none';
    scrollTopButton.style.borderRadius = '50%';
    scrollTopButton.style.width = '50px';
    scrollTopButton.style.height = '50px';
    scrollTopButton.style.fontSize = '24px';
    scrollTopButton.style.cursor = 'pointer';
    scrollTopButton.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    scrollTopButton.style.zIndex = '999';
    scrollTopButton.style.transition = 'background-color 0.3s ease, transform 0.3s ease';

    // Efek hover
    scrollTopButton.onmouseover = function() {
        this.style.backgroundColor = '#0056b3';
        this.style.transform = 'scale(1.05)';
    };
    scrollTopButton.onmouseout = function() {
        this.style.backgroundColor = '#007bff';
        this.style.transform = 'scale(1)';
    };

    // Tampilkan/sembunyikan tombol berdasarkan posisi scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) { // Tampilkan jika scroll lebih dari 200px
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });

    // Fungsi saat tombol diklik
    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Animasi scroll halus
        });
    });
});