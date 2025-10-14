// TypeScript interfaces for type safety
export interface FooterLink {
  href: string;
  text: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  tabIndex?: number;
  role?: 'button' | 'link' | 'menuitem';
  type?: string; // For news items: '2' = page, '3' = list
}

export interface SocialLink {
  href: string;
  ariaLabel: string;
  title: string;
  icon: string;
  show?: number;
}

export interface SpecialSocialLink {
  href: string;
  ariaLabel: string;
  className: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  hoverImageSrc?: string;
  show?: number;
}

// Section titles
export const sectionTitles = {
    aboutOwner: 'About The Owner',
    jobFunctions: 'Job Functions',
    browseJobs: 'Browse Jobs By',
    socialLinks: 'Join The Conversation'
  } as const;
  
// About The Owner links
export const aboutOwnerLinks: FooterLink[] = [
  {
    href: 'https://talentnetworkdev.vn/gioi-thieu-35A52747/vi',
    text: 'Giới Thiệu',
    target: '_self',
  },
  {
    href: 'https://talentnetworkdev.vn/tin-tuc-35A52749/vi',
    text: 'Tin Tức',
    target: '_self',
  },
];

// Job Functions links
export const jobFunctionsLinks: FooterLink[] = [
  {
    href: '#',
    text: 'Joining Our Talent Network',
    tabIndex: 0,
    role: 'button',
  },
  {
    href: 'https://talentnetworkdev.vn/vi/resume',
    text: 'My Career',
  },
  {
    href: 'https://talentnetworkdev.vn/resume/preferences',
    text: 'Job Recommendation',
  },
  {
    href: 'https://talentnetworkdev.vn/tim-viec-lam/tat-ca-viec-lam/vi',
    text: 'Career Opportunities',
  }
];

// Browse Jobs links
export const browseJobsLinks: FooterLink[] = [
  {
    href: 'https://talentnetworkdev.vn/tat-ca-viec-lam/vi#label_location',
    text: 'Jobs by Location',
  },
  {
    href: 'https://talentnetworkdev.vn/tat-ca-viec-lam/vi#label_industry',
    text: 'Jobs by Industry',
  }
];

// Standard social media links
export const socialLinks: SocialLink[] = [
  {
    href: 'https://www.facebook.com/himlamis.career',
    ariaLabel: 'Facebook',
    title: 'Facebook',
    icon: 'fa fa-facebook',
    show: 1
  },
  {
    href: 'https://www.linkedin.com/company/himlam-international-school',
    ariaLabel: 'LinkedIn',
    title: 'LinkedIn',
    icon: 'fa fa-linkedin',
    show: 1
  },
  {
    href: 'https://static.talentnetwork.vn/talentnetwork/source/geet/',
    ariaLabel: 'Twitter',
    title: 'Twitter',
    icon: 'fa fa-twitter',
  },
  {
    href: 'https://static.talentnetwork.vn/talentnetwork/source/geet/',
    ariaLabel: 'YouTube',
    title: 'YouTube',
    icon: 'fa fa-youtube',
    show: 1
  },
  {
    href: 'https://static.talentnetwork.vn/talentnetwork/source/geet/',
    ariaLabel: 'Instagram',
    title: 'Instagram',
    icon: 'fa fa-instagram',
  }
];

// Special social links (Zalo & TikTok)
export const specialSocialLinks: SpecialSocialLink[] = [
  {
    href: 'https://id.zalo.me/account?continue=https%3A%2F%2Fchat.zalo.me%2F',
    ariaLabel: 'Zalo',
    className: 'zalo21',
    title: 'Zalo',
    imageSrc: 'zalo_icon.png',
    imageAlt: 'Zalo',
    hoverImageSrc: 'zalo_icon_black.png',
    show: 1
  },
  {
    href: 'https://tiktok.com/@dr.saffron',
    ariaLabel: 'TikTok',
    className: 'tiktok21',
    title: 'TikTok',
    imageSrc: 'tiktok-svg.svg',
    imageAlt: 'TikTok',
    hoverImageSrc: 'tiktok-svg-black.svg',
  }
];
