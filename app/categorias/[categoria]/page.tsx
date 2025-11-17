import { notFound } from 'next/navigation';
import { ProductCard } from '@/components/product-card';
import { getProductsByCategory, getCategoryInfo } from '@/lib/data';
import { ProductCategory } from '@/lib/types';

interface CategoryPageProps {
    params: Promise<{
        categoria: string;
    }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { categoria } = await params;
    const categoryInfo = getCategoryInfo(categoria as ProductCategory);

    if (!categoryInfo) {
        notFound();
    }

    const products = getProductsByCategory(categoria as ProductCategory);

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <div className="text-6xl mb-4">{categoryInfo.icon}</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {categoryInfo.name}
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    {categoryInfo.description}
                </p>
            </div>

            {products.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">
                        No hay productos disponibles en esta categoría en este momento.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}

export async function generateStaticParams() {
    return [
        { categoria: 'zapatos' },
        { categoria: 'camisas' },
        { categoria: 'jeans' },
        { categoria: 'pantalones' },
        { categoria: 'camisas-basicas' },
        { categoria: 'camisas-estampadas' },
        { categoria: 'gorras' },
        { categoria: 'relojes' },
    ];
}
