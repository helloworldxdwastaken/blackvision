// Dynamic Gallery Generator for BlackVision Studios
// This script automatically populates galleries with images from the footage folder

document.addEventListener('DOMContentLoaded', function() {
    loadGalleries();
});

async function loadGalleries() {
    // Check if we're using simple or folder-based config
    if (typeof simpleImageConfig !== 'undefined') {
        loadSimpleGallery('fifteen', simpleImageConfig.fifteen);
        loadSimpleGallery('business', simpleImageConfig.business);
    } else {
        loadFolderBasedGallery('fifteen', imageConfig.fifteen);
        loadFolderBasedGallery('business', imageConfig.business);
    }
}

// Load gallery using simple image list
function loadSimpleGallery(sectionId, images) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const galleryGrid = section.querySelector('.gallery-grid');
    if (!galleryGrid) return;

    // Clear existing placeholder items
    galleryGrid.innerHTML = '';

    images.forEach(item => {
        const galleryItem = createGalleryItem(item.image, item.title, item.description);
        galleryGrid.appendChild(galleryItem);
    });
}

// Load gallery using folder structure
function loadFolderBasedGallery(sectionId, config) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const galleryGrid = section.querySelector('.gallery-grid');
    if (!galleryGrid) return;

    // Clear existing placeholder items
    galleryGrid.innerHTML = '';

    config.categories.forEach(category => {
        // Try to load the first image from each category folder
        const imagePath = config.folder + category.folder;
        
        // Try common image extensions
        tryLoadImage(imagePath, category, galleryGrid);
    });
}

// Try to load an image from a folder (tries multiple filenames and extensions)
async function tryLoadImage(basePath, category, container) {
    // Common filename patterns
    const commonFilenames = [
        'cover', 'thumbnail', 'main',
        '1', '2', '3', '01', '02', '03',
        'image1', 'image2', 'image',
        'photo1', 'photo2', 'photo',
        'img1', 'img2', 'img',
        'WhatsApp Image 2025-10-25 at 09.21.03',
        'WhatsApp Image 2025-10-25 at 09.21.04',
        'WhatsApp Image 2025-10-25 at 09.21.14',
        'WhatsApp Image 2025-10-25 at 09.21.15',
        'WhatsApp Image 2025-10-25 at 09.21.15 (1)',
        'WhatsApp Image 2025-10-25 at 09.21.15 (2)',
        'WhatsApp Image 2025-10-25 at 09.21.15 (3)',
        'WhatsApp Image 2025-10-25 at 09.21.16',
        'WhatsApp Image 2025-10-25 at 09.21.16 (1)',
        'WhatsApp Image 2025-10-25 at 09.21.16 (2)',
        'WhatsApp Image 2025-10-25 at 09.21.16 (3)',
        'WhatsApp Image 2025-10-25 at 09.21.16 (4)',
        'WhatsApp Image 2025-10-25 at 09.21.17',
        'WhatsApp Image 2025-10-25 at 09.21.17 (1)',
        'WhatsApp Image 2025-10-25 at 09.21.17 (2)'
    ];
    
    const extensions = ['jpg', 'jpeg', 'JPG', 'JPEG', 'png', 'PNG', 'gif', 'GIF', 'webp', 'WEBP'];

    let imageFound = false;
    
    // Try all combinations of filenames and extensions
    for (let filename of commonFilenames) {
        for (let ext of extensions) {
            const fullPath = basePath + filename + '.' + ext;
            const exists = await checkImageExists(fullPath);
            
            if (exists) {
                const galleryItem = createGalleryItem(fullPath, category.name, category.description);
                container.appendChild(galleryItem);
                imageFound = true;
                break;
            }
        }
        if (imageFound) break;
    }

    // If no image found, create a placeholder with gradient
    if (!imageFound) {
        console.log('No image found in:', basePath);
        const galleryItem = createGalleryItem(null, category.name, category.description);
        container.appendChild(galleryItem);
    }
}

// Check if an image exists
function checkImageExists(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
    });
}

// Create a gallery item element
function createGalleryItem(imagePath, title, description) {
    const item = document.createElement('div');
    item.className = 'gallery-item glass-card';
    
    const imageDiv = document.createElement('div');
    imageDiv.className = 'gallery-image';
    
    if (imagePath) {
        // Use actual image
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = title;
        img.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';
        img.onerror = function() {
            // Fallback to gradient if image fails to load
            this.style.display = 'none';
            imageDiv.style.background = getRandomGradient();
        };
        imageDiv.appendChild(img);
    } else {
        // Use gradient placeholder
        imageDiv.style.background = getRandomGradient();
    }
    
    const overlay = document.createElement('div');
    overlay.className = 'gallery-overlay';
    overlay.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
    `;
    
    item.appendChild(imageDiv);
    item.appendChild(overlay);
    
    // Add click handler for potential lightbox
    item.addEventListener('click', () => {
        if (imagePath) {
            openLightbox(imagePath, title, description);
        }
    });
    
    // Set initial animation state
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.6s ease-out';
    
    // Trigger animation after a brief delay
    setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
    }, 100);
    
    return item;
}

// Get random gradient for placeholders
function getRandomGradient() {
    const gradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)'
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
}

// Simple lightbox for viewing images
function openLightbox(imagePath, title, description) {
    // Remove existing lightbox if any
    const existingLightbox = document.getElementById('lightbox');
    if (existingLightbox) {
        existingLightbox.remove();
    }

    // Create lightbox container
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox-overlay';
    
    // Create content container
    const contentDiv = document.createElement('div');
    contentDiv.className = 'lightbox-content';
    contentDiv.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
        animation: lightboxZoom 0.3s ease-out;
    `;
    
    // Create image
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
    
    // Create info box
    const infoBox = document.createElement('div');
    infoBox.className = 'lightbox-info';
    infoBox.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
    `;
    
    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox-close';
    closeBtn.innerHTML = '×';
    closeBtn.onclick = function() {
        closeLightbox();
    };
    
    // Assemble lightbox
    contentDiv.appendChild(img);
    contentDiv.appendChild(infoBox);
    contentDiv.appendChild(closeBtn);
    lightbox.appendChild(contentDiv);
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', handleEscapeKey);
    
    // Add to page
    document.body.appendChild(lightbox);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Close lightbox function
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

// Handle escape key
function handleEscapeKey(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
}

// Auto-scan folder function (requires running a local server)
// This function attempts to load multiple images from a folder
async function autoScanFolder(folderPath, maxImages = 50) {
    const images = [];
    const extensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    
    // Try numbered files (1.jpg, 2.jpg, etc.)
    for (let i = 1; i <= maxImages; i++) {
        for (let ext of extensions) {
            const path = `${folderPath}${i}.${ext}`;
            const exists = await checkImageExists(path);
            if (exists) {
                images.push(path);
                break;
            }
        }
    }
    
    return images;
}

