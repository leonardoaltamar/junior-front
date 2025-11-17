# ⚡ Guía Rápida - JuniorStore

## 🚀 Inicio Rápido

### El proyecto ya está corriendo en:
```
http://localhost:3001
```

### Para reiniciar el servidor:
```bash
npm run dev
```

### Para compilar para producción:
```bash
npm run build
npm start
```

## 📍 Navegación Rápida

| Página | URL | Descripción |
|--------|-----|-------------|
| Inicio | `/` | Página principal |
| Categorías | `/categorias` | Todas las categorías |
| Zapatos | `/categorias/zapatos` | Productos de zapatos |
| Camisas | `/categorias/camisas` | Productos de camisas |
| Jeans | `/categorias/jeans` | Productos de jeans |
| Pantalones | `/categorias/pantalones` | Productos de pantalones |
| Camisas Básicas | `/categorias/camisas-basicas` | Camisas básicas |
| Camisas Estampadas | `/categorias/camisas-estampadas` | Camisas estampadas |
| Gorras | `/categorias/gorras` | Productos de gorras |
| Relojes | `/categorias/relojes` | Productos de relojes |
| Todos los Productos | `/productos` | Catálogo completo |
| Destacados | `/destacados` | Solo destacados |
| Detalle Producto | `/productos/1` | Detalles (1-18) |

## 📝 Archivos Clave

| Archivo | Propósito |
|---------|-----------|
| `lib/data.ts` | Productos y categorías |
| `lib/types.ts` | Tipos TypeScript |
| `components/product-card.tsx` | Tarjeta de producto |
| `components/category-card.tsx` | Tarjeta de categoría |
| `components/header.tsx` | Navegación principal |
| `components/footer.tsx` | Pie de página |
| `app/page.tsx` | Página de inicio |
| `app/globals.css` | Estilos globales |

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Producción
npm run build
npm start

# Linter
npm run lint

# Agregar componentes shadcn
npx shadcn@latest add [componente]
```

## 🎨 Personalización Rápida

### Cambiar nombre de la tienda
Buscar y reemplazar "JuniorStore" en:
- `components/header.tsx`
- `components/footer.tsx`
- `app/layout.tsx`
- `README.md`

### Agregar producto nuevo
En `lib/data.ts`:
```typescript
{
  id: '19',
  name: 'Nuevo Producto',
  description: 'Descripción del producto',
  price: 99.99,
  category: 'zapatos', // o la categoría que sea
  images: ['url-imagen'],
  sizes: ['S', 'M', 'L'],
  colors: ['Negro', 'Blanco'],
  inStock: true,
  featured: false // true para destacado
}
```

### Cambiar colores del tema
En `app/globals.css`, buscar `:root` y modificar:
```css
--primary: tu-color;
--secondary: tu-color;
```

## 📊 Datos Disponibles

- **18 productos** en 8 categorías
- **10 productos destacados**
- **Tallas**: Ropa (S-XXL), Zapatos (38-44), Pantalones (28-38)
- **Rango de precios**: $19.99 - $199.99

## 🔍 Funciones Útiles

```typescript
// En cualquier componente
import { 
  products,           // Todos los productos
  categories,         // Todas las categorías
  getProductsByCategory,  // Filtrar por categoría
  getFeaturedProducts,    // Solo destacados
  getProductById,         // Por ID
  getCategoryInfo         // Info de categoría
} from '@/lib/data';
```

## 📱 Breakpoints Responsive

```css
sm:  640px  /* Tablet pequeña */
md:  768px  /* Tablet */
lg:  1024px /* Desktop */
xl:  1280px /* Desktop grande */
```

## 🐛 Solución de Problemas

### El servidor no inicia
```bash
# Limpiar y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Puerto 3000 ocupado
El proyecto usa el puerto 3001 automáticamente si 3000 está ocupado.

### Imágenes no cargan
Verificar que `next.config.ts` tenga la configuración de Unsplash.

## 📖 Documentación Completa

- `README.md` - Documentación general
- `DATOS.md` - Estructura de datos
- `ROADMAP.md` - Mejoras futuras
- `RESUMEN.md` - Resumen completo

## ✅ Checklist de Deploy

- [ ] `npm run build` sin errores
- [ ] Todas las páginas cargan correctamente
- [ ] Imágenes se muestran bien
- [ ] Navegación funciona en móvil
- [ ] SEO metadata configurado
- [ ] Variables de entorno configuradas

## 🚀 Deploy Rápido en Vercel

```bash
# Opción 1: CLI
npm i -g vercel
vercel

# Opción 2: Web
# 1. Push a GitHub
# 2. Importar en vercel.com
# 3. Deploy automático
```

## 💬 Soporte

Para preguntas o issues:
1. Revisar documentación en README.md
2. Revisar ROADMAP.md para features planeadas
3. Crear issue en GitHub (si aplica)

---

**¡Disfruta desarrollando! 🎉**
