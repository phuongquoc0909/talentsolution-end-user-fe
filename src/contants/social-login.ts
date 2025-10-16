export interface SocialLoginItem {
    id: string;
    popupapi: string;
    show?: number; 
}

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
        popupapi: "https://talentnetwork.vn/api/login/linkedin"
    }
];
