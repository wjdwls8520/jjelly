'use client'

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import titleData from "../data/data";
import { Suspense } from "react";
import HeaderMenu from "./HeaderMenu";


function HeaderContents() {

    // 뒤로가기
    const router = useRouter(); 

    const pathname = usePathname()
    let notMain = pathname === '/' ? 'main' : 'commonBoard login sign'; 


    // 쿼리문으로 게시판 타입 판별
    const [title, setTitle] = useState(null);
    const params = useSearchParams();
    const type = params.get('type');
    const typeSate = useState( params.get('type') );
    useEffect(() => {
        if (type) {
          const newTitle = titleData[type];
          setTitle(newTitle); // 이 시점에서 newTitle은 업데이트된 상태입니다.
        };
    }, [type]); // 의존성 배열에 type을 추가


    let [hide, setHide] = useState(false);
    useEffect(() => {
        function checkUrl(url) {
            const regex = /^\/[^\/]+\/(detail|create|edit)(\/|$|\?)/;
            return regex.test(url);
        };
        // hide = true 면 보이기, false면 숨기기 
        if(checkUrl(pathname)) { // 디테일 수정 쓰기 일때
            setHide(false); // 보이기
        } else {
            setHide(true); // 숨기기
        };
    }, [typeSate]);

    return (
        <header id="header" className={notMain}>
            <div className="inner">
                <h1 className="logo">
                    <Link className="imgWrap" href={{ pathname: '/' }}>
                        {/* <!-- <img src="/logo.png" alt="JJelly"> --> */}
                        <span>JJelly</span>
                    </Link>
                </h1>
                <div className="util">
                    <Link className="imgWrap" href={{ pathname: '/' }}>
                        <img src="/icon_alarm.png" alt="알림" />
                    </Link>
                    <Link className="imgWrap" href={{ pathname: '/profile', query : 'type=profile' }}>
                        <img src="/icon_profile.png" alt="프로필" />
                    </Link>
                </div>
            </div>

            {/* 헤더 축소 */}
            <div className="inner innerSub innerSubTop">
                <h1 className="logo">
                    <Link className="imgWrap" href={{ pathname: '/' }}>
                        {/* <!-- <img src="/logo.png" alt="JJelly"> --> */}
                        <span>JJelly</span>
                    </Link>
                </h1>
                <div className="util">
                    <Link className="imgWrap" href={{ pathname: '/' }}>
                        <img src="/icon_alarm.png" alt="알림" />
                    </Link>
                    <Link className="imgWrap" href={{ pathname: '/profile', query : 'type=profile' }}>
                        <img src="/icon_profile.png" alt="프로필" />
                    </Link>
                </div>
            </div>
            <div className="inner innerSub innerSubBot">
                <span className="backImg" onClick={()=> {router.back()}}>
                    <img src="/icon_back.png" alt="뒤로가기" />
                </span>

                <span className="currentTitle">
                    {title}
                </span>

                <span className={hide ? 'utilMenu hide' : 'utilMenu'}>
                    <HeaderMenu />
                </span>
                
            </div>
        </header>
    );
};

export default function Header() {
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <HeaderContents />
        </Suspense>
    )
};  