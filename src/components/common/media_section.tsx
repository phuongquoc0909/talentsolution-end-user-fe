import React from 'react';
import { MEDIA_ITEMS, MediaItem } from '@/contants/media';

const OVERLAY_STYLES = {
    transition: 'bottom 0.3s ease-in-out'
} as const;

const MediaSection = () => {
    return (
        <div id="media_section" className="section-page ImageService-pre" role="region" aria-label="Media gallery">
            {MEDIA_ITEMS.map((item: MediaItem, index: number) => (
                <div key={index} className="col-xs-12 col-sm-3 calendarWrapper">
                    <div 
                        className="calendarImageWrapper jqEventImageWrapper"
                        role="button"
                        tabIndex={0}
                        aria-label={`View ${item.MEDIA_NAME}`}
                    >
                        <div 
                            className="eventOverlay"
                            style={{
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
};

export default MediaSection;
