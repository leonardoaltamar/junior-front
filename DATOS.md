# 📊 Estructura de Datos - JuniorStore

Este documento describe la estructura de datos utilizada en la aplicación.

## Tipos de Datos

### ProductCategory
Enum que define las categorías disponibles:
- `zapatos`
- `camisas`
- `jeans`
- `pantalones`
- `camisas-basicas`
- `camisas-estampadas`
- `gorras`
- `relojes`

### Product Interface
```typescript
interface Product {
  id: string;                    // ID único del producto
  name: string;                  // Nombre del producto
  description: string;           // Descripción detallada
  price: number;                 // Precio en USD
  category: ProductCategory;     // Categoría del producto
  images: string[];             // Array de URLs de imágenes
  sizes?: string[];             // Tallas disponibles (opcional)
  colors?: string[];            // Colores disponibles (opcional)
  inStock: boolean;             // Disponibilidad
  featured?: boolean;           // Si es producto destacado (opcional)
}
```

### CategoryInfo Interface
```typescript
interface CategoryInfo {
  id: ProductCategory;          // ID de la categoría
  name: string;                 // Nombre display
  description: string;          // Descripción de la categoría
  icon: string;                 // Emoji/icono
  image: string;               // URL de imagen representativa
}
```

## Datos Mock Actuales

### Productos por Categoría

#### Zapatos (3 productos)
- Zapatillas Deportivas Premium - $89.99
- Zapatos Formales de Cuero - $129.99
- Zapatillas Urbanas - $69.99

#### Camisas (2 productos)
- Camisa Formal Blanca - $49.99
- Camisa a Rayas - $44.99

#### Jeans (2 productos)
- Jeans Slim Fit - $59.99
- Jeans Regular Fit - $54.99

#### Pantalones (2 productos)
- Pantalón de Vestir - $64.99
- Pantalón Chino - $54.99

#### Camisas Básicas (2 productos)
- Camiseta Básica Negra - $19.99
- Pack 3 Camisetas Básicas - $49.99

#### Camisas Estampadas (2 productos)
- Camiseta Estampada Tropical - $34.99
- Camiseta Gráfica Urban - $39.99

#### Gorras (2 productos)
- Gorra Snapback - $24.99
- Gorra Trucker - $22.99

#### Relojes (3 productos)
- Reloj Deportivo Digital - $79.99
- Reloj Clásico de Pulsera - $149.99
- Smartwatch Moderno - $199.99

**Total: 18 productos**

### Productos Destacados (10 productos)
Los productos marcados con `featured: true` aparecen en la sección de destacados y en la página principal.

## Funciones Auxiliares

### getProductsByCategory(category: ProductCategory): Product[]
Retorna todos los productos de una categoría específica.

### getFeaturedProducts(): Product[]
Retorna solo los productos marcados como destacados.

### getProductById(id: string): Product | undefined
Busca y retorna un producto específico por su ID.

### getCategoryInfo(category: ProductCategory): CategoryInfo | undefined
Retorna la información de una categoría específica.

## Imágenes

Actualmente se utilizan imágenes de Unsplash:
- Dominio: `images.unsplash.com`
- Configurado en `next.config.ts`
- Optimización automática con Next.js Image

## Migración Futura a Backend

Cuando se integre el backend, se deberá:

1. Crear endpoints REST:
   - `GET /api/products` - Todos los productos
   - `GET /api/products/:id` - Producto específico
   - `GET /api/products/category/:category` - Productos por categoría
   - `GET /api/products/featured` - Productos destacados
   - `GET /api/categories` - Todas las categorías

2. Implementar paginación:
   ```typescript
   {
     products: Product[],
     pagination: {
       page: number,
       limit: number,
       total: number,
       totalPages: number
     }
   }
   ```

3. Añadir filtros:
   - Por precio (min, max)
   - Por disponibilidad
   - Por tallas
   - Por colores
   - Búsqueda por texto

4. Campos adicionales recomendados:
   - `sku`: string
   - `stock`: number
   - `discount`: number
   - `rating`: number
   - `reviews`: Review[]
   - `brand`: string
   - `tags`: string[]
   - `createdAt`: Date
   - `updatedAt`: Date

## Ejemplos de Uso

```typescript
// Obtener todos los productos de zapatos
const zapatosProducts = getProductsByCategory('zapatos');

// Obtener productos destacados
const featured = getFeaturedProducts();

// Obtener un producto específico
const product = getProductById('1');

// Obtener info de categoría
const categoryInfo = getCategoryInfo('camisas');
```
