const cardFlipper = document.getElementById('cardFlipper');
const cardInner = document.getElementById('cardInner');
const cardFront = document.getElementById('cardFront');
const cardBack = document.getElementById('cardBack');

// Fungsi untuk menyesuaikan tinggi kartu
function setCardHeight() {
    // Beri sedikit waktu agar browser selesai merender konten
    setTimeout(() => {
        if (cardFlipper.classList.contains('is-flipped')) {
            // Jika kartu dibalik, atur tinggi berdasarkan sisi belakang
            cardInner.style.height = cardBack.offsetHeight + 'px';
        } else {
            // Jika kartu di depan, atur tinggi berdasarkan sisi depan
            cardInner.style.height = cardFront.offsetHeight + 'px';
        }
    }, 100); // Penundaan 100 milidetik
}

// Panggil fungsi saat halaman pertama kali dimuat
window.addEventListener('load', setCardHeight);
// Panggil fungsi saat ukuran jendela berubah (untuk responsivitas)
window.addEventListener('resize', setCardHeight);

// Fungsi untuk membalik kartu saat diklik
cardFlipper.addEventListener('click', () => {
    cardFlipper.classList.toggle('is-flipped');
    // Panggil fungsi penyesuaian tinggi setiap kali kartu dibalik
    setCardHeight();
});