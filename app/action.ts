'use server';

import { createClient } from '../utils/supabase/server';

export const userInfo = async () => {
    const supabase = createClient();
    console.log('서버작동 테스트')
    return
}

export async function signUpNewUser(email: string, password:string) {
    const supabase = createClient();
    console.log('회원가입')
    console.log(email, password)
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    })
}
