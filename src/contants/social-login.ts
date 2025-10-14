// Simple state for controlling social login visibility
export interface SocialLoginItem {
    id: string;
    popupapi: string;
    show: 0 | 1; // Strict literal types: 1 = show, 0 = hide
}

// Data từ API (có thể fetch từ server) - Memoized for performance
export const socialLoginData: SocialLoginItem[] = [
    {
        id: 'google',
        popupapi: "https://talentnetwork.vn/api/login/google",
        show: 1
    },  
    {
        id: 'facebook',
        popupapi: "https://talentnetwork.vn/api/login/facebook",
        show: 1
    },
    {
        id: 'linkedin',
        popupapi: "https://talentnetwork.vn/api/login/linkedin",
        show: 1
    }
];