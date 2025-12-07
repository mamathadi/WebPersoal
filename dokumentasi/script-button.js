document.addEventListener('DOMContentLoaded', function() {
    // 1. Dapatkan elemen tombol berdasarkan ID
    const tombol = document.getElementById('tombolSaya');

    // 2. Tambahkan event listener untuk merespons klik
    if (tombol) {
        tombol.addEventListener('click', function() {
            // 3. Lakukan pengalihan (redirection) ke halaman baru
            const halamanTujuan = 'arsip/halaman_baru.html';
            window.location.href = halamanTujuan;
            
            // Jika ingin membuka di tab baru:
            // window.open(halamanTujuan, '_blank');
        });
    }
});