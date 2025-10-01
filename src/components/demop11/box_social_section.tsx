import React from 'react';

interface SocialItem {
    NAME: string;
    LINK: string;
    iconType: 'fontawesome' | 'image';
    iconClass?: string;
    iconSrc?: string;
    show: number; // 0 = ẩn, 1 = hiện
}

const socialData: SocialItem[] = [
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

interface SocialSectionProps {
    show?: number;
}

const SocialSection: React.FC<SocialSectionProps> = ({ show = 0 }) => {
    return (
        <>
        <div className="section-page social-pre bg-odd">
            <header className="container-fluid">
                <h2 className="section-title">CareerBuilder Networks</h2>
            </header>
            <div className="socialWrapper">
                {socialData
                    .filter(item => item.show === 1)
                    .map(item => (
                        <div key={item.NAME} className="item">
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
                    ))
                }
            </div>
        </div>
        {show === 1 && (
            <div className="join-talent-onclip setpos">
                <a href="#" className="showDialogD">Join Our Talent Network</a>
            </div>
        )}
        </>
    );
}

export default SocialSection;