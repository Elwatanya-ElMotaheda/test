// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (if used)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }

    // Toggle Side Navigation
    const toggleIcon = document.querySelector('.toggle-icon');
    const sidenav = document.getElementById('mySidenav');
    const closeBtn = document.querySelector('.sidenav .closebtn');

    if (toggleIcon) {
        toggleIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            openNav();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            closeNav();
        });
    }

    // Close sidenav when clicking outside
    document.addEventListener('click', (event) => {
        if (!sidenav.contains(event.target) && !toggleIcon.contains(event.target) && sidenav.style.width === "250px") {
            closeNav();
        }
    });

    function openNav() {
        sidenav.style.width = "250px";
    }

    function closeNav() {
        sidenav.style.width = "0";
    }

    // Smooth Scrolling for Scroll Down Arrow (if applicable)
    const scrollArrow = document.querySelector('.scroll-down-arrow');
    if (scrollArrow) {
        scrollArrow.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }

    // Product Detail Page Functionality
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');

const products = {
    'p1': {
        title: 'عجل سلك معدن',
        description: 'عجل سلك معدن عالي الجودة، مصمم لتحمل الأوزان الثقيلة وتسهيل الحركة بكل سلاسة في مختلف البيئات. يتميز بالمتانة وطول العمر الافتراضي، مما يجعله الاختيار الأمثل للاستخدامات المنزلية والتجارية.',
        images: ['عجل سلك معدن.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p2': {
        title: 'عجل زجاج',
        description: 'عجل زجاج قوي ومتين، مصمم خصيصًا لتحمل الأوزان الكبيرة والحفاظ على سلامة الأغراض المنقولة. يتميز بتصميمه الأنيق وقدرته على التحرك بسهولة ونعومة، مما يجعله مثاليًا للاستخدام في الأثاث الزجاجي والمعارض.',
        images: ['عجل زجاج.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p3': {
        title: 'عجل ps',
        description: 'عجل PS متعدد الاستخدامات، يتميز بالتصميم القوي والهيكل المتين الذي يضمن الأداء العالي في مختلف التطبيقات. يوفر سهولة الحركة والثبات، مما يجعله خيارًا رائعًا لمختلف المعدات والأثاث.',
        images: ['عجل ps.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p4': {
        title: 'عجل ثلاجة بفرامل و بدون',
        description: 'عجل ثلاجة بفرامل و بدون، مصمم لتسهيل الحركة مع توفير القدرة على الثبات عند الحاجة. هذا العجل يجمع بين الأداء العملي والمتانة، مما يجعله مثاليًا للكثير من الاغراض.',
        images: ['عجل ثلاجة بفرامل و بدون.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p5': {
        title: 'الواح فيبر سالوميل',
        description: 'ألواح فيبر سالوميل عالية المقاومة والجودة، مثالية للاستخدام في مختلف التطبيقات. كما أنها متوفرة بمجموعة واسعة من الألوان المتنوعة والأشكال المختلفة لتناسب كافة الأذواق والاحتياجات. سواء كنت تبحث عن ألوان زاهية وعصرية أو ألوان كلاسيكية وهادئة، ستجد العديد من الخيارات لتضف لمسة جمالية مميزة على المكان..',
        images: ['الواح فيبر سالوميل.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p6': {
        title: 'الواح فيبر اشكال طبيعية',
        description: 'ألواح فيبر بأشكال و صور مثالية لتزيين الجدران وإضفاء لمسة فنية على الديكور الداخلي. توفر مزيجًا من الجمال الطبيعي والمتانة، مما يجعلها الخيار الأمثل للبيوت والمكاتب العصرية.',
        images: ['الواح فيبر اشكال طبيعية.jpg', 'image1.jpg', 'image2.jpg', 'image3.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p7': {
        title: 'قطاعات ps',
        description: 'قطاعات PS متينة ومتعددة الاستخدامات، تتميز بالتصميم الفريد والقدرة على التحمل، مما يجعلها مثالية لمختلف التطبيقات المنزلية والتجارية.',
        images: ['قطاعاتps.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p8': {
        title: 'سابليونة 440',
        description: 'سابليونة 440 اسود و بيج.',
        images: ['سابليونة 440.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p9': {
        title: 'ps مفصلة',
        description: 'مفصلة PS اسود و بيج.',
        images: ['psمفصلة.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p10': {
        title: 'ترباس ps ',
        description: 'ترباس PS اسود و بيج.',
        images: ['ترباس ps بيج.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p11': {
        title: 'عصفورة ps اسود',
        description: 'عصفورة PS باللون الأسود للاستخدامات المتعددة، مثالية لتأمين الأبواب والنوافذ بتصميم أنيق وقوي.',
        images: ['عصفورة ps اسود.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p12': {
        title: 'مقبض فراشة 2 ضلفة',
        description: 'مقبض فراشة اسود و بيج، يتميز بالتصميم الأنيق والقدرة على تحمل الاستخدام المتكرر.',
        images: ['مقبض فراشة 2 ضلفة.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p13': {
        title: 'مقبض فراشة 4 ضلفة',
        description: 'مقبض فراشة مثالي للأبواب ذات الأربع ضلف، يتميز بالمتانة والتصميم الجذاب الذي يضيف لمسة أنيقة لأي مساحة.',
        images: ['مقبض فراشة 4 ضلفة.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p14': {
        title: 'مقبض فراشة ايجبتيل',
        description: 'مقبض فراشة ايجبتيل بتصميم عصري يجمع بين الأناقة والوظيفية، مثالي للأبواب الحديثة والمكاتب.',
        images: ['مقبض فراشة ايجبتيل.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p15': {
        title: 'مقبض دانا',
        description: 'مقبض دانا بتصميم أنيق ومتين، يوفر راحة في الاستخدام ومتانة تدوم طويلاً.',
        images: ['مقبض دانا.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p16': {
        title: 'سبت الوان',
        description: 'سبت الوان للاستخدامات المتعددة، مصمم بألوان جذابة وخامات عالية الجودة، مما يجعله مثاليًا للتنظيم والتخزين.',
        images: ['سبت الوان.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p17': {
        title: 'سيلكون',
        description: 'سيلكون عالي الجودة لمختلف الاستخدامات، متوفر انواع و الوان عديدة، مثالي للعزل والتركيب.',
        images: ['سيلكون.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p18': {
        title: 'صفاية',
        description: 'صفاية مثالية للمطابخ ، تتميز بالجودة العالية والخامات المتميزة.',
        images: ['صفاية.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p19': {
        title: 'فوم',
        description: 'فوم عالي الجودة.',
        images: ['فوم.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p20': {
        title: 'كورنر بلاستيك',
        description: 'كورنر بلاستيك .',
        images: ['كورنر بلاستيك.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p21': {
        title: 'كونكتور',
        description: 'كونكتور عالي الجودة, متوفر الوان مختلفة ثلاثي و ثنائي.',
        images: ['كونكتور.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p22': {
        title: 'مفصلة ايطالي',
        description: 'مفصلة ايطالي متينة وأنيقة، مصممة لتوفير حركة سلسة وثبات عالي للأبواب والخزائن، مع مقاومة ممتازة للتآكل.',
        images: ['مفصلة ايطالي.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p23': {
        title: 'مفصلة سوستة',
        description: 'مفصلة سوستة مناسبة للأبواب والخزائن، تتميز بتصميم مدمج يتيح التركيب السريع والاستخدام اليومي المريح.',
        images: ['مفصلة سوستة.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p24': {
        title: 'مفصلة 35',
        description: 'مفصلة 35، تضمن متانة عالية وسهولة في الحركة والتركيب، مما يجعلها خيارًا موثوقًا لمختلف الأثاث.',
        images: ['مفصلة 35.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p25': {
        title: 'كورنر ميني',
        description: 'كورنر ميني .',
        images: ['كورنر ميني.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p26': {
        title: 'كالون فندقي',
        description: 'كالون فندقي بتصميم متين وآمن، يوفر حماية مثالية للأبواب بفضل تقنيته المتطورة وسهولة استخدامه.',
        images: ['كالون فندقي.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p27': {
        title: 'كالون تركي',
        description: 'كالون تركي عالي الجودة للأبواب، يتميز بالمتانة والتصميم الأنيق، مما يضمن أمانًا موثوقًا وسهولة في الاستخدام.',
        images: ['كالون تركي.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p28': {
        title: 'كالون سؤاس',
        description: 'كالون سؤاس للأمان المتكامل، يوفر قفلًا محكمًا وسهولة في التشغيل، مما يجعله الخيار الأمثل للأبواب الداخلية والخارجية.',
        images: ['كالون سؤاس.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p29': {
        title: 'مسمار',
        description: 'يوجد تشكيلة مختلفة من المسامير بمقاسات مختلفة (1/2*6), (3/4*10), (1/2*8), (7سم), (سم5) و (4سم).',
        images: ['مسمار.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p30': {
        title: 'برشام',
        description: 'برشام قوي ودائم لجميع أنواع التثبيت، يوفر قوة تثبيت عالية وضمانًا للاستقرار والثبات في المشاريع المختلفة.',
        images: ['برشام.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p31': {
        title: 'ماكينة برشام',
        description: 'ماكينة برشام للتثبيت السريع والفعال، تتميز بالتصميم القوي والأداء الممتاز، مما يجعلها أداة أساسية في مشاغل التصنيع والصيانة.',
        images: ['ماكينة برشام.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p32': {
        title: 'فرش مقاسات و مسلح',
        description: 'فرش مقاسات ومسلح عالي الجودة.',
        images: ['فرش1.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p33': {
        title: 'كاوتش مقاسات',
        description: 'كاوتش بمقاسات مختلفة لعدة استخدامات، يتميز بالجودة العالية والمرونة الفائقة، مما يجعله مثاليًا لمختلف التطبيقات.',
        images: ['كاوتش مقاسات.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p34': {
        title: 'كاوتش تركي',
        description: 'كاوتش تركي عالي الجودة، مصمم لتحمل الاستخدام المتكرر مع الحفاظ على مرونته ومتانته، مثالي للأبواب والنوافذ.',
        images: ['كاوتش تركي.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p35': {
        title: 'سلك فيبر',
        description: 'سلك فيبر بمقاسات عرض 150 -120 - 100 سم، مثالي للحماية من الحشرات والغبار مع ضمان تهوية جيدة.',
        images: ['سلك فيبر مقاسات عرض 150 -120 - 100.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p36': {
        title: 'سلك الومنيوم ناشف',
        description: 'سلك الومنيوم ناشف بمقاسات عرض 150 -120 - 100 سم، يتميز بالقوة والمتانة، مثالي للاستخدام في البيئات المنزلية.',
        images: ['سلك الومنيوم ناشف مقاسات عرض 150 -120 - 100.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p37': {
        title: 'سلك الومنيوم بحريني',
        description: 'سلك الومنيوم بحريني بمقاسات عرض 150 -120 - 100 سم، يتميز بالجودة العالية والمقاومة للتآكل، مثالي للاستخدام في النوافذ والأبواب.',
        images: ['سلك الومنيوم بحريني مقاسات عرض 150 -120 - 100.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p38': {
        title: 'سابليونة DSL',
        description: 'سابليونة DSL ابيض و اسود.',
        images: ['سابليونة DSL.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p39': {
        title: 'مقبض ملسورة فضي',
        description: 'مقبض ملسورة فضي متين وأنيق، يوفر قبضة مريحة ومظهرًا عصريًا يتناسب مع مختلف أنواع الأبواب.',
        images: ['مقبض ملسورة فضي.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p40': {
        title: 'اكرة غراب بلية',
        description: 'اكرة غراب بلية بتصميم مريح وسلس، مثالية للأبواب الداخلية والخارجية، توفر حركة سهلة وثبات عالي.',
        images: ['اكرة غراب بلية.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p41': {
        title: 'فيشر',
        description: 'فيشر عالي الجودة لتثبيت الأغراض المختلفة، يتميز بالقوة وسهولة الاستخدام، مما يجعله مثاليًا لجميع أنواع التثبيت.',
        images: ['فيشر.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p42': {
        title: 'ميكانزم',
        description: 'ميكانزم متين للاستخدامات المنزلية، يتميز بالقوة والدقة في الأداء، مما يجعله جزءًا أساسيًا في مختلف التطبيقات المنزلية.',
        images: ['ميكانزم.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p43': {
        title: 'مسمار 1/2*6. تايواني. فضي',
        description: 'مسمار تايواني بحجم 1/2*6 فضي اللون، يتميز بالقوة والمتانة، مثالي لمختلف مشاريع التثبيت.',
        images: ['مسمار 126. تايواني. فضي.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p44': {
        title: 'مقبض لافانا',
        description: 'مقبض لافانا بتصميم أنيق ومريح، يوفر سهولة في الاستخدام ويضفي لمسة جمالية على الأبواب والأثاث.',
        images: ['مقبض لافانا.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p45': {
        title: 'مفصلة سعد',
        description: 'مفصلة سعد متينة وسهلة التركيب، توفر حركة سلسة وثبات عالي، مما يجعلها الخيار الأمثل للأبواب والخزائن. يوجد ابيض و بيج..',
        images: ['مفصلة سعد.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p46': {
        title: 'عصفورة سعد',
        description: 'عصفورة سعد للاستخدامات المتعددة، مصممة لتوفير حماية وأمان عالي للأبواب والنوافذ.',
        images: ['عصفورة سعد.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p47': {
        title: 'ترباس جيما',
        description: 'ترباس جيما للأمان العالي، يتميز بالتصميم القوي والمقاومة العالية للتآكل، مما يضمن أمانًا موثوقًا في جميع الظروف.',
        images: ['ترباس جيما.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p48': {
        title: 'استيكر ذهبي وفضي',
        description: 'استيكر ذهبي وفضي للتزيين والاستخدامات المختلفة، يوفر لمسة جمالية وأنيقة على الأثاث والجدران.',
        images: ['استيكر ذهبي وفضي.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p49': {
        title: 'ماكينة برشام',
        description: 'ماكينة برشام للتثبيت السريع والفعال، تتميز بالقوة والمتانة، مما يجعلها أداة أساسية في مشاغل التصنيع والصيانة.',
        images: ['5.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p50': {
        title: 'مقابض بأشكال وألوان مختلفة',
        description: 'مجموعة متنوعة من المقابض بأشكال وألوان مختلفة، مصممة لتناسب جميع أنواع الأثاث والأبواب بلمسة جمالية فريدة.',
        images: ['مقابض اشكال و الوان مختلفة.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p51': {
        title: 'مقابض بأشكال وألوان مختلفة',
        description: 'مجموعة متنوعة من المقابض بأشكال وألوان مختلفة، مصممة لتناسب جميع أنواع الأثاث والأبواب بلمسة جمالية فريدة.',
        images: ['مقابض اشكال و الوان مختلفة.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p52': {
        title: 'ذراع ساعة',
        description: 'ذراع ساعة.',
        images: ['ذراع ساعة.jpg', 'ذراع ساعة1.jpg', 'ذراع ساعة.jpg', 'ذراع ساعة1.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p53': {
        title: 'اكرة كالون',
        description: 'اكرة كالون بيج و اسود، مصممة لتناسب جميع أنواع الأثاث والأبواب بلمسة جمالية فريدة.',
        images: ['اكرة كالون.jpg', 'اكرة كالون اسود.jpg', 'اكرة كالون.jpg', 'اكرة كالون اسود.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p54': {
        title: 'زور كالون',
        description: 'زور كالون طويل و قصير.',
        images: ['زور كالون.jpg'],
        link: 'https://m.me/107394622435055'
    },
    'p55': {
        title: 'ترباس جيما',
        description: 'ترباس جيما.',
        images: ['ترباس جيما.jpg'],
        link: 'https://m.me/107394622435055'
    },

};

    const product = products[productId];

    if (product) {
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('page-title').textContent = `${product.title} - الوطنية المتحدة جروب`;
        document.getElementById('product-price').textContent = product.price || ''; // Ensure product.price exists
        document.getElementById('product-description').textContent = product.description;

        // Loop through images and set them in the gallery
        product.images.forEach((imgSrc, index) => {
            const imageElement = document.getElementById(`product-image-${index + 1}`);
            if (imageElement) {
                imageElement.src = imgSrc;
                imageElement.alt = `${product.title} - Image ${index + 1}`;
                imageElement.loading = 'lazy'; // Enable lazy loading
            }
        });

        // Hide arrows if only one image
        if (product.images.length <= 1) {
            document.querySelector('.nav-buttons').style.display = 'none';
        }

        // Hide unused image elements
        for (let i = product.images.length; i < 4; i++) { // Adjusted to 4 slides based on HTML
            const imageElement = document.getElementById(`product-image-${i + 1}`);
            if (imageElement) {
                imageElement.parentElement.style.display = 'none'; // Hide the entire slide
            }
        }

        document.getElementById('product-link').href = product.link;
    } else {
        document.getElementById('product-title').textContent = 'المنتج غير موجود';
        document.getElementById('product-price').textContent = '';
        document.getElementById('product-description').textContent = '';
        document.getElementById('product-image-1').src = '';
        document.getElementById('product-link').style.display = 'none';
    }

    // Image Gallery Navigation
    function nextSlide() {
        const slides = document.querySelectorAll('.slide');
        let activeSlide = document.querySelector('.slide.active');
        if (activeSlide) {
            activeSlide.classList.remove('active');
            let nextSlide = activeSlide.nextElementSibling || slides[0];
            nextSlide.classList.add('active');
        }
    }

    function prevSlide() {
        const slides = document.querySelectorAll('.slide');
        let activeSlide = document.querySelector('.slide.active');
        if (activeSlide) {
            activeSlide.classList.remove('active');
            let prevSlide = activeSlide.previousElementSibling || slides[slides.length - 1];
            prevSlide.classList.add('active');
        }
    }

    // Attach event listeners to navigation buttons
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    if (nextButton) {
        nextButton.addEventListener('click', (e) => {
            e.stopPropagation();
            nextSlide();
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', (e) => {
            e.stopPropagation();
            prevSlide();
        });
    }
});
