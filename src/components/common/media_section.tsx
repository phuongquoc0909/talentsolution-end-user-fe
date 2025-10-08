'use client';
import React, { useState, useCallback, memo } from 'react';

interface MediaItem {
    LINK: string;
    MEDIA_NAME: string;
    MEDIA_PICTURE: string;
}

const MEDIA_ITEMS: MediaItem[] = [
    {
        LINK: "community-activities.html",
        MEDIA_NAME: "Hoạt động cộng đồng",
        MEDIA_PICTURE: "https://image.talentnetwork.vn/vinasoy//media/2023/03/27/1679902623_1.1.jpg"
    },
    {
        LINK: "internal-activities.html",
        MEDIA_NAME: "Hoạt động đối nội",
        MEDIA_PICTURE: "https://image.talentnetwork.vn/vinasoy//media/2023/03/27/1679888447_2.jpg"
    },
    {
        LINK: "album.html",
        MEDIA_NAME: "Thư viện ảnh",
        MEDIA_PICTURE: "https://image.talentnetwork.vn/vinasoy//media/2023/03/27/1679901118_3.1.jpg"
    },
    {
        LINK: "company-trip.html",
        MEDIA_NAME: "Company trip",
        MEDIA_PICTURE: "https://image.talentnetwork.vn/vinasoy//media/2023/03/27/1679888460_4.jpg"
    }
];

const OVERLAY_STYLES = {
    transition: 'bottom 0.3s ease-in-out'
} as const;

const MediaSection = memo((): React.ReactElement => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseEnter = useCallback((index: number): void => {
        setHoveredIndex(index);
    }, []);

    const handleMouseLeave = useCallback((): void => {
        setHoveredIndex(null);
    }, []);

    return (
        <div id="media_section" className="section-page ImageService-pre" role="region" aria-label="Media gallery">
            {MEDIA_ITEMS.map((item: MediaItem, index: number) => (
                <div key={index} className="col-xs-12 col-sm-3 calendarWrapper">
                    <div 
                        className="calendarImageWrapper jqEventImageWrapper"
                        onMouseEnter={(): void => handleMouseEnter(index)}
                        onMouseLeave={(): void => handleMouseLeave()}
                        role="button"
                        tabIndex={0}
                        aria-label={`View ${item.MEDIA_NAME}`}
                    >
                        <div 
                            className="eventOverlay"
                            style={{
                                bottom: hoveredIndex === index ? '0' : '-300px',
                                ...OVERLAY_STYLES
                            }}
                        >
                            <p>
                                <a 
                                    href={item.LINK}
                                    aria-label={`Go to ${item.MEDIA_NAME}`}
                                >
                                    {item.MEDIA_NAME}
                                </a>
                            </p>
                        </div>
                        <img 
                            alt={item.MEDIA_NAME} 
                            src={item.MEDIA_PICTURE}
                            loading="lazy"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
});

MediaSection.displayName = 'MediaSection';

export default MediaSection;
