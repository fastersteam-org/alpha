import {
    ChartBarIcon,
    ShieldCheckIcon,
    CursorClickIcon,
} from '@heroicons/react/outline';

export const navData = [
    {
        name: 'Organization',
        navType: 'dropdown-link',
        navItems: [
            {
                name: 'About',
                description:
                    'Get a better understanding of where your traffic is coming from.',
                href: '#',
                icon: ChartBarIcon,
            },
            {
                name: 'Blog',
                description:
                    'Speak directly to your customers in a more meaningful way.',
                href: '#',
                icon: CursorClickIcon,
            },
            {
                name: 'Events',
                description: "Your customers' data will be safe and secure.",
                href: '#',
                icon: ShieldCheckIcon,
            },
        ],
    },
    {
        name: 'Membership',
        navType: 'link',
    },
];
