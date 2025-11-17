import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CategoryCard } from '@/components/category-card';
import { ProductCard } from '@/components/product-card';
import { categories, getFeaturedProducts } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Descubre Tu Estilo con JuniorStore
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              La mejor selección de vestimenta y accesorios para lucir increíble en cualquier ocasión.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/productos">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  Ver Todos los Productos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/categorias">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Explorar Categorías
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explora Nuestras Categorías
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Encuentra exactamente lo que buscas navegando por nuestras categorías especializadas
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Productos Destacados
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Descubre nuestra selección especial de productos más populares
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/destacados">
              <Button size="lg" variant="outline">
                Ver Todos los Destacados
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para renovar tu guardarropa?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Explora nuestra colección completa y encuentra las mejores ofertas en productos de calidad
          </p>
          <Link href="/productos">
            <Button size="lg" variant="secondary">
              Comprar Ahora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

