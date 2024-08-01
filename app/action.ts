'use server';

import { createClient } from '../utils/supabase/server';

export const userInfo = async () => {
    const supabase = createClient();

    const { data: { user }, error} = await supabase.auth.getUser();
    console.log(user)
    return user;
}
