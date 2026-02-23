import Link from 'next/link';
import { ShoppingBag, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t bg-gray-50">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <ShoppingBag className="h-6 w-6" />
                            <span className="text-xl font-bold">JuniorStore</span>
                        </Link>
                        <p className="text-sm text-gray-600">
                            Tu tienda de confianza para vestimenta de calidad. Los mejores productos al mejor precio.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="font-semibold mb-4">Categorías</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/categorias/zapatos" className="text-gray-600 hover:text-primary transition-colors">
                                    Zapatos
                                </Link>
                            </li>
                            <li>
                                <Link href="/categorias/camisas" className="text-gray-600 hover:text-primary transition-colors">
                                    Camisas
                                </Link>
                            </li>
                            <li>
                                <Link href="/categorias/jeans" className="text-gray-600 hover:text-primary transition-colors">
                                    Jeans
                                </Link>
                            </li>
                            <li>
                                <Link href="/categorias/pantalones" className="text-gray-600 hover:text-primary transition-colors">
                                    Pantalones
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href="/productos" className="text-gray-600 hover:text-primary transition-colors">
                                    Todos los Productos
                                </Link>
                            </li>
                            <li>
                                <Link href="/destacados" className="text-gray-600 hover:text-primary transition-colors">
                                    Destacados
                                </Link>
                            </li>
                            <li>
                                <Link href="/categorias" className="text-gray-600 hover:text-primary transition-colors">
                                    Categorías
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold mb-4">Contacto</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Email: info@juniorstore.com</li>
                            <li>Teléfono: +57 301 4162947</li>
                            <li>WhatsApp: +57 301 4162947</li>
                            <li>Horario: Lun - Sáb, 9:00 - 18:00</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
                    <p>&copy; {new Date().getFullYear()} JuniorStore. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
