'use client';

import { useMemo } from 'react';
import { MenuItem, SubMenuItem } from '@/components/demop21/dataHeader';
import { FooterLink } from '@/components/demop21/dataFooter';

// Type guard for valid target values
const isValidTarget = (target: string | undefined): target is '_blank' | '_self' | '_parent' | '_top' => {
  return target === '_blank' || target === '_self' || target === '_parent' || target === '_top';
};

// Options interface for hook flexibility
interface UseMenuItemsOptions {
  /** Filter by menucross value (default: 1) */
  menucrossValue?: number;
  /** Include main menu items (default: true) */
  includeMainMenu?: boolean;
  /** Include submenu items (default: true) */
  includeSubmenu?: boolean;
  /** Custom filter function */
  customFilter?: (item: MenuItem | SubMenuItem) => boolean;
}

/**
 * Custom hook to extract menu items based on criteria
 * Optimized for performance with memoization
 * 
 * @param menuItems - Array of menu items to process
 * @param options - Configuration options for filtering
 * @returns Array of FooterLink objects
 * 
 * @example
 * ```tsx
 * // Basic usage - get items with menucross: 1
 * const crossMenuItems = useMenuItems(defaultMenuItems);
 * 
 * // Advanced usage - custom filtering
 * const customItems = useMenuItems(defaultMenuItems, {
 *   menucrossValue: 1,
 *   includeSubmenu: false,
 *   customFilter: (item) => item.CATE_NAME.includes('News')
 * });
 * ```
 */
export const useMenuItems = (
  menuItems: MenuItem[], 
  options: UseMenuItemsOptions = {}
): FooterLink[] => {
  const {
    menucrossValue = 1,
    includeMainMenu = true,
    includeSubmenu = true,
    customFilter
  } = options;

  return useMemo(() => {
    const filteredItems: FooterLink[] = [];

    // Process main menu items
    if (includeMainMenu) {
      menuItems.forEach((menuItem) => {
        const shouldInclude = customFilter 
          ? customFilter(menuItem)
          : menuItem.menucross === menucrossValue;

        if (shouldInclude) {
          const target = isValidTarget(menuItem.CATE_LINKTARGET) ? menuItem.CATE_LINKTARGET : '_self';
          filteredItems.push({
            href: menuItem.CATE_LINK,
            text: menuItem.CATE_NAME,
            target,
            type: menuItem.type
          });
        }
      });
    }

    // Process submenu items
    if (includeSubmenu) {
      menuItems.forEach((menuItem) => {
        if (menuItem.submenu) {
          menuItem.submenu.forEach((subItem) => {
            const shouldInclude = customFilter 
              ? customFilter(subItem)
              : subItem.menucross === menucrossValue;

            if (shouldInclude) {
              const target = isValidTarget(subItem.CATE_LINKTARGET) ? subItem.CATE_LINKTARGET : '_self';
              filteredItems.push({
                href: subItem.CATE_LINK,
                text: subItem.CATE_NAME,
                target,
                type: subItem.type
              });
            }
          });
        }
      });
    }

    return filteredItems;
  }, [menuItems, menucrossValue, includeMainMenu, includeSubmenu, customFilter]);
};

// Backward compatibility alias
export const useCrossMenuItems = (menuItems: MenuItem[]): FooterLink[] => {
  return useMenuItems(menuItems, { menucrossValue: 1 });
};
