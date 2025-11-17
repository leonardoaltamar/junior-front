import { Product, CategoryInfo, ProductCategory } from './types';

export const categories: CategoryInfo[] = [
  {
    id: 'zapatos',
    name: 'Zapatos',
    description: 'Calzado para toda ocasión',
    icon: '👟',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80'
  },
  {
    id: 'camisas',
    name: 'Camisas',
    description: 'Camisas formales y casuales',
    icon: '👔',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80'
  },
  {
    id: 'jeans',
    name: 'Jeans',
    description: 'Jeans de mezclilla de calidad',
    icon: '👖',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80'
  },
  {
    id: 'pantalones',
    name: 'Pantalones',
    description: 'Pantalones formales y casuales',
    icon: '👔',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80'
  },
  {
    id: 'camisas-basicas',
    name: 'Camisas Básicas',
    description: 'Camisas básicas de algodón',
    icon: '👕',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80'
  },
  {
    id: 'camisas-estampadas',
    name: 'Camisas Estampadas',
    description: 'Camisas con diseños únicos',
    icon: '👕',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80'
  },
  {
    id: 'gorras',
    name: 'Gorras',
    description: 'Gorras y sombreros modernos',
    icon: '🧢',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80'
  },
  {
    id: 'relojes',
    name: 'Relojes',
    description: 'Relojes elegantes y deportivos',
    icon: '⌚',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80'
  }
];

export const products: Product[] = [
  // Zapatos
  {
    id: '1',
    name: 'Zapatillas Deportivas Premium',
    description: 'Zapatillas deportivas de alta calidad con tecnología de amortiguación avanzada. Perfectas para running y uso casual.',
    price: 89.99,
    category: 'zapatos',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80'
    ],
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: ['Negro', 'Blanco', 'Azul'],
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Zapatos Formales de Cuero',
    description: 'Elegantes zapatos de cuero genuino para ocasiones formales. Diseño clásico y atemporal.',
    price: 129.99,
    category: 'zapatos',
    images: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&q=80'
    ],
    sizes: ['39', '40', '41', '42', '43'],
    colors: ['Negro', 'Marrón'],
    inStock: true
  },
  {
    id: '3',
    name: 'Zapatillas Urbanas',
    description: 'Zapatillas casuales perfectas para el día a día. Comodidad y estilo en cada paso.',
    price: 69.99,
    category: 'zapatos',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80'
    ],
    sizes: ['38', '39', '40', '41', '42', '43'],
    colors: ['Blanco', 'Gris', 'Negro'],
    inStock: true,
    featured: true
  },

  // Camisas
  {
    id: '4',
    name: 'Camisa Formal Blanca',
    description: 'Camisa de vestir blanca en algodón premium. Esencial en todo guardarropa profesional.',
    price: 49.99,
    category: 'camisas',
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Blanco'],
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'Camisa a Rayas',
    description: 'Camisa casual con rayas verticales. Perfecta para el trabajo o eventos casuales.',
    price: 44.99,
    category: 'camisas',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Azul/Blanco', 'Negro/Blanco'],
    inStock: true
  },

  // Jeans
  {
    id: '6',
    name: 'Jeans Slim Fit',
    description: 'Jeans de corte slim fit en mezclilla premium. Comodidad y estilo garantizados.',
    price: 59.99,
    category: 'jeans',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80'
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Azul Oscuro', 'Negro', 'Azul Claro'],
    inStock: true,
    featured: true
  },
  {
    id: '7',
    name: 'Jeans Regular Fit',
    description: 'Jeans de corte regular clásico. Ideal para uso diario con máxima comodidad.',
    price: 54.99,
    category: 'jeans',
    images: [
      'https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&q=80'
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Azul Medio', 'Negro'],
    inStock: true
  },

  // Pantalones
  {
    id: '8',
    name: 'Pantalón de Vestir',
    description: 'Pantalón formal de corte recto. Perfecto para el ambiente de oficina.',
    price: 64.99,
    category: 'pantalones',
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80'
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Negro', 'Gris', 'Azul Marino'],
    inStock: true
  },
  {
    id: '9',
    name: 'Pantalón Chino',
    description: 'Pantalón chino casual-formal. Versátil para múltiples ocasiones.',
    price: 54.99,
    category: 'pantalones',
    images: [
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80'
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Beige', 'Verde Oliva', 'Gris'],
    inStock: true,
    featured: true
  },

  // Camisas Básicas
  {
    id: '10',
    name: 'Camiseta Básica Negra',
    description: 'Camiseta de algodón 100% en color negro. Básico esencial del guardarropa.',
    price: 19.99,
    category: 'camisas-basicas',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Negro'],
    inStock: true
  },
  {
    id: '11',
    name: 'Pack 3 Camisetas Básicas',
    description: 'Pack de 3 camisetas en colores básicos: blanco, negro y gris.',
    price: 49.99,
    category: 'camisas-basicas',
    images: [
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blanco/Negro/Gris'],
    inStock: true,
    featured: true
  },

  // Camisas Estampadas
  {
    id: '12',
    name: 'Camiseta Estampada Tropical',
    description: 'Camiseta con estampado tropical moderno. Perfecta para el verano.',
    price: 34.99,
    category: 'camisas-estampadas',
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Multicolor'],
    inStock: true
  },
  {
    id: '13',
    name: 'Camiseta Gráfica Urban',
    description: 'Camiseta con diseño gráfico urbano exclusivo. Estilo streetwear.',
    price: 39.99,
    category: 'camisas-estampadas',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Blanco', 'Negro'],
    inStock: true,
    featured: true
  },

  // Gorras
  {
    id: '14',
    name: 'Gorra Snapback',
    description: 'Gorra snapback ajustable de alta calidad. Diseño clásico y duradero.',
    price: 24.99,
    category: 'gorras',
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80'
    ],
    sizes: ['Única'],
    colors: ['Negro', 'Azul Marino', 'Gris'],
    inStock: true
  },
  {
    id: '15',
    name: 'Gorra Trucker',
    description: 'Gorra trucker con malla transpirable. Ideal para días soleados.',
    price: 22.99,
    category: 'gorras',
    images: [
      'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=800&q=80'
    ],
    sizes: ['Única'],
    colors: ['Negro/Blanco', 'Rojo/Blanco'],
    inStock: true,
    featured: true
  },

  // Relojes
  {
    id: '16',
    name: 'Reloj Deportivo Digital',
    description: 'Reloj deportivo con múltiples funciones. Resistente al agua hasta 50m.',
    price: 79.99,
    category: 'relojes',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80'
    ],
    sizes: ['Única'],
    colors: ['Negro', 'Azul'],
    inStock: true
  },
  {
    id: '17',
    name: 'Reloj Clásico de Pulsera',
    description: 'Reloj elegante con correa de cuero. Perfecto para ocasiones formales.',
    price: 149.99,
    category: 'relojes',
    images: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80'
    ],
    sizes: ['Única'],
    colors: ['Plateado', 'Dorado'],
    inStock: true,
    featured: true
  },
  {
    id: '18',
    name: 'Smartwatch Moderno',
    description: 'Smartwatch con monitor de actividad y notificaciones. Tecnología de punta.',
    price: 199.99,
    category: 'relojes',
    images: [
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80'
    ],
    sizes: ['Única'],
    colors: ['Negro', 'Plateado'],
    inStock: true,
    featured: true
  }
];

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter(product => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getCategoryInfo(category: ProductCategory): CategoryInfo | undefined {
  return categories.find(cat => cat.id === category);
}
