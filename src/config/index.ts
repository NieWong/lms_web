export const PRODUCT_CATEGORIES = [
  {
    label: 'Explore',
    value: 'categories' as const,
    featured: [
      {
        name: 'Editor picks',
        href: `/products?category=editors_picks`,
     },
      {
        name: 'New Arrivals',
        href: '/products?category=new_arrivals&sort=desc',
      },
      {
        name: 'Bestsellers',
        href: '/products?category=best_sellers',
      },
    ],
  },
]
