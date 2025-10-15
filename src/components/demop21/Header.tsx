'use client';
import React, { useState, useCallback } from 'react';
import { MenuItem, SubMenuItem, defaultMenuItems } from '@/components/demop21/dataHeader';
import LoginDialog from '@/components/UI/dialog/login_ajax_v1';

interface HeaderProps {
  menuItems?: MenuItem[];
}

// Memory pool for regex - Reuse regex objects (X/Twitter approach)
const REGEX_POOL = {
  SPACE_REPLACE: /\s+/g,
  NON_ALPHANUMERIC: /[^a-z0-9-]/g,
  NEWS_LINK_CHECK: /^\/demop21\/news\//
} as const;

const Header = React.memo(({ menuItems = defaultMenuItems }: HeaderProps): React.ReactElement => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  
  const handleLogin = useCallback(() => {
    setIsOpenLogin(true);
  }, []);

  const handleCloseLogin = useCallback(() => {
    setIsOpenLogin(false);
  }, []);

  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);

  const handleMouseEnter = useCallback((menuIndex: number) => {
    setHoveredMenu(menuIndex);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredMenu(null);
  }, []);

  // Create memoized handlers for each menu item
  const createMouseEnterHandler = useCallback((index: number) => {
    return () => handleMouseEnter(index);
  }, [handleMouseEnter]);

  const transformToSlug = useCallback((name: string): string => {
    return name
      .toLowerCase()
      .replace(REGEX_POOL.SPACE_REPLACE, '-')
      .replace(REGEX_POOL.NON_ALPHANUMERIC, '');
  }, []);

  // Handle main menu click to store category info for components
  const handleMainMenuClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, menuItem: MenuItem) => {
    // Only handle main menu items without submenu
    const hasSubmenu = menuItem.hasSubmenu ?? (menuItem.submenu && menuItem.submenu.length > 0);
    
    if (!hasSubmenu) {
      // Store cross-menu info if menucross: 1
      if (menuItem.menucross === 1) {
        sessionStorage.setItem('crossMenuClicked', JSON.stringify({
          name: menuItem.CATE_NAME,
          link: menuItem.CATE_LINK,
          target: menuItem.CATE_LINKTARGET || '_self'
        }));
      }
      
      // Check if this is a news page with type (2 or 3)
      if (menuItem.CATE_LINK === '/demop21/news/' && menuItem.type && (menuItem.type === '2' || menuItem.type === '3')) {
        e.preventDefault();
        // Convert CATE_NAME to URL-friendly slug using optimized function
        const categorySlug = transformToSlug(menuItem.CATE_NAME);
        
        // Store type in sessionStorage to pass to the page
        sessionStorage.setItem('newsType', menuItem.type);
        
        window.location.href = `/demop21/news/${categorySlug}`;
      } else {
        // For all other cases (including type 2/3 with different CATE_LINK), follow normal link behavior
        // Store category name in sessionStorage for components to use
        sessionStorage.setItem('currentCategoryName', menuItem.CATE_NAME);
        // Let the default link behavior happen (no preventDefault)
      }
    }
  }, [transformToSlug]);

  // Handle submenu click for news pages
  const handleSubmenuClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, subItem: SubMenuItem) => {
    // Store cross-menu info if menucross: 1
    if (subItem.menucross === 1) {
      sessionStorage.setItem('crossMenuClicked', JSON.stringify({
        name: subItem.CATE_NAME,
        link: subItem.CATE_LINK,
        target: subItem.CATE_LINKTARGET || '_self'
      }));
    }
    
    if (REGEX_POOL.NEWS_LINK_CHECK.test(subItem.CATE_LINK)) {
      e.preventDefault();
      // Convert CATE_NAME to URL-friendly slug using optimized function
      const categorySlug = transformToSlug(subItem.CATE_NAME);
      
      // Store type in sessionStorage to pass to the page
      if (subItem.type) {
        sessionStorage.setItem('newsType', subItem.type);
      }
      
      window.location.href = `/demop21/news/${categorySlug}`;
    }
  }, [transformToSlug]);

  const DownloadSection: React.ReactElement = (
      <div id="my-download">
        <div className="download_form_premium"><a href="#">Download application form</a></div>
      </div>
  );

  const HeaderMainSection: React.ReactElement = (
    <>
      <div className="columns hidden"><div id="show-menu"><span className="fa fa-bars"></span></div></div>
      <div className="header-container">
        <a href="/demop21/home" className="the-muse-logo"><img src="https://image.talentnetwork.vn/geet//rws//asset_1_1640255213.png" alt="Vinasoy" /></a>
        <div className="user-nav">
          <div className="sign-in-wrapper right hidden-xs">
            <a tabIndex={0} role="button" className="showDialogD" onClick={handleLogin}><i className="fa fa-lock"></i> Sign In</a>
          </div>
          <div className="language21">
            <span className="vi"></span><a href="#">Change Language</a>
          </div>
        </div>
        <div className="main-nav" id="header-pre">
          <ul>
            {menuItems.map((menuItem, index) => {
              const hasSubmenu = menuItem.hasSubmenu ?? (menuItem.submenu && menuItem.submenu.length > 0);
              const menuKey = menuItem.CATE_ID || `menu-${index}`;
              const target = menuItem.CATE_LINKTARGET || '_self';
              
              return (
                <li 
                  key={menuKey}
                  className="parent"
                  onMouseEnter={hasSubmenu ? createMouseEnterHandler(index) : undefined}
                  onMouseLeave={hasSubmenu ? handleMouseLeave : undefined}
                >
                  <a 
                    className={hasSubmenu ? 'parent' : (menuItem.className || '')}
                    href={menuItem.CATE_LINK} 
                    id={menuItem.CATE_ID} 
                    target={target}
                    onClick={(e) => handleMainMenuClick(e, menuItem)}
                  >
                    {menuItem.CATE_NAME}
                    {hasSubmenu && <i className="fa fa-chevron-down"></i>}
                  </a>
                  {hasSubmenu && hoveredMenu === index && menuItem.submenu && (
                    <ul className="submenu" style={{ display: 'block' }}>
                      {menuItem.submenu.map((subItem, subIndex) => {
                        const subKey = `submenu-${index}-${subIndex}`;
                        const subTarget = subItem.CATE_LINKTARGET || '_self';
                        
                        return (
                          <li key={subKey}>
                            <a 
                              className="link_menu"
                              href={subItem.CATE_LINK} 
                              target={subTarget}
                              onClick={(e) => handleSubmenuClick(e, subItem)}
                            >
                              {subItem.CATE_NAME}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="header" id="section-header">
        {DownloadSection}
        {HeaderMainSection}
      </div>
      <LoginDialog isOpen={isOpenLogin} onClose={handleCloseLogin} />
    </>
  );
});

Header.displayName = 'Header';

export default Header;
