'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    
    const router = useRouter();

    useEffect(()=> {
  
        if( !localStorage.getItem('login') ) {
            router.push("/login?type=login");
        };
    }, [])
    
    return (
        <div id="wrap">

            <span className="layoutLine"></span>
            

        </div>
    );
}
