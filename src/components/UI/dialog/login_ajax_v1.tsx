'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BaseDialog } from '@/components/UI/dialog/base/BaseDialog';
import imageCaptcha from '@/styles/common/images/8a4ba5a06b3e22cce803747eb6cfc5cc.png';
import { socialLoginData, SocialLoginItem } from '@/contants/social-login';

import '@/styles/v1/css/ts-jobseeker.css';
import '@/styles/v1/css/jsk-login.css';

const DIALOG_STYLES = {
  container: {
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    border: '0 !important',
    borderRadius: '25px',
    overflow: 'hidden',
  },
  closeButton: {
    position: 'absolute' as const,
    top: '20px',
    right: '20px',
    cursor: 'pointer',
  }
} as const;

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const LoginDialog = ({ isOpen, onClose }: Props) => {
  const closeButtonRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (!isOpen) return;
      
      try {
        switch (e.key) {
          case 'Escape':
            e.preventDefault();
            onClose();
            break;
          case 'Tab':
            // Trap focus within dialog (accessibility best practice)
            const focusableElements = document.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
            
            if (e.shiftKey && document.activeElement === firstElement) {
              e.preventDefault();
              lastElement?.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
              e.preventDefault();
              firstElement?.focus();
            }
            break;
        }
      } catch (error) {
        console.error('Error handling keyboard event:', error);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleClose = useCallback((): void => {
    onClose();
  }, [onClose]);


  // Helper function để check hiển thị/ẩn từ API data
  const isSocialLoginVisible = useCallback((id: string): boolean => {
    try {
      const item = socialLoginData.find(item => item.id === id);
      return item?.show === 1;
    } catch (error) {
      console.error(`Error checking visibility for ${id}:`, error);
      return false;
    }
  }, [socialLoginData]);

  // Check nếu tất cả social login đều bị ẩn (show: 0)
  const hasAnyVisibleSocialLogin = socialLoginData.some(item => item.show === 1);

  // Social login data map for O(1) lookup (Google approach)
  const socialLoginMap = (() => {
    const map = new Map<string, SocialLoginItem>();
    socialLoginData.forEach(item => {
      if (item.show === 1) {
        map.set(item.id, item);
      }
    });
    return map;
  })();


  const POPUP_CONFIG = {
    width: 600,
    height: 600,
    features: [
      'scrollbars=yes',
      'resizable=yes', 
      'status=yes',
      'location=yes',
      'toolbar=no',
      'menubar=no',
      'directories=no',
      'copyhistory=no'
    ].join(','),
    windowName: 'socialLogin'
  };

  const handleSocialLogin = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!id || typeof id !== 'string') {
      return;
    }

    // Prevent default immediately
    e.preventDefault();
    e.stopPropagation();

    // O(1) lookup instead of O(n) find
    const socialItem = socialLoginMap.get(id);
    
    if (!socialItem) {
      return;
    }

    // Validate URL before opening
    let popupUrl: string;
    try {
      popupUrl = new URL(socialItem.popupapi).href;
    } catch (error) {
      console.error(`Invalid popup URL for ${id}:`, socialItem.popupapi);
      return;
    }

    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const left = Math.round((screenWidth - POPUP_CONFIG.width) / 2);
    const top = Math.round((screenHeight - POPUP_CONFIG.height) / 2);

    // Open popup with optimized configuration
    const popup = window.open(
      popupUrl,
      POPUP_CONFIG.windowName,
      `width=${POPUP_CONFIG.width},height=${POPUP_CONFIG.height},left=${left},top=${top},${POPUP_CONFIG.features}`
    );

    if (!popup) {
      return;
    }

    // Focus popup immediately
    popup.focus();

  }, [socialLoginMap, POPUP_CONFIG]);

  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  // Toggle password visibility handler
  const togglePasswordVisibility = useCallback((): void => {
    try {
      setIsPasswordVisible(prev => !prev);
      
      // Focus back to password input after toggle for better UX
      if (passwordInputRef.current) {
        passwordInputRef.current.focus();
      }
    } catch (error) {
      console.error('Error toggling password visibility:', error);
    }
  }, []);

  // Handle keyboard events for password toggle (accessibility)
  const handlePasswordToggleKeyDown = useCallback((e: React.KeyboardEvent): void => {
    try {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        togglePasswordVisibility();
      }
    } catch (error) {
      console.error('Error handling password toggle keydown:', error);
    }
  }, [togglePasswordVisibility]);

  return (
    <BaseDialog open={isOpen}>
      <div
        className="dialog-login"
        style={DIALOG_STYLES.container} 
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
        aria-describedby="login-content"
      >
        <div id="LoginTalentNetwork" className="wrapDialog msgbox">
          <div className="inner-login d-flex align-center">
            <div className="box-img"></div>
            <div className="box-text d-flex">
              <div className="form-area crv-hgRRfv">
                <p className="crv-gRtvSG">Login</p>
                <p style={{display: 'none'}} id="boxmsg"></p>
                <div className="form-login">
                  <form name="frmLogin" id="frmLogin" method="post" className="fontCore">
                    <div className="form-group align-left">
                      <div className="label align-left" style={{padding: 0}}>
                        <label htmlFor="email">
                          Email <span aria-label="required">*</span>
                        </label>
                      </div>
                      <div className="input-area">
                        <input 
                          type="email" 
                          name="email" 
                          id="email"
                          className="form-control" 
                          required
                          aria-required="true"
                          aria-label="Enter your email address"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="label just-ct-sp align-left" style={{padding: 0, display: 'flex'}}>
                        <label htmlFor="password">
                          Password <span aria-label="required">*</span>
                        </label>
                        <a 
                          href="#" 
                          className="tag-link forgot-password" 
                          aria-label="Forgot password"
                          tabIndex={0}
                        >
                          Forgot Password ?
                        </a>
                      </div>
                      <div className="input-area">
                        <div className="box-password">
                          <input 
                            ref={passwordInputRef}
                            type={isPasswordVisible ? "text" : "password"}
                            name="password" 
                            id="password"
                            autoComplete="off" 
                            className="form-control"
                            required
                            aria-required="true"
                            aria-label="Enter your password"
                          />
                        </div>
                        <div 
                          className={`showhide-password eyess ${isPasswordVisible ? 'active' : ''}`}
                          onClick={togglePasswordVisibility}
                          onKeyDown={handlePasswordToggleKeyDown}
                          role="button"
                          tabIndex={0}
                          aria-label={isPasswordVisible ? "Hide password" : "Show password"}
                          title={isPasswordVisible ? "Hide password" : "Show password"}
                        >
                          <svg 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ 
                              display: 'block',
                              width: '100%',
                              height: '100%',
                              cursor: 'pointer'
                            }}
                          >
                            {isPasswordVisible ? (
                              // Eye slash icon (hide password)
                              <>
                                <path 
                                  d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" 
                                  stroke="currentColor" 
                                  strokeWidth="2" 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round"
                                />
                                <circle 
                                  cx="12" 
                                  cy="12" 
                                  r="3" 
                                  stroke="currentColor" 
                                  strokeWidth="2" 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round"
                                />
                              </>
                            ) : (
                              // Eye icon (show password)
                              <path 
                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 11-4.243-4.243m4.242 4.242L9.88 9.88" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                              />
                            )}
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div id="area_captcha" style={{display: 'none'}}>
                      <div className="form-group">
                        <div className="label" style={{padding: 0}}>
                          <label htmlFor="security_code">
                            Security code <span aria-label="required">*</span>
                          </label>
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            <input 
                              type="text" 
                              name="security_code" 
                              id="security_code" 
                              maxLength={10} 
                              autoComplete="off" 
                              className="form-control"
                              required
                              aria-required="true"
                              aria-label="Enter the security code shown in the image"
                            />
                          </div>
                          <div className="col-sm-6">
                            <div className="row align-center">
                              <span id="tn_captcha">
                                <img 
                                  width="150" 
                                  height="50" 
                                  alt="Security code image - please enter the characters you see" 
                                  src={imageCaptcha.src}
                                  loading="lazy"
                                />
                              </span>
                              <div className="col-3">
                                <a 
                                  id="trynewcode" 
                                  role="button" 
                                  tabIndex={0} 
                                  aria-label="Refresh security code"
                                >
                                  <svg width="35" height="29" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.74734 13.3286L5.36072 16.7152C5.13438 16.9416 4.83827 17.0522 4.54215 17.0522C4.24603 17.0522 3.94992 16.9416 3.72358 16.7152L0.33696 13.3286C-0.11232 12.8776 -0.11232 12.1493 0.33696 11.7C0.78624 11.2507 1.51462 11.2507 1.9656 11.7L3.34918 13.0836C3.92439 5.76405 10.0322 0 17.4998 0C22.9541 0 27.6835 3.07689 30.0643 7.585C30.3638 8.1466 30.1528 8.84264 29.5929 9.14216C29.033 9.43998 28.337 9.22725 28.0374 8.66735H28.034C26.0395 4.88422 22.0743 2.30256 17.4998 2.30256C11.2728 2.30256 6.17249 7.08296 5.64663 13.1721L7.1187 11.7C7.56968 11.2507 8.29806 11.2507 8.74734 11.7C9.19662 12.1493 9.19662 12.8776 8.74734 13.3286ZM34.6618 15.0861C35.1127 15.5354 35.1127 16.2638 34.6618 16.7147C34.2125 17.164 33.4841 17.164 33.0331 16.7147L31.6495 15.3312C31.076 22.6507 24.9665 28.4147 17.5006 28.4147C12.0446 28.4147 7.31526 25.3361 4.93272 20.8263C4.6332 20.2647 4.84592 19.5687 5.40752 19.2692C5.96742 18.9696 6.66517 19.1824 6.96469 19.7423V19.7457H6.96639C8.95922 23.5288 12.9262 26.1122 17.5006 26.1122C23.7259 26.1122 28.8279 21.3318 29.3521 15.241L27.88 16.7147C27.4307 17.164 26.7024 17.164 26.2531 16.7147C25.8021 16.2638 25.8021 15.5354 26.2531 15.0861L29.638 11.6995C29.8643 11.4731 30.1605 11.3625 30.4566 11.3625C30.7527 11.3625 31.0488 11.4731 31.2751 11.6995L34.6618 15.0861Z" fill="#09589E"></path>
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group form-action">
                      <button 
                        className="ui_btnCb" 
                        type="submit" 
                        id="btnLogin"
                        aria-label="Submit login form"
                      >
                        Login
                      </button>
                    </div>
                    <hr />
                  </form>
                  {hasAnyVisibleSocialLogin && (
                    <>
                      <p className="bcmeti">Or sign in with</p>
                      <div className="crv-dUYLmH">
                        {isSocialLoginVisible('google') && (
                          <a 
                            className="vsUcT crv-LoginGG" 
                            title="Google" 
                            tabIndex={0} 
                            role="button"
                            aria-label="Sign in with Google"
                            onClick={(e) => handleSocialLogin(e, 'google')}
                          >
                            <span>
                              <svg fill="currentColor" className="" stroke="unset" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20">
                                <path style={{fill: 'rgb(255, 193, 7)'}} d="M 43.609375 20.082031 L 42 20.082031 L 42 20 L 24 20 L 24 28 L 35.304688 28 C 33.652344 32.65625 29.222656 36 24 36 C 17.371094 36 12 30.628906 12 24 C 12 17.371094 17.371094 12 24 12 C 27.058594 12 29.84375 13.152344 31.960938 15.039063 L 37.617188 9.382813 C 34.046875 6.054688 29.269531 4 24 4 C 12.953125 4 4 12.953125 4 24 C 4 35.046875 12.953125 44 24 44 C 35.046875 44 44 35.046875 44 24 C 44 22.660156 43.863281 21.351563 43.609375 20.082031 Z "></path>
                                <path style={{fill: 'rgb(255, 61, 0)'}} d="M 6.304688 14.691406 L 12.878906 19.511719 C 14.65625 15.109375 18.960938 12 24 12 C 27.058594 12 29.84375 13.152344 31.960938 15.039063 L 37.617188 9.382813 C 34.046875 6.054688 29.269531 4 24 4 C 16.316406 4 9.65625 8.335938 6.304688 14.691406 Z "></path>
                                <path style={{fill: 'rgb(76, 175, 80)'}} d="M 24 44 C 29.164063 44 33.859375 42.023438 37.410156 38.808594 L 31.21875 33.570313 C 29.210938 35.089844 26.714844 36 24 36 C 18.796875 36 14.382813 32.683594 12.71875 28.054688 L 6.195313 33.078125 C 9.503906 39.554688 16.226563 44 24 44 Z "></path>
                                <path style={{fill: 'rgb(25, 118, 210)'}} d="M 43.609375 20.082031 L 42 20.082031 L 42 20 L 24 20 L 24 28 L 35.304688 28 C 34.511719 30.238281 33.070313 32.164063 31.214844 33.570313 C 31.21875 33.570313 31.21875 33.570313 31.21875 33.570313 L 37.410156 38.808594 C 36.972656 39.203125 44 34 44 24 C 44 22.660156 43.863281 21.351563 43.609375 20.082031 Z "></path>
                              </svg>
                              Google
                            </span>
                          </a>
                        )}
                        {isSocialLoginVisible('facebook') && (
                          <a 
                            className="vsUcT crv-LoginFB" 
                            tabIndex={0} 
                            role="button" 
                            title="Facebook"
                            aria-label="Sign in with Facebook"
                            onClick={(e) => handleSocialLogin(e, 'facebook')}
                          >
                            <span>
                              <svg width="20" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_4712_3953)">
                                <path d="M38.1604 19.0263C38.1604 8.75234 29.8317 0.423645 19.5578 0.423645C9.28377 0.423645 0.955078 8.75234 0.955078 19.0263C0.955078 28.3113 7.75777 36.0074 16.6511 37.403V24.4037H11.9277V19.0263H16.6511V14.9279C16.6511 10.2656 19.4284 7.69032 23.6776 7.69032C25.7123 7.69032 27.8418 8.05365 27.8418 8.05365V12.6317H25.4961C23.1853 12.6317 22.4644 14.0657 22.4644 15.5383V19.0263H27.6238L26.799 24.4037H22.4644V37.403C31.3577 36.0074 38.1604 28.3113 38.1604 19.0263Z" fill="#1877F2"></path>
                                <path d="M26.799 24.4036L27.6237 19.0263H22.4644V15.5383C22.4644 14.0672 23.1853 12.6316 25.4961 12.6316H27.8417V8.05364C27.8417 8.05364 25.713 7.69031 23.6776 7.69031C19.4284 7.69031 16.6511 10.2656 16.6511 14.9279V19.0263H11.9277V24.4036H16.6511V37.403C18.5771 37.7043 20.5383 37.7043 22.4644 37.403V24.4036H26.799Z" fill="white"></path>
                                </g>
                                <defs>
                                <clipPath id="clip0_4712_3953">
                                  <rect width="37.2053" height="37.2053" fill="white" transform="translate(0.955078 0.423645)"></rect>
                                </clipPath>
                                </defs>
                              </svg>
                              Facebook
                            </span>
                          </a>
                        )}
                        {isSocialLoginVisible('linkedin') && (
                          <a 
                            className="vsUcT crv-LoginLinkedIn" 
                            tabIndex={0} 
                            role="button" 
                            title="LinkedIn"
                            aria-label="Sign in with LinkedIn"
                            onClick={(e) => handleSocialLogin(e, 'linkedin')}
                          >
                            <span>
                              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.61084 3.31884C0.61084 1.79209 1.84851 0.554413 3.37526 0.554413H17.5923C19.119 0.554413 20.3567 1.79209 20.3567 3.31884V17.5359C20.3567 19.0626 19.119 20.3003 17.5923 20.3003H3.37526C1.84851 20.3003 0.61084 19.0626 0.61084 17.5359V3.31884Z" fill="#0077B5"/>
                                <path d="M7.71936 5.8858C7.71936 6.86728 6.92371 7.66293 5.94223 7.66293C4.96075 7.66293 4.1651 6.86728 4.1651 5.8858C4.1651 4.90432 4.96075 4.10867 5.94223 4.10867C6.92371 4.10867 7.71936 4.90432 7.71936 5.8858Z" fill="white"/>
                                <path d="M4.56002 8.84768C4.56002 8.62957 4.73683 8.45276 4.95493 8.45276H6.92952C7.14763 8.45276 7.32444 8.62957 7.32444 8.84768V16.3511C7.32444 16.5692 7.14763 16.746 6.92952 16.746H4.95493C4.73683 16.746 4.56002 16.5692 4.56002 16.3511V8.84768Z" fill="white"/>
                                <path d="M8.90411 8.45277L10.6812 8.45277C10.8993 8.45277 11.0762 8.62958 11.0762 8.84769V9.24261C11.866 8.25531 13.314 8.18948 14.038 8.2553C16.2951 8.46048 16.6708 10.7565 16.605 12.007L16.605 16.3511C16.605 16.5692 16.4282 16.746 16.2101 16.746L14.433 16.746C14.2148 16.746 14.038 16.5692 14.038 16.3511V12.007C13.9722 11.4805 13.6036 10.4274 12.6558 10.4274C11.708 10.4274 11.142 11.6121 11.0762 12.007V16.3511C11.0762 16.5692 10.8993 16.746 10.6812 16.746L8.90411 16.746C8.686 16.746 8.50919 16.5692 8.50919 16.3511V8.84768C8.50919 8.62958 8.686 8.45276 8.90411 8.45277Z" fill="white"/>
                              </svg>
                              LinkedIn
                            </span>
                          </a>
                        )}
                      </div>
                      <hr />
                    </>
                  )}
                  <p className="text-invite">Don't have an account yet?</p>
                  <div className="form-group">
                    <a 
                      href="#" 
                      className="btn-st2 btn-joints showDialog-login"
                      aria-label="Join Vinasoy Talent Network"
                      tabIndex={0}
                    >
                      Join Vinasoy Talent Network
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="fancybox-close" 
          ref={closeButtonRef}
          style={DIALOG_STYLES.closeButton} 
          onClick={handleClose}
          role="button"
          tabIndex={0}
          aria-label="Close login dialog"
        ></div>        
      </div>
    </BaseDialog>
  );
};

export default LoginDialog;

