# BlackVision Studios - Portfolio

Un portafolio moderno y profesional para BlackVision Studios, especializado en fotografía de XV años y negocios (bares, cafés, restaurantes).

🌐 **[Ver Sitio en Vivo](https://TU-USUARIO.github.io/blackvision-portfolio/)**

## ✨ Características

- 🎨 Diseño glassmorphism moderno
- 📱 100% responsive (móvil, tablet, desktop)
- 🇪🇸 Completamente en español
- ⚡ Optimizado para GitHub Pages
- 🖼️ Galerías dinámicas con lightbox
- 🎯 Navbar flotante estilo píldora
- 💫 Animaciones suaves y elegantes
- 📸 Dos secciones principales: XV Años y Negocios

## 🚀 Cómo Usar

### Ver Localmente

1. Abre `index.html` en tu navegador, o
2. Usa un servidor local:

```bash
python3 -m http.server 8000
# Abre: http://localhost:8000
```

### Subir a GitHub Pages

Lee la guía completa en: **[GITHUB-PAGES-SETUP.md](GITHUB-PAGES-SETUP.md)**

**Pasos rápidos:**
1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. Activa GitHub Pages en Settings → Pages
4. ¡Tu sitio estará en línea en minutos!

## 📸 Agregar Nuevas Fotos

1. Sube tus fotos a la carpeta `footage/15/` o `footage/business/`
2. Edita el archivo `images-list.js`
3. Agrega las nuevas fotos siguiendo el formato:

```javascript
{
    image: "footage/business/NombreNegocio/foto.jpg",
    title: "Título",
    description: "Descripción"
}
```

4. Sube los cambios a GitHub

## 📁 Estructura del Proyecto

```
blackvision-portfolio/
├── index.html           # Página principal
├── styles.css           # Estilos glassmorphism
├── script.js            # Funcionalidad JavaScript
├── images-list.js       # ⚠️ Edita aquí para agregar fotos
├── load-gallery.js      # Cargador de galería
├── .nojekyll           # Requerido para GitHub Pages
├── .gitignore          # Archivos a ignorar
└── footage/            # Tus fotografías
    ├── 15/             # Fotos de XV años
    │   └── Laura Sinapellido/
    └── business/       # Fotos de negocios
        ├── Buena Vida/
        └── Piu Bella/
```

## 🎨 Personalización

### Cambiar Información de Contacto

Edita `index.html` en la sección Footer:
- Email
- Teléfono
- Dirección
- Redes sociales

### Cambiar Colores

Edita `styles.css` en las variables CSS:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
}
```

## 🛠️ Tecnologías

- HTML5
- CSS3 (Glassmorphism, Grid, Flexbox)
- JavaScript Vanilla (ES6+)
- Google Fonts (Inter)

## 📱 Compatible con

- ✅ Chrome, Firefox, Safari, Edge (últimas versiones)
- ✅ iOS Safari
- ✅ Chrome Mobile
- ✅ Tablets y dispositivos móviles
- ✅ GitHub Pages
- ✅ Cualquier hosting estático

## ⚡ Rendimiento

- ⚡ Lazy loading de imágenes
- 🎯 Optimizado para web
- 📦 Sin dependencias externas
- 🚀 Carga rápida

## 📄 Licencia

© 2025 BlackVision Studios. Todos los derechos reservados.

## 🆘 Soporte

¿Problemas? Lee el archivo `GITHUB-PAGES-SETUP.md` para soluciones comunes.

---

Hecho con ❤️ para BlackVision Studios
