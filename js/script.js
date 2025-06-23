document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.getElementById('menu-container');

    const products = [
        {
            name: 'Fudgy Brownies',
            image: 'images/brownies.png',
            description: 'Brownies cokelat pekat dengan tekstur fudgy yang lumer di mulut.',
            price: 'Rp85.000',
            status: 'Ready'
        },
        {
            name: 'Spaghetti Brulee',
            image: 'images/spaghetti-brulee.png',
            description: 'Spaghetti bolognese creamy, dipanggang dengan saus bechamel keju.',
            price: 'Rpxx.xx',
            status: 'Pre-order'
        },
        {
            name: 'Macaroni Schotel',
            image: 'images/macaroni-schotel.png',
            description: 'Makaroni panggang klasik dengan isian daging dan keju melimpah.',
            price: 'Rpxx.xx',
            status: 'Pre-order'
        }
    ];

    if (menuContainer) {
        menuContainer.innerHTML = '';
        products.forEach(product => {
            const whatsappMessage = `https://wa.me/6281212787704?text=${encodeURIComponent(`Halo, saya ingin pesan ${product.name}.`)}`;

            const productCard = document.createElement('div');
            productCard.className = 'product-card';

            const statusClass = product.status.toLowerCase().replace('-', ''); // 'preorder' atau 'ready'

            productCard.innerHTML = `
                <div class="product-image-container">
                    <span class="status-label ${statusClass}">${product.status}</span>
                    <a href="${whatsappMessage}" target="_blank">
                        <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='https://via.placeholder.com/280x200.png?text=Gambar+Segera+Hadir';">
                    </a>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="deskripsi">${product.description}</p>
                    <p class="harga">${product.price}</p>
                    <a href="${whatsappMessage}" class="btn-pesan" target="_blank">Pesan Sekarang</a>
                </div>
            `;
            menuContainer.appendChild(productCard);
        });
    }
}); 