import React from 'react';
import Image from 'next/image';
import { SOCIAL_DATA, SocialItem } from '@/contants/social-footer-p11';
import imgZalo from '@/styles/common/images/zalo_icon.png';
import imgTiktok from '@/styles/common/images/tiktok-svg.svg';

// Filter items with show: 1 for rendering
const VISIBLE_SOCIAL_ITEMS = SOCIAL_DATA.filter(item => item.show === 1);

interface SocialSectionProps {
    show?: number;
}

const SocialIcon: React.FC<{ item: SocialItem }> = ({ item }): React.ReactElement => (
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
                <Image 
                    className={item.NAME} 
                    src={item.NAME === 'zalo' ? imgZalo.src : item.NAME === 'tiktok' ? imgTiktok.src : item.iconSrc || ''} 
                    alt={item.NAME}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    loading="lazy"
                    unoptimized={true}
                />
            )}
        </a>
    </div>
);

const SocialSection: React.FC<SocialSectionProps> = React.memo(({ show = 0 }) => {
    return (
        <>
            <div className="section-page social-pre bg-odd">
                <header className="container-fluid">
                    <h2 className="section-title">CareerBuilder Networks</h2>
                </header>
                <div className="socialWrapper">
                    {VISIBLE_SOCIAL_ITEMS.map(item => (
                        <SocialIcon key={item.NAME} item={item} />
                    ))}
                </div>
            </div>
            {show === 1 && (
                <div className="join-talent-onclip setpos">
                    <a href="#" className="showDialogD">Join Our Talent Network</a>
                </div>
            )}
        </>
    );
});

SocialSection.displayName = 'SocialSection';

export default SocialSection;