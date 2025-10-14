export interface SubMenuItem {
    CATE_NAME: string;
    CATE_LINK: string;
    CATE_LINKTARGET?: string; // Optional - defaults to '_self'
    type?: string; // 2: page, 3: list
}

export interface MenuItem {
    CATE_ID?: string; // Optional - will use index as fallback
    CATE_NAME: string;
    CATE_LINK: string;
    CATE_LINKTARGET?: string; // Optional - defaults to '_self'
    hasSubmenu?: boolean; // Optional - auto-detect from submenu presence
    submenu?: SubMenuItem[];
    className?: string;
    type?: string; // 2: page, 3: list
}

export const defaultMenuItems: MenuItem[] = [
    {
        CATE_ID: 'menu_16018',
        CATE_NAME: 'Home',
        CATE_LINK: '/demop11/home',
        CATE_LINKTARGET: '_self',
        className: 'focus'
    },
    {
        CATE_ID: 'menu_11378',
        CATE_NAME: 'Vinasoy Discovery',
        CATE_LINK: 'https://career.vinasoy.com/en/#11378',
        submenu: [
        {
            CATE_NAME: 'Vinasoy People',
            CATE_LINK: '/demop11/news/',
            CATE_LINKTARGET: '_self',
            type: '2' // 2: page, 3: list
        }
        ]
    },
    {
        CATE_ID: 'menu_11379',
        CATE_NAME: 'Career Opportunities',
        CATE_LINK: 'https://career.vinasoy.com/en/#11379',
        submenu: [
        {
            CATE_NAME: 'Potential Candidates',
            CATE_LINK: '/demop11/news/',
            CATE_LINKTARGET: '_self' ,
            type: '2'
        },
        {
            CATE_NAME: 'Hiring Process',
            CATE_LINK: '/demop11/news/',
            CATE_LINKTARGET: '_self',
            type: '2'

        },
        {
            CATE_NAME: 'All Jobs',
            CATE_LINK: '/demop11/jobs',
            CATE_LINKTARGET: '_self',
            type: '2'
        },
        {
            CATE_NAME: 'Benefits',
            CATE_LINK: '/demop11/news/',
            CATE_LINKTARGET: '_self',
            type: '2'
        },
        {
            CATE_NAME: 'Why Vinasoy?',
            CATE_LINK: '/demop11/news/',
            CATE_LINKTARGET: '_self',
            type: '2'
        }
        ]
    },
    {
        CATE_ID: 'menu_11381',
        CATE_NAME: 'News',
        CATE_LINK: '/demop11/home/#11381',
        submenu: [
        {
            CATE_NAME: 'Vinasoy News',
            CATE_LINK: '/demop11/news/',
            CATE_LINKTARGET: '_self',
            type: '2'
        },
        {
            CATE_NAME: 'Career Advices',
            CATE_LINK: '/demop11/news/',
            CATE_LINKTARGET: '_self',
            type: '3'
        }
        ]
    },
    {
        CATE_ID: 'menu_11382',
        CATE_NAME: 'Contact Us',
        CATE_LINK: '/demop11/contact/'
    }
];