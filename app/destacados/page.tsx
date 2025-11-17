import { ProductCard } from '@/components/product-card';
import { getFeaturedProducts } from '@/lib/data';

export default function DestacadosPage() {
    const featuredProducts = getFeaturedProducts();

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Productos Destacados
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Los mejores productos seleccionados especialmente para ti
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
