// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 100; // Offset for fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.top = '10px';
    } else {
        navbar.style.top = '20px';
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all gallery items and video items
const animateElements = document.querySelectorAll('.gallery-item, .video-item, .about-content, .contact-content');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Form Submission (prevent default and show alert)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        
        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        
        // Create a custom alert with glass styling
        const alertDiv = document.createElement('div');
        alertDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 25px;
            padding: 40px 60px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            text-align: center;
            color: white;
            font-size: 1.2rem;
            animation: fadeIn 0.3s ease-out;
        `;
        alertDiv.innerHTML = `
            <h3 style="margin-bottom: 15px; font-size: 1.8rem;">¡Gracias!</h3>
            <p style="margin-bottom: 20px; opacity: 0.9;">Tu mensaje ha sido enviado exitosamente. ¡Nos pondremos en contacto pronto!</p>
            <button onclick="this.parentElement.remove()" style="
                background: rgba(255, 255, 255, 0.25);
                border: 2px solid rgba(255, 255, 255, 0.3);
                color: white;
                padding: 12px 30px;
                border-radius: 50px;
                cursor: pointer;
                font-weight: 600;
                font-size: 1rem;
                transition: all 0.3s ease;
            " onmouseover="this.style.background='rgba(255, 255, 255, 0.35)'" onmouseout="this.style.background='rgba(255, 255, 255, 0.25)'">Cerrar</button>
        `;
        
        document.body.appendChild(alertDiv);
        
        // Reset form
        contactForm.reset();
        
        // Auto close after 5 seconds
        setTimeout(() => {
            if (alertDiv.parentElement) {
                alertDiv.style.opacity = '0';
                setTimeout(() => alertDiv.remove(), 300);
            }
        }, 5000);
    });
}

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 700);
    }
});

// Gallery data - all photos organized by client/event
const galleryData = {
    'buena-vida': {
        title: 'Buena Vida - Restaurante',
        photos: [
            { src: 'footage/NEGOCIOS/Restaurante/Buena%20Vida/DSC05827.webp', caption: 'Ambiente del restaurante' },
            { src: 'footage/NEGOCIOS/Restaurante/Buena%20Vida/DSC05832.webp', caption: 'Interior y decoración' },
            { src: 'footage/NEGOCIOS/Restaurante/Buena%20Vida/DSC05844.webp', caption: 'Espacios gastronómicos' },
            { src: 'footage/NEGOCIOS/Restaurante/Buena%20Vida/DSC05859.webp', caption: 'Detalles culinarios' },
            { src: 'footage/NEGOCIOS/Restaurante/Buena%20Vida/DSC05860.webp', caption: 'Presentación de platos' }
        ]
    },
    'bar-millennium': {
        title: 'Bar Millennium',
        photos: [
            { src: 'footage/NEGOCIOS/BARES/Bar%20Millennium/4.webp', caption: 'Ambiente nocturno' },
            { src: 'footage/NEGOCIOS/BARES/Bar%20Millennium/5.webp', caption: 'Barra principal' },
            { src: 'footage/NEGOCIOS/BARES/Bar%20Millennium/7.webp', caption: 'Espacios sociales' },
            { src: 'footage/NEGOCIOS/BARES/Bar%20Millennium/9.webp', caption: 'Iluminación y ambiente' }
        ]
    },
    'el-ingenio': {
        title: 'El Ingenio - Centro Cultural',
        photos: [
            { src: 'footage/NEGOCIOS/Centros%20Multiculturales/El%20Ingenio/DSC06595~1.jpg', caption: 'Espacios culturales' },
            { src: 'footage/NEGOCIOS/Centros%20Multiculturales/El%20Ingenio/DSC06597~1.jpg', caption: 'Arquitectura cultural' },
            { src: 'footage/NEGOCIOS/Centros%20Multiculturales/El%20Ingenio/DSC06603~1.jpg', caption: 'Ambiente artístico' },
            { src: 'footage/NEGOCIOS/Centros%20Multiculturales/El%20Ingenio/DSC06605~1.jpg', caption: 'Espacios de expresión' }
        ]
    },
    'vior-bar': {
        title: 'Vior Bar Club',
        photos: [
            { src: 'footage/NEGOCIOS/BARES/Vior%20Bar%20Club/33.webp', caption: 'Club nocturno' },
            { src: 'footage/NEGOCIOS/BARES/Vior%20Bar%20Club/36.webp', caption: 'Ambiente VIP' },
            { src: 'footage/NEGOCIOS/BARES/Vior%20Bar%20Club/4.webp', caption: 'Barra premium' },
            { src: 'footage/NEGOCIOS/BARES/Vior%20Bar%20Club/6.webp', caption: 'Espacios exclusivos' }
        ]
    },
    'of-us-coffee': {
        title: 'Of Us Coffee',
        photos: [
            { src: 'footage/NEGOCIOS/Restaurante/Of%20Us%20Coffe%20Game/_DSC4949.webp', caption: 'Café especializado' },
            { src: 'footage/NEGOCIOS/Restaurante/Of%20Us%20Coffe%20Game/_DSC4953.webp', caption: 'Ambiente acogedor' },
            { src: 'footage/NEGOCIOS/Restaurante/Of%20Us%20Coffe%20Game/_DSC4957.webp', caption: 'Espacios de trabajo' },
            { src: 'footage/NEGOCIOS/Restaurante/Of%20Us%20Coffe%20Game/_DSC4961.webp', caption: 'Gastronomía café' },
            { src: 'footage/NEGOCIOS/Restaurante/Of%20Us%20Coffe%20Game/DSC14562.webp', caption: 'Experiencia única' }
        ]
    },
    'piu-bella': {
        title: 'Piu Bella',
        photos: [
            { src: 'footage/NEGOCIOS/PIU%20BELLA/DSC04878~1.jpg', caption: 'Estética y belleza' },
            { src: 'footage/NEGOCIOS/PIU%20BELLA/DSC04892~1.jpg', caption: 'Espacios de bienestar' },
            { src: 'footage/NEGOCIOS/PIU%20BELLA/DSC04907~1.jpg', caption: 'Ambiente relajante' }
        ]
    },
    'contas-empanadas': {
        title: 'Contas Empanadas',
        photos: [
            { src: 'footage/NEGOCIOS/BARES/Contas%20Empanadas/3.webp', caption: 'Gastronomía tradicional' },
            { src: 'footage/NEGOCIOS/BARES/Contas%20Empanadas/5.webp', caption: 'Ambiente familiar' }
        ]
    },
    'charly-johayron': {
        title: 'Charly y Johayron',
        photos: [
            { src: 'footage/ARTISTAS/Charly%20y%20Johayron/39.webp', caption: 'Sesión artística' },
            { src: 'footage/ARTISTAS/Charly%20y%20Johayron/41.webp', caption: 'Expresión creativa' }
        ]
    },
    'el-dray': {
        title: 'El Dray',
        photos: [
            { src: 'footage/ARTISTAS/El%20Dray/_MG_3662.webp', caption: 'Retrato artístico' }
        ]
    },
    'yomil': {
        title: 'Yomil',
        photos: [
            { src: 'footage/ARTISTAS/Yomil/24.webp', caption: 'Sesión musical' },
            { src: 'footage/ARTISTAS/Yomil/34.webp', caption: 'Expresión artística' }
        ]
    }
};

// Open gallery modal with all photos from a client/event
function openGalleryModal(galleryId) {
    const gallery = galleryData[galleryId];
    if (!gallery) return;

    const modal = document.createElement('div');
    modal.id = 'gallery-modal';
    modal.className = 'gallery-modal';
    
    let photosHTML = '';
    gallery.photos.forEach((photo, index) => {
        photosHTML += `
            <div class="modal-photo" onclick="openLightbox('${photo.src}', '${gallery.title}', '${photo.caption}')">
                <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
                <div class="modal-photo-caption">${photo.caption}</div>
            </div>
        `;
    });
    
    modal.innerHTML = `
        <div class="gallery-modal-content">
            <div class="gallery-modal-header">
                <h2>${gallery.title}</h2>
                <button onclick="closeGalleryModal()" class="modal-close-btn">×</button>
            </div>
            <div class="gallery-modal-grid">
                ${photosHTML}
            </div>
        </div>
    `;
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeGalleryModal();
        }
    });
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeGalleryModal() {
    const modal = document.getElementById('gallery-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}

// Lightbox functionality
function openLightbox(imagePath, title, description) {
    const existingLightbox = document.getElementById('lightbox');
    if (existingLightbox) {
        existingLightbox.remove();
    }

    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox-overlay';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'lightbox-content';
    contentDiv.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
        animation: lightboxZoom 0.3s ease-out;
    `;
    
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = title;
    img.style.cssText = `
        max-width: 100%;
        max-height: 90vh;
        object-fit: contain;
        border-radius: 15px;
        box-shadow: 0 10px 50px rgba(0,0,0,0.5);
        display: block;
    `;
    
    const infoBox = document.createElement('div');
    infoBox.className = 'lightbox-info';
    infoBox.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox-close';
    closeBtn.innerHTML = '×';
    closeBtn.onclick = closeLightbox;
    
    contentDiv.appendChild(img);
    contentDiv.appendChild(infoBox);
    contentDiv.appendChild(closeBtn);
    lightbox.appendChild(contentDiv);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    document.addEventListener('keydown', handleEscapeKey);
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.opacity = '0';
        setTimeout(() => {
            lightbox.remove();
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleEscapeKey);
        }, 300);
    }
}

function handleEscapeKey(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
}


// Add cursor effect (glass circle following cursor)
const cursor = document.createElement('div');
cursor.style.cssText = `
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.2s ease, opacity 0.2s ease;
    opacity: 0;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.5);
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
    cursor.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
});

// Enlarge cursor on hover over interactive elements
const interactiveElements = document.querySelectorAll('a, button, .gallery-item, .video-item');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursor.style.background = 'rgba(255, 255, 255, 0.2)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = 'rgba(255, 255, 255, 0.3)';
    });
});

// Initialize animations on load
window.addEventListener('load', () => {
    highlightNavigation();
});

