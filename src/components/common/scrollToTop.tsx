'use client';
import React, { useState, useEffect, useCallback, memo } from 'react';

interface ScrollTopButtonProps {
  showAfter?: number; // số px cuộn xuống mới hiện nút, mặc định 120
}

const BUTTON_STYLES = {
  transition: 'opacity 0.3s ease',
  cursor: 'pointer',
} as const;

const ScrollTopButton = memo(({ showAfter = 120 }: ScrollTopButtonProps): React.ReactElement | null => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > showAfter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showAfter]);

  const scrollToTop = useCallback((): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      id="back-top" 
      onClick={scrollToTop}
      style={{
        ...BUTTON_STYLES,
        opacity: isVisible ? 1 : 0,
      }}
      role="button"
      tabIndex={0}
      aria-label="Scroll to top"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          scrollToTop();
        }
      }}
    >
      <a className="bgcolor_theme" id="topToPage">_Top_</a>
    </div>
  );
});

ScrollTopButton.displayName = 'ScrollTopButton';

export default ScrollTopButton;