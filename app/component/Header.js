'use client'

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";
import titleData from "../data/data";
import { useEffect } from "react";

export default function Header() {

    // 뒤로가기
    const router = useRouter(); 

    const pathname = usePathname()
    let notMain = pathname === '/' ? 'main' : 'commonBoard login sign'; 




    // 쿼리문으로 게시판 타입 판별
    const [title, setTitle] = useState(null);
    const params = useSearchParams();
    const type = params.get('type');
    useEffect(() => {
        if (type) {
          const newTitle = titleData[type];
          setTitle(newTitle); // 이 시점에서 newTitle은 업데이트된 상태입니다.
        }
    }, [type]); // 의존성 배열에 type을 추가

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
                    <Link className="imgWrap" href={{ pathname: '/profile' }}>
                        <img src="/icon_profile.png" alt="프로필" />
                    </Link>
                </div>
            </div>

            {/* 헤더가아닌 각 게시판들에 뒤로가기 미니 헤더를 만드는게 어떤지 */}
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
                    <Link className="imgWrap" href={{ pathname: '/profile' }}>
                        <img src="/icon_profile.png" alt="프로필" />
                    </Link>
                </div>
            </div>
            <div className="inner innerSub innerSubBot">
                <span className="backImg" onClick={()=> {router.back()}}>
                    <img src="icon_back.png" alt="뒤로가기" />
                </span>

                <span className="currentTitle">
                    {title}
                </span>

                <span className="utilMenu">
                    <img src="icon_dot_menu.png" alt="메뉴" />
                </span>
                
            </div>
        </header>
    );
};