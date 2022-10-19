import {
    CalendarIcon,
    InformationCircleIcon,
    GlobeAltIcon,
    BuildingStorefrontIcon,
    PencilIcon,
    CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

export const navData = [
    {
        name: 'Organization',
        navType: 'dropdown-link',
        navItems: [
            {
                name: 'About',
                description: 'Learn about our mission.',
                linkType: 'internal',
                href: '/about',
                icon: InformationCircleIcon,
            },
            // {
            //     name: 'Blog',
            //     description:
            //         'Speak directly to your customers in a more meaningful way.',
            //     href: '/blog',
            //     icon: BookOpenIcon,
            // },
            {
                name: 'Events',
                description: 'Check out upcoming events.',
                linkType: 'internal',
                href: '/fastercon',
                icon: CalendarIcon,
            },
            {
                name: 'Store',
                description: 'Buy.',
                linkType: 'external',
                href: 'https://filipinx-americans-in-steam-faster.myshopify.com/collections/all',
                icon: BuildingStorefrontIcon,
            },
            {
                name: 'Donate',
                description: 'Give to FASTER.',
                linkType: 'internal',
                href: '/donate',
                icon: CurrencyDollarIcon,
            },
        ],
    },
    {
        name: 'Join',
        navType: 'link',
        href: '/join',
        icon: PencilIcon,
    },
];
