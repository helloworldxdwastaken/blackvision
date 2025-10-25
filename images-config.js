// Configuration file for dynamic image loading
// The system will automatically load images from these folders

const imageConfig = {
    fifteen: {
        title: "Fotografía de Quinceañera",
        subtitle: "Celebrando tus especiales 15 años",
        // Auto-detect mode: will scan footage/15/ for all subfolders
        folder: "footage/15/",
        autoDetect: true,
        // Or specify specific folders manually:
        categories: [
            {
                name: "Laura Sinapellido",
                description: "Celebración de 15 años",
                folder: "Laura Sinapellido/",
            }
            // Add more categories here as needed
        ]
    },
    business: {
        title: "Fotografía de Negocios",
        subtitle: "Elevando tu marca con visuales impresionantes",
        folder: "footage/business/",
        autoDetect: true,
        categories: [
            {
                name: "Piu Bella",
                description: "Fotografía profesional",
                folder: "Piu Bella/",
            },
            {
                name: "Buena Vida",
                description: "Fotografía de negocio",
                folder: "Buena Vida/",
            },
            {
                name: "Cócteles & Bebidas",
                description: "Fotografía premium de bebidas",
                folder: "cocktails/",
            },
            {
                name: "Ambiente de Bar",
                description: "Atmósfera nocturna",
                folder: "bars/",
            },
            {
                name: "Interiores de Café",
                description: "Espacios acogedores",
                folder: "cafes/",
            },
            {
                name: "Comida & Menú",
                description: "Platillos deliciosos capturados",
                folder: "food/",
            },
            {
                name: "Espacios de Restaurante",
                description: "Experiencias gastronómicas",
                folder: "restaurants/",
            },
            {
                name: "Fotografía de Marca",
                description: "Identidad empresarial",
                folder: "branding/",
            }
        ]
    }
};

// Alternative: Simple list mode - just list your images directly
// Uncomment and use this if you prefer to manually list images
/*
const simpleImageConfig = {
    fifteen: [
        { image: "footage/15-years/photo1.jpg", title: "La Ceremonia", description: "Momentos sagrados" },
        { image: "footage/15-years/photo2.jpg", title: "El Vestido", description: "Tu vestido perfecto" },
        { image: "footage/15-years/photo3.jpg", title: "El Vals", description: "Bailando con seres queridos" },
        { image: "footage/15-years/photo4.jpg", title: "Retratos Familiares", description: "Recuerdos con familia" },
        { image: "footage/15-years/photo5.jpg", title: "La Celebración", description: "Fiesta y recepción" },
        { image: "footage/15-years/photo6.jpg", title: "Amigas & Damas", description: "Tu corte de honor" }
    ],
    business: [
        { image: "footage/business/photo1.jpg", title: "Cócteles & Bebidas", description: "Fotografía premium" },
        { image: "footage/business/photo2.jpg", title: "Ambiente de Bar", description: "Atmósfera nocturna" },
        { image: "footage/business/photo3.jpg", title: "Interiores de Café", description: "Espacios acogedores" },
        { image: "footage/business/photo4.jpg", title: "Comida & Menú", description: "Platillos deliciosos" },
        { image: "footage/business/photo5.jpg", title: "Espacios de Restaurante", description: "Experiencias gastronómicas" },
        { image: "footage/business/photo6.jpg", title: "Fotografía de Marca", description: "Identidad empresarial" }
    ]
};
*/

