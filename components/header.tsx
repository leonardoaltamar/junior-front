'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search, Menu, X, ShoppingBag } from 'lucide-react';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <ShoppingBag className="h-6 w-6" />
                        <span className="text-xl font-bold">JuniorStore</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                            Inicio
                        </Link>
                        <Link href="/categorias" className="text-sm font-medium transition-colors hover:text-primary">
                            Categorías
                        </Link>
                        <Link href="/productos" className="text-sm font-medium transition-colors hover:text-primary">
                            Todos los Productos
                        </Link>
                        <Link href="/destacados" className="text-sm font-medium transition-colors hover:text-primary">
                            Destacados
                        </Link>
                    </nav>

                    {/* Search Bar */}
                    <div className="hidden lg:flex items-center space-x-2 flex-1 max-w-sm ml-8">
                        <div className="relative flex-1">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                            <Input
                                type="search"
                                placeholder="Buscar productos..."
                                className="pl-8"
                            />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 space-y-4">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                            <Input
                                type="search"
                                placeholder="Buscar productos..."
                                className="pl-8"
                            />
                        </div>
                        <nav className="flex flex-col space-y-3">
                            <Link
                                href="/"
                                className="text-sm font-medium transition-colors hover:text-primary"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Inicio
                            </Link>
                            <Link
                                href="/categorias"
                                className="text-sm font-medium transition-colors hover:text-primary"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Categorías
                            </Link>
                            <Link
                                href="/productos"
                                className="text-sm font-medium transition-colors hover:text-primary"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Todos los Productos
                            </Link>
                            <Link
                                href="/destacados"
                                className="text-sm font-medium transition-colors hover:text-primary"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Destacados
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
