// Simple state for controlling social login visibility
export interface SocialLoginItem {
    id: string;
    show: 0 | 1; // Strict literal types: 1 = hiển thị, 0 = ẩn
}

// Data từ API (có thể fetch từ server) - Memoized for performance
export const socialLoginData: SocialLoginItem[] = [
    { id: 'google', show: 1 },  
    { id: 'facebook', show: 1 },
    { id: 'linkedin', show: 1 }
];