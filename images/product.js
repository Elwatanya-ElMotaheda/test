let currentIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    const products = {
        'jacket': {
            title: 'كورنر بلاستيك',
            price: '3 L.E',
            description: 'A stylish and comfortable jacket perfect for any occasion. This jacket features a sleek design with high-quality materials, providing both style and comfort.',
            images: ['1.jpg', '2.jpg']
        },
        'scarf': {
            title: 'كورنر ',
            price: '$49.99',
            description: 'An elegant scarf made from high-quality materials, perfect for adding a touch of sophistication to any outfit.',
            images: ['3.jpg']
        },
        'sweater': {
            title: 'كورنر ',
            price: '$79.99',
            description: 'A cozy sweater that provides warmth and comfort during the cold months. Made from soft, durable materials.',
            images: ['4.jpg']
        },
        'door1': {
            title: 'عجل سلك معدن',
            price: '12',
            description: 'High-quality wooden door made from oak wood, perfect for any home.',
            images: ['5.jpg']
        },
        'door2': {
            title: 'سليكون',
            price: '$349.99',
            description: 'Elegant wooden door with intricate designs, crafted from premium wood.',
            images: ['6.jpg']
        },
        'door3': {
            title: 'سليكون',
            price: '$399.99',
            description: 'Durable and stylish wooden door, ideal for modern homes.',
            images: ['7.jpg']
        },
        'rod1': {
            title: 'فوم',
            price: '$19.99',
            description: 'Lightweight and sturdy aluminum rod, perfect for various applications.',
            images: ['8.jpg']
        },
        'rod2': {
            title: 'سليكون',
            price: '$24.99',
            description: 'High-strength aluminum rod with a sleek finish.',
            images: ['9.jpg']
        },
        'rod3': {
            title: 'مقبض دولفين',
            price: '$29.99',
            description: 'Premium aluminum rod designed for durability and performance.',
            images: ['10.jpg']
        },
        'accessory1': {
            title: 'غراب',
            price: '$9.99',
            description: 'Versatile accessory that complements various outfits.',
            images: ['11.jpg']
        },
        'accessory2': {
            title: 'تكاية',
            price: '$14.99',
            description: 'Stylish accessory perfect for enhancing your wardrobe.',
            images: ['12.jpg']
        },
        'accessory3': {
            title: 'مفصلة',
            price: '$19.99',
            description: 'High-quality accessory designed for durability and style.',
            images: ['13.jpg']
        },
        'sealant': {
            title: 'High Quality Silicone Sealant',
            price: '$12.99',
            description: 'High modulus, fast curing, over-paintable silicone sealant, easy to use.',
            images: ['14.jpg', '15.jpg']
        },
        'hinge': {
            title: 'Metal Hinge',
            price: '$5.99',
            description: 'Durable metal hinge suitable for various applications.',
            images: ['16.jpg', '17.jpg']
        },
        'lock': {
            title: 'High Security Lock',
            price: '$29.99',
            description: 'High security lock for doors, providing excellent protection.',
            images: ['18.jpg']
        },
        'bracket': {
            title: 'Angle Bracket',
            price: '$3.99',
            description: 'Sturdy angle bracket for secure mounting.',
            images: ['19.jpg', '20.jpg']
        },
        'weatherproofing': {
            title: 'Weatherproofing Sealant',
            price: '$15.99',
            description: 'Effective weatherproofing sealant for various surfaces.',
            images: ['21.jpg']
        },
        'superking': {
            title: 'Super King Metal Bracket',
            price: '$6.99',
            description: 'High-quality metal bracket for heavy-duty use.',
            images: ['22.jpg', '23.jpg']
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');

    if (productId && products[productId]) {
        const product = products[productId];
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-description').textContent = product.description;
        
        const slidesContainer = document.getElementById('slides-container');
        slidesContainer.innerHTML = '';
        product.images.forEach((image, index) => {
            const slide = document.createElement('div');
            slide.className = 'slide' + (index === 0 ? ' active' : '');
            const img = document.createElement('img');
            img.src = image;
            img.alt = product.title;
            slide.appendChild(img);
            slidesContainer.appendChild(slide);
        });

        showSlide(currentIndex);
    } else {
        // Handle case where productId is missing or invalid
        document.getElementById('product-title').textContent = 'Product Not Found';
        document.getElementById('product-price').textContent = '';
        document.getElementById('product-description').textContent = 'The product you are looking for does not exist.';
    }
});

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentIndex].classList.add('active');
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

function searchProducts() {
    const input = document.getElementById('search-input').value.toLowerCase();
    window.location.href = `search.html?query=${input}`;
}

function openMessengerLink() {
    window.location.href = "https://m.me/273899432483729";
}
