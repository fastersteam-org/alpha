import {
    CalendarIcon,
    InformationCircleIcon,
    // BookOpenIcon,
} from '@heroicons/react/outline';

export const navData = [
    {
        name: 'Organization',
        navType: 'dropdown-link',
        navItems: [
            {
                name: 'About',
                description: 'Learn about our mission.',
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
                href: '/fastercon',
                icon: CalendarIcon,
            },
        ],
    },
    {
        name: 'Join',
        navType: 'link',
        href: '/join',
    },
];
