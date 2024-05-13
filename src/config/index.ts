import { constants } from "buffer"

export const config = {
    ...constants,
    NODE_ENV: process.env.NODE_ENV || process.env.NODE_ENV,
    WEB_URL: process.env.NEXT_PUBLIC_DOMAIN || 'http://localhost:3013',
    BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4013',
    BACKEND_WS_URL: process.env.NEXT_PUBLIC_BACKEND_WS_URL || 'ws://localhost:4013',
}

export const PRODUCT_CATEGORIES = [
    {
        label: "Popular choises",
        value: "ui_kits" as const,
        featured: [
            {
                name: "Editor picks",
                href: "#",
                imageSrc: '/nav/ui-kits/csharp.png'
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: '/nav/ui-kits/js.png'
            },
            {
                name: "Best Sellers",
                href: "#",
                imageSrc: '/nav/ui-kits/python.png'
            },
        ]
    },
    {
        label: "Category",
        value: "category" as const,
        featured: [
            {
                name: "Favorite",
                href: "#",
                imageSrc: ''
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: ''
            },
            {
                name: "BestSelling Icons",
                href: "#",
                imageSrc: ''
            },
        ]
    }
]