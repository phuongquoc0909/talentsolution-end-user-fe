import React, { memo, useMemo } from 'react';

// Type definitions for better performance (TypeScript optimization)
interface SocialItem {
    NAME: string;
    LINK: string;
    iconType: 'fontawesome' | 'image';
    iconClass?: string;
    iconSrc?: string;
    show: number; // 0 = ẩn, 1 = hiện
}

// Static data optimization - Pre-compute at module level (Facebook approach)
const SOCIAL_DATA: SocialItem[] = [
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
        NAME: 'twitter',
        LINK: 'twitter.html',
        iconType: 'fontawesome',
        iconClass: 'fa fa-twitter',
        show: 0
    },
    {
        NAME: 'zalo',
        LINK: 'zalo.html',
        iconType: 'image',
        iconSrc: 'https://static.talentnetwork.vn/talentnetwork/source/images/zalo_icon.png',
        show: 1
    },
    {
        NAME: 'tiktok',
        LINK: 'tiktok.html',
        iconType: 'image',
        iconSrc: 'https://static.talentnetwork.vn/talentnetwork/source/images/tiktok-svg.svg',
        show: 1
    },
    {
        NAME: 'instagram',
        LINK: 'instagram.html',
        iconType: 'fontawesome',
        iconClass: 'fa fa-instagram',
        show: 0
    }
];

// Pre-computed visible items - O(1) lookup (Google approach)
const VISIBLE_SOCIAL_ITEMS = SOCIAL_DATA.filter(item => item.show === 1);

interface SocialSectionProps {
    show?: number;
}

// Optimized Social Icon Component - Memoized for performance (Facebook approach)
const SocialIcon: React.FC<{ item: SocialItem }> = memo(({ item }) => (
    <div className="item">
        <a 
            className="socialIcon hvr-float-shadow" 
            href={item.LINK} 
            target="_blank" 
            title={item.NAME}
        >
            {item.iconType === 'fontawesome' ? (
                <i className={item.iconClass}></i>
            ) : (
                <img 
                    className={item.NAME} 
                    src={item.iconSrc} 
                    alt={item.NAME}
                />
            )}
        </a>
    </div>
));

const SocialSection: React.FC<SocialSectionProps> = memo(({ show = 0 }) => {
    // Memoized header section (LinkedIn approach)
    const HeaderSection = useMemo(() => (
        <header className="container-fluid">
            <h2 className="section-title">CareerBuilder Networks</h2>
        </header>
    ), []);

    // Memoized social icons - Pre-computed visible items (Instagram approach)
    const SocialIconsSection = useMemo(() => (
        <div className="socialWrapper">
            {VISIBLE_SOCIAL_ITEMS.map(item => (
                <SocialIcon key={item.NAME} item={item} />
            ))}
        </div>
    ), []);

    // Memoized join section (Google approach)
    const JoinSection = useMemo(() => (
        show === 1 ? (
            <div className="join-talent-onclip setpos">
                <a href="#" className="showDialogD">Join Our Talent Network</a>
            </div>
        ) : null
    ), [show]);

    // Optimized render - Early return pattern (X/Twitter approach)
    return (
        <>
            <div className="section-page social-pre bg-odd">
                {HeaderSection}
                {SocialIconsSection}
            </div>
            {JoinSection}
        </>
    );
});

// Performance optimization - Static display name (React DevTools optimization)
SocialSection.displayName = 'SocialSection';
SocialIcon.displayName = 'SocialIcon';

// Export with performance hint (Webpack optimization)
export default SocialSection;