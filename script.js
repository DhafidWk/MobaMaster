// Fungsi untuk pencarian artikel
function searchArticles() {
    // Ambil nilai dari input search
    let searchTerm = document.getElementById('searchInput').value.toLowerCase();

    // Ambil semua artikel yang ada berdasarkan class
    let articles = document.querySelectorAll('.blog');
    
    // Loop melalui setiap artikel untuk mengecek kecocokan
    articles.forEach(function(article) {
        // Ambil judul artikel
        let title = article.querySelector('.headline a h2').textContent.toLowerCase();
        
        // Cek apakah judul artikel mengandung kata kunci
        if (title.includes(searchTerm)) {
            // Jika cocok, tampilkan artikel
            article.style.display = 'flex';
        } else {
            // Jika tidak cocok, sembunyikan artikel
            article.style.display = 'none';
        }
    });
}

// Event listener untuk mendeteksi tombol Enter pada input search
document.getElementById('searchInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Mencegah reload halaman atau perilaku default
        searchArticles(); // Memanggil fungsi pencarian
    }
});


function confirmNavigation(event) {
    // Munculkan konfirmasi ke pengguna
    const userConfirmation = confirm("Apakah anda yakin meninggalkan MobaMaster dan Menuju DOWNLEGENDS?");
    
    // Jika pengguna memilih "Ya", link akan berfungsi normal
    if (userConfirmation) {
        return true;  // Melanjutkan ke halaman DOWNLEGENDS
    } else {
        // Jika pengguna memilih "Tidak", tetap di halaman MobaMaster
        event.preventDefault();  // Mencegah navigasi
        return false;  // Tetap di halaman
    }
}

window.onscroll = function() {addShadowToWrapper()};

function addShadowToWrapper() {
    let wrapper = document.querySelector('.wrapper');
    
    if (window.scrollY > 30) { // Jika scroll lebih dari 50px
        wrapper.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
    } else {
        wrapper.style.boxShadow = "none";
    }
}
