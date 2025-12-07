document.addEventListener('DOMContentLoaded', function() {
    // Data Kontak Anda
    const whatsappNumber = '+6285723340416';
    const emailAddress = 'hadirahmat222@gmail.com';
    
    // Dapatkan elemen link berdasarkan ID
    const waLink = document.getElementById('wa-link');
    const emailLink = document.getElementById('email-link');
    const dokumentasiLink = document.getElementById('dokumentasi-link');

    // 1. Fungsi untuk WhatsApp
    if (waLink) {
        waLink.addEventListener('click', function(event) {
            event.preventDefault(); 
            // Membuat link WhatsApp dengan pesan awal
            const waUrl = `https://wa.me/${whatsappNumber}?text=Halo%2C%20saya%20tertarik%20dengan%20portofolio%20Anda.`;
            window.open(waUrl, '_blank'); 
        });
    }

    // 2. Fungsi untuk Email
    if (emailLink) {
        emailLink.addEventListener('click', function(event) {
            event.preventDefault(); 
            // Membuat link mailto dengan subjek dan body
            const mailtoUrl = `mailto:${emailAddress}?subject=Tawaran%20Kerja%20/%20Kolaborasi&body=Halo%20Hadi%20Rahmat%2C%0A%0A...`;
            window.location.href = mailtoUrl; 
        });
    }

    // 3. Fungsi untuk Dokumentasi Proyek
    if (dokumentasiLink) {
        dokumentasiLink.addEventListener('click', function(event) {
            event.preventDefault(); 
            // Mengarahkan ke file dokumentasi.html
            window.location.href = 'dokumentasi/dokumentasi.html';
        });
    }
});