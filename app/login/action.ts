import { redirect } from 'next/navigation';
import { createClient } from "../../utils/supabase/client";

export async function signUpGoogle() {
    const supabase = createClient();
    console.log('구글 연동 회원가입')
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `http://localhost:3000/auth/callback`
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
          redirectTo: `http://localhost:3000/auth/callback`
      }
    });
  
    if (error) {
      console.error('Error logging in with Kakao:', error.message);
    } else {
      console.log('Logged in successfully:', data);
    }
  }
