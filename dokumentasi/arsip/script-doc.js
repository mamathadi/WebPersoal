document.addEventListener('DOMContentLoaded', () => {
    // KELAS YANG DIPANTAU
    const animatedClasses = [
        'fade-in',
        'delay-1', 
        'slide-in-bottom',
        'zoom-in',
        'slide-in-right',
        'slide-in-left'
    ];

    const selector = animatedClasses.map(cls => `.${cls}`).join(', ');
    const animatedElements = document.querySelectorAll(selector);

    // TAHAP 1: HAPUS KELAS DAN SEMBUNYIKAN
    animatedElements.forEach(el => {
        // Simpan kelas asli
        el.setAttribute('data-animated-class', el.className);
        // Hapus kelas animasi dan delay
        el.className = el.className.split(' ').filter(cls => !animatedClasses.includes(cls)).join(' ');
        el.style.opacity = '0'; // Sembunyikan
    });


    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                
                // TAHAP 2: TAMBAH KELAS KEMBALI UNTUK Memicu ANIMASI
                const originalClasses = target.getAttribute('data-animated-class');
                target.className = originalClasses; // Tambahkan semua kelas kembali
                target.style.opacity = '1';

                observer.unobserve(target);
            }
        });
    }, observerOptions);

    // MULAI PANTAU
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});