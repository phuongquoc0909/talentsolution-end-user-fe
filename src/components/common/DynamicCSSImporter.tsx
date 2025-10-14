'use client';

import { useLayoutEffect } from 'react';
import { useSearchParams } from 'next/navigation';

// Global set to track loaded CSS files
const loadedCSS = new Set<string>();
const STORAGE_KEY = 'current-template';

export default function DynamicCSSImporter() {
  const searchParams = useSearchParams();
  const ownerName = searchParams.get('template');

  useLayoutEffect(() => {
    // Get template from URL or localStorage
    const currentTemplate = ownerName || (typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null);
    
    if (!currentTemplate) {
      return;
    }
    
    // Save template to localStorage for persistence
    if (ownerName && typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, ownerName);
    }
    
    // Check if CSS is already loaded
    if (loadedCSS.has(currentTemplate)) {
      return;
    }
    
    // Load CSS dynamically
    const loadCSS = async () => {
      try {
        await import(`@/styles/owner/${currentTemplate}/themes.css`);
        loadedCSS.add(currentTemplate);
        console.log(`✅ CSS loaded: ${currentTemplate}`);
      } catch (error) {
        console.warn(`❌ Failed to load CSS: ${currentTemplate}`, error);
      }
    };

    loadCSS();
  }, [ownerName]);

  return null;
}