import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'Menu',
        items: ['dashboard'],
    },
    /*{
        text: 'AIDE',
        items: ['layouts', 'pages'],
    },*/
    {
        text: 'Serveurs',
        items: ['serveurs_alco','serveurs_heberge','exclusions'],
    },
    {
        text: 'Historiques',
        items: ['historique_alco','historique_heberge'],
    },
    {
        text: 'Planification',
        items: ['calendrier','plannificationExceptionnel','WAAF','apropos'],
    },
];

export const sideNavSectionsCollege: SideNavSection[] = [
    {
        text: 'Menu',
        items: ['dashboard_mic'],
    },
    /*{
        text: 'AIDE',
        items: ['layouts', 'pages'],
    },*/
    {
        text: 'Serveurs',
        items: ['serveurs_college'],
    },
    {
        text: 'Historiques',
        items: ['historique_college'],
    },
    {
        text: '',
        items: ['apropos'],
    },
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/patchManagement/dashboard/alco',
    },
    dashboard_mic: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/patchManagement/dashboard/mic',
    },
    layouts: {
        icon: 'columns',
        text: 'Layouts',
        submenu: [
            {
                text: 'Static Navigation',
                link: '/patchManagement/dashboard/static',
            },
            {
                text: 'Light Sidenav',
                link: '/patchManagement/dashboard/light',
            },
        ],
    },
    pages: {
        icon: 'book-open',
        text: 'Pages',
        submenu: [
            {
                text: 'Authentication',
                submenu: [
                    {
                        text: 'Login',
                        link: '/patchManagement/auth/login',
                    },
                    {
                        text: 'Register',
                        link: '/patchManagement/auth/register',
                    },
                    {
                        text: 'Forgot Password',
                        link: '/patchManagement/auth/forgot-password',
                    },
                ],
            },
            {
                text: 'Error',
                submenu: [
                    {
                        text: '401 Page',
                        link: '/patchManagement/error/401',
                    },
                    {
                        text: '404 Page',
                        link: '/patchManagement/error/404',
                    },
                    {
                        text: '500 Page',
                        link: '/patchManagement/error/500',
                    },
                ],
            },
        ],
    },
    serveurs_alco: {
        icon: 'server',
        text: 'Serveurs Alco',
        submenu: [
            {
                prefix: 'fab',
                icon:'windows',
                text: 'Windows',
                link: '/patchManagement/serveurs/Alco_Windows',
            },
            {
                prefix: 'fab',
                icon: 'linux',
                text: 'Linux',
                link: '/patchManagement/serveurs/Alco_Linux',
            },
        ],
    },
    serveurs_college: {
        icon: 'server',
        text: 'Serveurs Collège',
        submenu: [
            {
                prefix: 'fab',
                icon:'windows',
                text: 'Windows',
                link: '/patchManagement/serveurs/College_Windows',
            },
            {
                prefix: 'fab',
                icon: 'linux',
                text: 'Linux',
                link: '/patchManagement/serveurs/College_Linux',
            },
        ],
    },
    serveurs_heberge: {
        icon: 'server',
        text: 'Serveurs Hébergés',
        submenu: [
            {
                prefix: 'fab',
                icon:'windows',
                text: 'Windows',
                link: '/patchManagement/serveurs/Heberge_Windows',
            },
            {
                prefix: 'fab',
                icon: 'linux',
                text: 'Linux',
                link: '/patchManagement/serveurs/Heberge_Linux',
            },
        ],
    },
    historique_alco: {
        icon: 'clock-rotate-left',
        text: 'Historiques Alco',
        submenu: [
            {
                prefix: 'fab',
                icon:'windows',
                text: 'Windows',
                link: '/patchManagement/historique/Alco_Windows',
            },
            {
                prefix: 'fab',
                icon: 'linux',
                text: 'Linux',
                link: '/patchManagement/historique/Alco_Linux',
            },
        ],
    },
    historique_college: {
        icon: 'clock-rotate-left',
        text: 'Historiques Collège',
        submenu: [
            {
                prefix: 'fab',
                icon:'windows',
                text: 'Windows',
                link: '/patchManagement/historique/College_Windows',
            },
            {
                prefix: 'fab',
                icon: 'linux',
                text: 'Linux',
                link: '/patchManagement/historique/College_Linux',
            },
        ],
    },
    historique_heberge: {
        icon: 'clock-rotate-left',
        text: 'Historiques Hébergés',
        submenu: [
            {
                prefix: 'fab',
                icon:'windows',
                text: 'Windows',
                link: '/patchManagement/historique/Heberge_Windows',
            },
            {
                prefix: 'fab',
                icon: 'linux',
                text: 'Linux',
                link: '/patchManagement/historique/Herberge_Linux',
            },
        ],
    },
    exclusions: {
        icon: 'ban',
        text: 'Exclusions',
        link: '/patchManagement/exclusions',
    },
    plannificationExceptionnel: {
        icon: 'list-check',
        text: 'Planifications Exceptionnelles',
        link: '/patchManagement/planificationExceptionnel',
    },
    calendrier: {
        icon: 'calendar-days',
        text: 'Calendrier',
        link: '/patchManagement/calendrier',
    },
    WAAF: {
        icon: 'screwdriver-wrench',
        text: 'Config WAF (Beta)',
        link: '/patchManagement/waaf',
    },
    apropos: {
        icon: 'circle-info',
        text: 'A propos',
        link: '/patchManagement/apropos',
    },

};
