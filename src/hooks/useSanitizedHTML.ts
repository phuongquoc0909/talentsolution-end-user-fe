'use client';

import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import { Config } from 'dompurify';

/**
 * Hook sanitize HTML input an toàn để render trong React.
 * 
 * @param dirtyHTML - Chuỗi HTML chưa được lọc (có thể chứa mã độc).
 * @param options - Tùy chọn cấu hình DOMPurify (tuỳ chỉnh theo nhu cầu).
 * @returns Chuỗi HTML đã được sanitize an toàn.
 */
function useSanitizedHTML(dirtyHTML: string, options: Config = {}) {
  const [cleanHTML, setCleanHTML] = useState(dirtyHTML);

  useEffect(() => {
    // Cấu hình mặc định an toàn, có thể override qua options
    const defaultConfig = {
      USE_PROFILES: { html: true }, // profile chuẩn cho HTML
      ALLOWED_TAGS: [
        'b', 'i', 'em', 'strong', 'a', 'p', 'ul', 'ol', 'li', 'br', 'span',
        'div', 'img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote',
        'pre', 'code', 'table', 'thead', 'tbody', 'tr', 'th', 'td',
      ],
      ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'style', 'target', 'rel'],
      FORBID_TAGS: ['script', 'style', 'iframe', 'object', 'embed'],
      FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover'], // Removed 'style' to allow styling
      ...options,
    };

    const sanitized = DOMPurify.sanitize(dirtyHTML, defaultConfig) as unknown as string;
    setCleanHTML(sanitized);
  }, [dirtyHTML, options]);

  return cleanHTML;
}

export default useSanitizedHTML;