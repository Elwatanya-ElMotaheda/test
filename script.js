// Products Data
const products = {
    'p1': {
        title: 'عجل سلك معدن',
        description: 'عجل سلك معدن عالي الجودة، مصمم لتحمل الأوزان الثقيلة وتسهيل الحركة بكل سلاسة في مختلف البيئات. يتميز بالمتانة وطول العمر الافتراضي، مما يجعله الاختيار الأمثل للاستخدامات المنزلية والتجارية.',
        images: ['عجل سلك معدن.jpg'],
    },
    'p2': {
        title: 'عجل زجاج',
        description: 'عجل زجاج قوي ومتين، مصمم خصيصًا لتحمل الأوزان الكبيرة والحفاظ على سلامة الأغراض المنقولة. يتميز بتصميمه الأنيق وقدرته على التحرك بسهولة ونعومة، مما يجعله مثاليًا للاستخدام في الأثاث الزجاجي والمعارض.',
        images: ['عجل زجاج.jpg'],
    },
    'p3': {
        title: 'عجل ps',
        description: 'عجل PS متعدد الاستخدامات، يتميز بالتصميم القوي والهيكل المتين الذي يضمن الأداء العالي في مختلف التطبيقات. يوفر سهولة الحركة والثبات، مما يجعله خيارًا رائعًا لمختلف المعدات والأثاث.',
        images: ['عجل ps.jpg'],
    },
    'p4': {
        title: 'عجل ثلاجة بفرامل و بدون',
        description: 'عجل ثلاجة بفرامل و بدون، مصمم لتسهيل الحركة مع توفير القدرة على الثبات عند الحاجة. هذا العجل يجمع بين الأداء العملي والمتانة، مما يجعله مثاليًا للكثير من الاغراض.',
        images: ['عجل ثلاجة بفرامل و بدون.jpg'],
    },
    'p5': {
        title: 'الواح فيبر سالوميل',
        description: 'ألواح فيبر سالوميل عالية المقاومة والجودة، مثالية للاستخدام في مختلف التطبيقات. كما أنها متوفرة بمجموعة واسعة من الألوان المتنوعة والأشكال المختلفة لتناسب كافة الأذواق والاحتياجات. سواء كنت تبحث عن ألوان زاهية وعصرية أو ألوان كلاسيكية وهادئة، ستجد العديد من الخيارات لتضف لمسة جمالية مميزة على المكان..',
        images: ['الواح فيبر سالوميل.jpg'],
    },
    'p6': {
        title: 'الواح فيبر اشكال طبيعية',
        description: 'ألواح فيبر بأشكال و صور مثالية لتزيين الجدران وإضفاء لمسة فنية على الديكور الداخلي. توفر مزيجًا من الجمال الطبيعي والمتانة، مما يجعلها الخيار الأمثل للبيوت والمكاتب العصرية.',
        images: ['الواح فيبر اشكال طبيعية.jpg', 'image1.jpg', 'image2.jpg', 'image3.jpg'],
    },
    'p7': {
        title: 'قطاعات ps',
        description: 'قطاعات PS متينة ومتعددة الاستخدامات، تتميز بالتصميم الفريد والقدرة على التحمل، مما يجعلها مثالية لمختلف التطبيقات المنزلية والتجارية.',
        images: ['قطاعاتps.jpg'],
    },
};

// Initialize Cart from Local Storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to Render Products (on index.html)
function renderProducts(productKeys) {
    const productContainer = document.getElementById('productList');
    if (!productContainer) return; // Exit if not on index.html

    productContainer.innerHTML = ''; // Clear existing products

    productKeys.forEach(productKey => {
        const product = products[productKey];
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        // Product Image
        const img = document.createElement('img');
        img.src = `images/${product.images[0]}`;
        img.alt = product.title;

        // Product Details
        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('product-details');

        const title = document.createElement('h3');
        title.textContent = product.title;

        const description = document.createElement('p');
        description.textContent = product.description;

        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons');

        const addToCartBtn = document.createElement('button');
        addToCartBtn.textContent = 'أضف إلى العربة';
        addToCartBtn.classList.add('add-to-cart');
        addToCartBtn.dataset.productKey = productKey;

        // Append Buttons
        buttonsDiv.appendChild(addToCartBtn);

        // Append Elements
        detailsDiv.appendChild(title);
        detailsDiv.appendChild(description);
        detailsDiv.appendChild(buttonsDiv);

        productDiv.appendChild(img);
        productDiv.appendChild(detailsDiv);

        productContainer.appendChild(productDiv);
    });

    // Attach Event Listeners to Add to Cart Buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productKey = button.dataset.productKey;
            addToCart(productKey);
        });
    });
}

// Function to Update Cart Count
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = isNaN(totalQuantity) ? 0 : totalQuantity;
    }
}

// Function to Add Product to Cart
function addToCart(productKey) {
    const existingProduct = cart.find(item => item.key === productKey);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ key: productKey, quantity: 1, comment: '' });
    }
    saveCart();
    updateCartCount();
    showToast('تمت إضافة المنتج إلى العربة!');
}

// Function to Save Cart to Local Storage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to Render Cart Items (on cart.html)
function renderCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    if (!cartItemsDiv) return; // Exit if not on cart.html

    cartItemsDiv.innerHTML = ''; // Clear existing items

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>عربة التسوق فارغة.</p>';
        return;
    }

    cart.forEach(item => {
        const product = products[item.key];
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');

        const img = document.createElement('img');
        img.src = `images/${product.images[0]}`;
        img.alt = product.title;

        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('cart-item-details');

        const title = document.createElement('h4');
        title.textContent = product.title;

        const description = document.createElement('p');
        description.textContent = product.description;

        detailsDiv.appendChild(title);
        detailsDiv.appendChild(description);

        const quantityDiv = document.createElement('div');
        quantityDiv.classList.add('quantity-selector');

        const quantityLabel = document.createElement('label');
        quantityLabel.textContent = 'الكمية: ';

        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.min = '1';
        quantityInput.value = item.quantity;
        quantityInput.dataset.productKey = item.key;

        quantityInput.addEventListener('change', (e) => {
            const newQuantity = parseInt(e.target.value);
            if (newQuantity < 1 || isNaN(newQuantity)) {
                e.target.value = 1;
                return;
            }
            const cartItem = cart.find(ci => ci.key === e.target.dataset.productKey);
            if (cartItem) {
                cartItem.quantity = newQuantity;
                saveCart();
                updateCartCount();
                renderCart(); // Re-render cart to reflect changes
            }
        });

        quantityDiv.appendChild(quantityLabel);
        quantityDiv.appendChild(quantityInput);

        // Comment Section
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment-section');

        const commentLabel = document.createElement('label');
        commentLabel.textContent = 'تعليق: ';

        const commentInput = document.createElement('textarea');
        commentInput.rows = '3';
        commentInput.placeholder = 'أضف تعليقًا هنا...';
        commentInput.value = item.comment || '';
        commentInput.dataset.productKey = item.key;

        commentInput.addEventListener('input', (e) => {
            const productKey = e.target.dataset.productKey;
            const cartItem = cart.find(ci => ci.key === productKey);
            if (cartItem) {
                cartItem.comment = e.target.value;
                saveCart();
            }
        });

        commentDiv.appendChild(commentLabel);
        commentDiv.appendChild(commentInput);

        cartItemDiv.appendChild(img);
        cartItemDiv.appendChild(detailsDiv);
        cartItemDiv.appendChild(quantityDiv);
        cartItemDiv.appendChild(commentDiv);

        cartItemsDiv.appendChild(cartItemDiv);
    });
}

// Function to Handle Search
function handleSearch(event) {
    const query = event.target.value.toLowerCase();
    const filteredProducts = Object.keys(products).filter(key => 
        products[key].title.toLowerCase().includes(query) ||
        products[key].description.toLowerCase().includes(query)
    );
    renderProducts(filteredProducts);
}

// Function to Copy Cart Details
function copyCartDetails() {
    if (cart.length === 0) {
        showToast('عربة التسوق فارغة.');
        return;
    }

    let details = 'تفاصيل الطلب:\n\n';
    cart.forEach(item => {
        const product = products[item.key];
        details += `المنتج: ${product.title}\n`;
        details += `الكمية: ${item.quantity}\n`;
        if (item.comment.trim() !== '') {
            details += `التعليق: ${item.comment}\n`;
        }
        details += `\n`;
    });

    // Copy to Clipboard
    navigator.clipboard.writeText(details).then(() => {
        showToast('تم نسخ تفاصيل الطلب. الرجاء لصقها في النموذج.');
    }).catch(err => {
        console.error('خطأ في النسخ: ', err);
        showToast('حدث خطأ أثناء النسخ.');
    });
}

// Toast Notification
function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.className = 'show';
    setTimeout(() => {
        toast.className = toast.className.replace('show', '');
    }, 3000);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Render products on index.html
    if (document.getElementById('productList')) {
        renderProducts(Object.keys(products));
    }

    // Render cart on cart.html
    if (document.getElementById('cartItems')) {
        renderCart();
    }

    // Update cart count on all pages
    updateCartCount();

    // Search Bar Event
    const searchBar = document.getElementById('searchBar');
    if (searchBar) {
        searchBar.addEventListener('input', handleSearch);

        // Handle pressing Enter key
        searchBar.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault(); // Prevent form submission if any
                handleSearch(e);
            }
        });
    }

    // Cart Button Event (Redirect to cart.html)
    const cartButton = document.getElementById('cartButton');
    if (cartButton) {
        cartButton.addEventListener('click', () => {
            window.location.href = 'cart.html';
        });
    }

    // Copy Button Event (on cart.html)
    const copyButton = document.getElementById('copyButton');
    if (copyButton) {
        copyButton.addEventListener('click', copyCartDetails);
    }
});
