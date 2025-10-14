export interface SocialItem {
    NAME: string;
    LINK: string;
    iconType: 'fontawesome' | 'image';
    iconClass?: string;
    iconSrc?: string;
    show?: number;
}

export const SOCIAL_DATA: SocialItem[] = [
    {
        NAME: 'facebook',
        LINK: 'facebook.html',
        iconType: 'fontawesome',
        iconClass: 'fa fa-facebook',
        show: 1
    },
    {
        NAME: 'linkedin',
        LINK: 'linkedin.html',
        iconType: 'fontawesome',
        iconClass: 'fa fa-linkedin',
        show: 1
    },
    {
        NAME: 'youtube',
        LINK: 'youtube.html',
        iconType: 'fontawesome',
        iconClass: 'fa fa-youtube',
        show: 1
    },
    {
        NAME: 'zalo',
        LINK: 'zalo.html',
        iconType: 'image',
        iconSrc: '/images/zalo_icon.png',
        show: 1
    },
    {
        NAME: 'tiktok',
        LINK: 'tiktok.html',
        iconType: 'image',
        iconSrc: '/images/tiktok-svg.svg',
    }
];
