'use client';

import React from 'react';

interface ShareData {
    id: string;
    name: string;
    icon: string;
    className: string;
    shareUrl: string;
    show?: number;
}

const sharePlatforms: ShareData[] = [
    {
        id: 'facebook',
        name: 'Facebook',
        icon: 'fa fa-facebook',
        className: 'btn-greyscale facebook',
        shareUrl: 'https://www.facebook.com/sharer/sharer.php',
        show: 1
    },
    {
        id: 'twitter',
        name: 'Twitter',
        icon: 'fa fa-twitter',
        className: 'btn-greyscale twitter',
        shareUrl: 'https://twitter.com/intent/tweet',
        show: 1
    },
    {
        id: 'linkedin',
        name: 'LinkedIn',
        icon: 'fa fa-linkedin',
        className: 'btn-greyscale linkedin',
        shareUrl: 'https://www.linkedin.com/sharing/share-offsite/'
    },
    {
        id: 'google',
        name: 'Google+',
        icon: 'fa fa-google',
        className: 'btn-greyscale google',
        shareUrl: 'https://plus.google.com/share'
    }
];

interface ShareProps {
    shareUrl?: string;
    title?: string;
    description?: string;
}

const Share: React.FC<ShareProps> = ({ 
    shareUrl = 'http://careers.himlamis.edu.vn/en',
    title = '',
    description = ''
}) => {
    
    const createShareUrl = (platform: ShareData): string => {
        const params = new URLSearchParams();
        
        // Add parameters
        params.set('url', shareUrl);
        params.set('title', title);
        params.set('description', description);
        
        return `${platform.shareUrl}?${params.toString()}`;
    };
    
    // Handler to open share popup
    const handleShareClick = (platform: ShareData, e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        
        const shareUrl = createShareUrl(platform);
        
        const popup = window.open(
            shareUrl,
            'share-dialog',
            'width=600,height=400,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no,status=no'
        );
        
        if (popup) {
            popup.focus();
        }
    };

    return (
        <>
            {sharePlatforms
                .filter(platform => platform.show === 1)
                .map((platform) => (
                    <div key={platform.id} className="icon-wrapper">
                        <a 
                            tabIndex={0} 
                            role="button" 
                            className={platform.className}
                            href={createShareUrl(platform)}
                            onClick={(e) => handleShareClick(platform, e)}
                            aria-label={`Share on ${platform.name}`}
                        >
                            <i className={platform.icon} aria-hidden="true"></i>
                        </a>
                    </div>
                ))}
        </>
    );
}

export default Share;