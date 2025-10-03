'use client';
import { useState, useCallback } from 'react';
import { MenuItem, SubMenuItem, defaultMenuItems } from '@/contants/header';

interface HeaderProps {
  menuItems?: MenuItem[];
  onLogin?: () => void;
}

export default function Header({ menuItems = defaultMenuItems, onLogin }: HeaderProps) {
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);

  const handleMouseEnter = useCallback((menuIndex: number) => {
    setHoveredMenu(menuIndex);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredMenu(null);
  }, []);

  const createMouseEnterHandler = useCallback((index: number) => {
    return () => handleMouseEnter(index);
  }, [handleMouseEnter]);

  const handleLogin = useCallback(() => {
    if (onLogin) {
      onLogin();
    }
  }, [onLogin]);

  const handleMainMenuClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, menuItem: MenuItem) => {
    const hasSubmenu = menuItem.hasSubmenu ?? (menuItem.submenu && menuItem.submenu.length > 0);
    
    if (!hasSubmenu) {
      sessionStorage.setItem('currentCategoryName', menuItem.CATE_NAME);
    }
  }, []);

  const handleSubmenuClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, subItem: SubMenuItem) => {
    if (subItem.CATE_LINK.startsWith('/demop11/news/')) {
      e.preventDefault();
      const categorySlug = subItem.CATE_NAME
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
      
      if (subItem.type) {
        sessionStorage.setItem('newsType', subItem.type);
      }
      
      window.location.href = `/demop11/news/${categorySlug}`;
    }
  }, []);

  return (
    <div className="section-header" id="section-header">
      <div id="my-download">
        <div className="container">
          <div className="download_form_premium"><a href="#">Download application form</a></div>
        </div>
      </div>
      <div id="header-pre">
        <div className="columns hidden"><div id="show-menu"><span className="fa fa-bars"></span></div></div>
        <div className="container">
          <div className="logo"><a href="/demop11/home"><img alt="Vinasoy" src="https://image.talentnetwork.vn/vinasoy//rws//en_1603425322.jpg" /></a></div>
          <div className="menu">
            <ul>
              {menuItems.map((menuItem, index) => {
                const hasSubmenu = menuItem.hasSubmenu ?? (menuItem.submenu && menuItem.submenu.length > 0);
                const menuKey = menuItem.CATE_ID || `menu-${index}`;
                const target = menuItem.CATE_LINKTARGET || '_self';
                
                return (
                  <li 
                    key={menuKey}
                    className={hasSubmenu ? 'parent' : (menuItem.className || '')}
                    onMouseEnter={hasSubmenu ? createMouseEnterHandler(index) : undefined}
                    onMouseLeave={hasSubmenu ? handleMouseLeave : undefined}
                  >
                    <a 
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
          <div className="navbar-right">
            <ul>
              <li><a tabIndex={0} role="button" className="showDialogD" onClick={handleLogin}>Login</a></li>
              <li><span className="vi"></span><a href="#">Vietnamese</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
