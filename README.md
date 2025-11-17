# 🛍️ JuniorStore - Catálogo de Productos

Aplicación web moderna de catálogo de productos de vestimenta desarrollada con Next.js 15, React 19, TypeScript y Tailwind CSS.

## 📋 Descripción

JuniorStore es una plataforma de e-commerce frontend que muestra un catálogo completo de productos de vestimenta incluyendo:

- 👟 Zapatos
- 👔 Camisas formales
- 👖 Jeans
- 👔 Pantalones
- 👕 Camisas básicas
- 👕 Camisas estampadas
- 🧢 Gorras
- ⌚ Relojes

## 🚀 Características

- ✅ Catálogo completo de productos con imágenes de alta calidad
- ✅ Navegación por categorías
- ✅ Página de detalles de producto con galería de imágenes
- ✅ Productos destacados
- ✅ Diseño responsive (mobile, tablet, desktop)
- ✅ Interfaz moderna con shadcn/ui
- ✅ Animaciones y transiciones suaves
- ✅ Búsqueda de productos (UI preparada para futura integración)
- ✅ Filtros por talla y color
- ✅ Sistema de tipos con TypeScript

## 🛠️ Tecnologías

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS 4
- **UI Components:** shadcn/ui
- **Iconos:** Lucide React
- **Fuente:** Inter (Google Fonts)

## 📁 Estructura del Proyecto

```
junior-front/
├── app/
│   ├── categorias/
│   │   ├── [categoria]/
│   │   │   └── page.tsx          # Página de categoría específica
│   │   └── page.tsx               # Página de todas las categorías
│   ├── destacados/
│   │   └── page.tsx               # Productos destacados
│   ├── productos/
│   │   ├── [id]/
│   │   │   └── page.tsx          # Detalles del producto
│   │   └── page.tsx               # Todos los productos
│   ├── globals.css                # Estilos globales
│   ├── layout.tsx                 # Layout principal
│   └── page.tsx                   # Página de inicio
├── components/
│   ├── ui/                        # Componentes de shadcn/ui
│   ├── category-card.tsx          # Tarjeta de categoría
│   ├── footer.tsx                 # Footer del sitio
│   ├── header.tsx                 # Header y navegación
│   └── product-card.tsx           # Tarjeta de producto
├── lib/
│   ├── data.ts                    # Datos mock de productos
│   ├── types.ts                   # Definiciones de tipos
│   └── utils.ts                   # Utilidades
└── public/                        # Archivos estáticos
```

## 🎨 Componentes Principales

### Header
- Logo y navegación principal
- Barra de búsqueda
- Menú responsive para móviles

### ProductCard
- Imagen del producto con efecto hover
- Nombre, descripción y precio
- Badge de destacado y stock
- Link a página de detalles

### CategoryCard
- Imagen de categoría con overlay
- Nombre e icono
- Efecto hover con descripción

### Footer
- Enlaces rápidos
- Categorías
- Información de contacto
- Redes sociales

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd junior-front
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🔧 Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm run start    # Inicia el servidor de producción
npm run lint     # Ejecuta el linter
```

## 📊 Datos

Actualmente, la aplicación usa datos mock almacenados en `lib/data.ts`. Incluye:
- 18 productos de ejemplo
- 8 categorías de productos
- Imágenes de alta calidad de Unsplash

## 🔮 Próximas Implementaciones

El proyecto está preparado para futuras integraciones con backend:

- [ ] Integración con API REST
- [ ] Sistema de carrito de compras
- [ ] Autenticación de usuarios
- [ ] Procesamiento de pagos
- [ ] Sistema de favoritos
- [ ] Búsqueda en tiempo real
- [ ] Filtros avanzados
- [ ] Reseñas y calificaciones
- [ ] Panel de administración

## 🎯 Rutas Disponibles

- `/` - Página de inicio
- `/categorias` - Todas las categorías
- `/categorias/[categoria]` - Productos por categoría
- `/productos` - Todos los productos
- `/productos/[id]` - Detalles del producto
- `/destacados` - Productos destacados

## 🎨 Personalización

### Colores
Los colores se pueden personalizar en `app/globals.css` modificando las variables CSS:
- `--primary` - Color principal
- `--secondary` - Color secundario
- `--accent` - Color de acento
- etc.

### Componentes UI
Los componentes de shadcn/ui están en `components/ui/` y pueden ser personalizados según necesidad.

## 📱 Responsive Design

La aplicación está optimizada para:
- 📱 Móviles (< 640px)
- 📱 Tablets (640px - 1024px)
- 💻 Desktop (> 1024px)

## 🤝 Contribución

Este es un proyecto de portafolio. Si encuentras algún bug o tienes sugerencias, no dudes en crear un issue.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**Desarrollado con ❤️ usando Next.js y TypeScript**

