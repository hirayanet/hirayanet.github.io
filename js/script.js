document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.getElementById('menu-container');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const span = document.getElementsByClassName('close-modal')[0];

    const products = [
        {
            name: 'Fudgy Brownies',
            image: 'images/brownies.png',
            description: 'Brownies cokelat pekat dengan tekstur fudgy yang lumer di mulut.',
            price: 'Rp85.000',
            status: 'Ready'
        },
        {
            name: 'Buko Pandan',
            image: 'images/buko-pandan.png',
            description: 'Isian kelapa muda, agar-agar, nata de coco, sagu mutiara, selasih dengan creamy dan taburan keju.',
            price: 'Rp15.000',
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
            const whatsappMessage = `https://wa.me/6281212787575?text=${encodeURIComponent(`Halo, saya ingin pesan ${product.name}.`)}`;

            const productCard = document.createElement('div');
            productCard.className = 'product-card';

            const statusClass = product.status.toLowerCase().replace('-', '');

            productCard.innerHTML = `
                <div class="product-image-container">
                    <span class="status-label ${statusClass}">${product.status}</span>
                    <img src="${product.image}" alt="${product.name}" class="product-img" onerror="this.onerror=null;this.src='https://via.placeholder.com/280x200.png?text=Gambar+Segera+Hadir';">
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

    document.querySelectorAll('.product-img').forEach(img => {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });

    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}); 