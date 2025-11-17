import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Link href={`/productos/${product.id}`}>
            <Card className="group overflow-hidden transition-all hover:shadow-lg">
                <CardHeader className="p-0">
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {product.featured && (
                            <Badge className="absolute top-2 right-2 bg-yellow-500 text-white">
                                Destacado
                            </Badge>
                        )}
                        {!product.inStock && (
                            <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                                Agotado
                            </Badge>
                        )}
                    </div>
                </CardHeader>
                <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-1">
                        {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {product.description}
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                        {product.colors && product.colors.length > 0 && (
                            <span className="text-xs text-gray-500">
                                {product.colors.length} {product.colors.length === 1 ? 'color' : 'colores'}
                            </span>
                        )}
                        {product.sizes && product.sizes.length > 0 && (
                            <span className="text-xs text-gray-500">
                                • {product.sizes.length} {product.sizes.length === 1 ? 'talla' : 'tallas'}
                            </span>
                        )}
                    </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex items-center justify-between">
                    <div>
                        <p className="text-2xl font-bold text-primary">
                            ${product.price.toFixed(2)}
                        </p>
                    </div>
                    <Button size="sm" className="group-hover:bg-primary/90">
                        Ver Detalles
                    </Button>
                </CardFooter>
            </Card>
        </Link>
    );
}
