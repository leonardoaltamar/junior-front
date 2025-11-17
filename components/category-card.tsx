import Link from 'next/link';
import Image from 'next/image';
import { CategoryInfo } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';

interface CategoryCardProps {
    category: CategoryInfo;
}

export function CategoryCard({ category }: CategoryCardProps) {
    return (
        <Link href={`/categorias/${category.id}`}>
            <Card className="group overflow-hidden transition-all hover:shadow-xl cursor-pointer">
                <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                        <span className="text-5xl mb-3">{category.icon}</span>
                        <h3 className="text-2xl font-bold mb-2 text-center">
                            {category.name}
                        </h3>
                        <p className="text-sm text-gray-200 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {category.description}
                        </p>
                    </div>
                </div>
            </Card>
        </Link>
    );
}
