import { createClient } from "../../utils/supabase/client";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export async function signUpGoogle() {
    const supabase = createClient();
    console.log('구글 연동 회원가입')
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `${baseUrl}/auth/callback`
        }
    });
    
    if (error) {
        console.error('Error logging in with Kakao:', error.message);
    } else {
        console.log('Logged in successfully:', data);
    }

}

export async function signInWithKakao() {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'kakao',
        options: {
            redirectTo: `${baseUrl}/auth/callback`
        }
    });
    
    if (error) {
    console.error('Error logging in with Kakao:', error.message);
    } else {
    console.log('Logged in successfully:', data);
    }
}
