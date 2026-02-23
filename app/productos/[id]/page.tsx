'use client';

import Image from 'next/image';
import Link from 'next/link';
import { use, useState } from 'react';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ProductCard } from '@/components/product-card';
import { getProductById, getRelatedProducts } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import { ArrowLeft, MessageCircle, Heart } from 'lucide-react';

interface ProductPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default function ProductPage({ params }: ProductPageProps) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    // Unwrap params usando React.use()
    const resolvedParams = use(params);
    const product = getProductById(resolvedParams.id);

    if (!product) {
        notFound();
    }

    const relatedProducts = getRelatedProducts(product);

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <div className="mb-8">
                <Link href="/productos" className="inline-flex items-center text-gray-600 hover:text-primary">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver a productos
                </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
                {/* Product Images */}
                <div className="space-y-4">
                    <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                        <Image
                            src={product.images[selectedImage]}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {product.featured && (
                            <Badge className="absolute top-4 right-4 bg-yellow-500 text-white">
                                Destacado
                            </Badge>
                        )}
                    </div>
                    {product.images.length > 1 && (
                        <div className="grid grid-cols-4 gap-4">
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${selectedImage === index ? 'border-primary' : 'border-gray-200'
                                        }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`${product.name} - ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 25vw, 12vw"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">
                            {product.name}
                        </h1>
                        <p className="text-gray-600">{product.description}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Badge variant={product.inStock ? 'default' : 'destructive'}>
                            {product.inStock ? 'En Stock' : 'Agotado'}
                        </Badge>
                    </div>

                    <div className="text-4xl font-bold text-primary">
                        {formatPrice(product.price)}
                    </div>

                    {/* Size Selection */}
                    {product.sizes && product.sizes.length > 0 && (
                        <div>
                            <h3 className="font-semibold mb-3">Talla</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 border-2 rounded-md transition-all ${selectedSize === size
                                                ? 'border-primary bg-primary text-white'
                                                : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Color Selection */}
                    {product.colors && product.colors.length > 0 && (
                        <div>
                            <h3 className="font-semibold mb-3">Color</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => {
                                            setSelectedColor(color);
                                            // Si el color tiene una imagen asociada, la mostramos
                                            if (product.colorImages?.[color]) {
                                                const imageIndex = product.images.findIndex(
                                                    (img) => img === product.colorImages?.[color]
                                                );
                                                if (imageIndex !== -1) {
                                                    setSelectedImage(imageIndex);
                                                }
                                            }
                                        }}
                                        className={`px-4 py-2 border-2 rounded-md transition-all ${selectedColor === color
                                            ? 'border-primary bg-primary text-white'
                                            : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        {color}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                        <Button
                            size="lg"
                            className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white transition-colors"
                            disabled={!product.inStock}
                            onClick={() => {
                                const message = encodeURIComponent(`Hola, me interesa este producto: ${product.name}`);
                                window.open(`https://wa.me/573014162947?text=${message}`, '_blank');
                            }}
                        >
                            <MessageCircle className="mr-2 h-5 w-5" />
                            Solicitar este producto
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                        >
                            <Heart className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Product Details Card */}
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="font-semibold mb-4">Detalles del Producto</h3>
                            <dl className="space-y-2">
                                <div className="flex justify-between">
                                    <dt className="text-gray-600">Categoría:</dt>
                                    <dd className="font-medium capitalize">
                                        {product.category.replace('-', ' ')}
                                    </dd>
                                </div>
                                {product.sizes && (
                                    <div className="flex justify-between">
                                        <dt className="text-gray-600">Tallas disponibles:</dt>
                                        <dd className="font-medium">{product.sizes.length}</dd>
                                    </div>
                                )}
                                {product.colors && (
                                    <div className="flex justify-between">
                                        <dt className="text-gray-600">Colores disponibles:</dt>
                                        <dd className="font-medium">{product.colors.length}</dd>
                                    </div>
                                )}
                            </dl>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">
                        Productos Relacionados
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((relatedProduct) => (
                            <ProductCard key={relatedProduct.id} product={relatedProduct} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
