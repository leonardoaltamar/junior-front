import { CategoryCard } from '@/components/category-card';
import { categories } from '@/lib/data';

export default function CategoriasPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Todas las Categorías
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Explora nuestra amplia selección de productos organizados por categorías
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                    <CategoryCard key={category.id} category={category} />
                ))}
            </div>
        </div>
    );
}
