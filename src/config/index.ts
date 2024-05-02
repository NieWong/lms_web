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
        label: "UI kits",
        value: "ui_kits" as const,
        featured: [
            {
                name: "Editor picks",
                href: "#",
                imageSrc: '/nav/ui-kits/mixed.jpg'
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: '/nav/ui-kits/blue.jpg'
            },
            {
                name: "Best Sellers",
                href: "#",
                imageSrc: '/nav/ui-kits/purple.jpg'
            },
        ]
    },
    {
        label: "Icons",
        value: "icons" as const,
        featured: [
            {
                name: "Favorite",
                href: "#",
                imageSrc: '/nav/icons/picks.jpg'
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: '/nav/icons/new.jpg'
            },
            {
                name: "BestSelling Icons",
                href: "#",
                imageSrc: '/nav/icons/bestsellers.jpg'
            },
        ]
    }
]