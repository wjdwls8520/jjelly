'use server';

import { redirect } from 'next/navigation';
import { createClient } from '../../utils/supabase/server';

export const userInfo = async () => {
    const supabase = createClient();
    console.log('서버작동 테스트')
    return
}

export async function signUpGoogle() {
    const supabase = createClient();
    console.log('구글 연동 회원가입')
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
    })
    if (data.url) {
        redirect(data.url) // use the redirect API for your server framework
    }
}

export async function signUpKakao() {
    const supabase = createClient();
    console.log('카카오 연동 회원가입')
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'kakao',
    })
    if (data.url) {
        redirect(data.url) // use the redirect API for your server framework
    }
}
