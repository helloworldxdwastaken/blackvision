# BlackVision Studios Portfolio Website

A modern, glassmorphism-styled portfolio website for BlackVision Studios specializing in Quinceañera photography and business photography for bars, cafes, and restaurants.

## 🌟 Dynamic Image Loading

This website automatically loads images from your `footage` folder! Just add your photos and they'll appear on the site.

## Features

- **Floating Pill-Style Navbar**: Glassmorphism navigation bar with shadow effects
- **Glassmorphism Design**: Entire website uses glass-style aesthetics throughout
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Scroll-based animations and transitions
- **15 Years Gallery**: Dedicated Quinceañera photography section with cultural sensitivity
- **Business Gallery**: Bar, cafe, drink, and restaurant photography showcase
- **Contact Form**: Functional contact form with custom glass-styled alerts
- **Modern UI/UX**: Beautiful gradient backgrounds and smooth interactions

## Design Elements

- Floating navbar with pill shape, shadow, and glass effect
- Backdrop blur effects for depth
- Gradient backgrounds
- Smooth transitions and hover effects
- Interactive cursor effect
- Mobile-responsive hamburger menu
- Beautiful footer with social links

## File Structure

```
/
├── index.html      # Main HTML structure
├── styles.css      # Glassmorphism styling and responsive design
├── script.js       # Interactive features and animations
└── README.md       # Project documentation
```

## 🚀 Quick Start

### 1. Add Your Images
Place your photos in the `footage` folder:
```
footage/
├── 15-years/     (Quinceañera photos)
│   ├── ceremonia/
│   ├── vestido/
│   └── ...
└── business/     (Business photos)
    ├── cocktails/
    ├── bars/
    └── ...
```

### 2. Run a Local Server
```bash
# Using Python 3
python3 -m http.server 8000

# Then open: http://localhost:8000
```

### 3. View Your Portfolio
Navigate through sections using the floating navbar - your images will load automatically!

📖 **See SETUP-INSTRUCTIONS.md for detailed setup guide in Spanish**

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
}
```

### Content
- Replace gradient placeholders with actual images
- Update contact information in the footer
- Modify service descriptions and portfolio items

### Integration
- Connect the contact form to your email service or backend API
- Replace video/image placeholders with actual media
- Add your social media links

## Browser Support

Works best on modern browsers that support:
- CSS Backdrop Filter
- CSS Grid
- Flexbox
- ES6 JavaScript

## Credits

Designed and developed for BlackVision Studios
© 2025 BlackVision Studios. All rights reserved.

