'use client'

import { Suspense } from "react"
import FloatingSearch from "./FloatingSearch"
import FloatingMenu from "./FloatingMenu"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { useState } from "react"



function FloatUtilContents({type}) {
    return(
        <>
            {/* 플로팅검색 */}
            <FloatingSearch type={type} />

            {/* 플로팅메뉴 */}
            <FloatingMenu type={type} />
        
        </>

    )
};


export default function FloatUtil() {

    const pathname = usePathname()
    const params = useSearchParams();
    const type = params.get('type');
    const typePathname = useState( pathname );

    let [hide, setHide] = useState(false);
    useEffect(() => {
        function checkUrl(url) {
            const regex = /^\/(meeting|meetNotice|board)\/?(\?|#|$)/;
            return regex.test(url);
        };
        // hide = true 면 보이기, false면 숨기기 
        if(checkUrl(pathname)) { // 모임리스트 공고리스트 보드리스트 일때
            setHide(true); // 보이기
        } else {
            setHide(false);  // 숨기기
        };
    }, [typePathname]);


    return (
        <>
            {
                hide ? 

                    <Suspense fallback={<div>Loading...</div>}>
                        <FloatUtilContents type={type} />
                    </Suspense>

                : 

                    null
            }
        </>
        
    )
};