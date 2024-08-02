import { createClient } from "../../utils/supabase/client";

export async function signUpGoogle() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/';
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `${baseUrl}auth/callback`
        }
    });
    
    if (error) {
        console.error('Error logging in with Kakao:', error.message);
    } else {
        console.log('Logged in successfully:', data);
    }

}

export async function signInWithKakao() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/';
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'kakao',
        options: {
            redirectTo: `${baseUrl}auth/callback`
        }
    });
    
    if (error) {
        console.error('Error logging in with Kakao:', error.message);
    } else {
        console.log('Logged in successfully:', data);
    }
}
