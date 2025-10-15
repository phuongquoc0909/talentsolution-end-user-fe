'use client';

import { useLayoutEffect } from 'react';
import { useSearchParams } from 'next/navigation';

// Global cache để tránh load CSS nhiều lần
const loadedCSS = new Set<string>();
const STORAGE_KEY = 'current-template';

export default function DynamicCSSImporter() {
  const searchParams = useSearchParams();
  const ownerName = searchParams.get('template');

  useLayoutEffect(() => {
    const currentTemplate = ownerName || 
      (typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null);
    
    if (!currentTemplate) return;
    
    // Save template to localStorage
    if (ownerName && typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, ownerName);
    }
    
    // Check if CSS already loaded
    if (loadedCSS.has(currentTemplate)) {
      return;
    }
    
    // Load CSS only once
    import(`@/styles/owner/${currentTemplate}/themes.css`)
      .then(() => {
        loadedCSS.add(currentTemplate);
        console.log(`✅ CSS loaded: ${currentTemplate}`);
      })
      .catch((error) => {
        console.warn(`❌ Failed to load CSS: ${currentTemplate}`, error);
      });
  }, [ownerName]);

  return null;
}