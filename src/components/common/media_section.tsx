'use client';
import React, { useState } from 'react';

interface MediaItem {
    LINK: string;
    MEDIA_NAME: string;
    MEDIA_PICTURE: string;
}

const MediaSection: React.FC = (): React.ReactElement => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number): void => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = (): void => {
        setHoveredIndex(null);
    };

    const mediaItems: MediaItem[] = [
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

    return (
        <div id="media_section" className="section-page ImageService-pre">
            {mediaItems.map((item: MediaItem, index: number) => (
                <div key={index} className="col-xs-12 col-sm-3 calendarWrapper">
                    <div 
                        className="calendarImageWrapper jqEventImageWrapper"
                        onMouseEnter={(): void => handleMouseEnter(index)}
                        onMouseLeave={(): void => handleMouseLeave()}
                    >
                        <div 
                            className="eventOverlay"
                            style={{
                                bottom: hoveredIndex === index ? '0' : '-300px',
                                transition: 'bottom 0.3s ease-in-out'
                            }}
                        >
                            <p><a href={item.LINK}>{item.MEDIA_NAME}</a></p>
                        </div>
                        <img alt="" src={item.MEDIA_PICTURE} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MediaSection;
