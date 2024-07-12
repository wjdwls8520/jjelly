'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

    const pathname = usePathname()
    let notMain = pathname === '/' ? 'main' : 'commonBoard login sign'; 

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
                    <Link className="imgWrap" href={{ pathname: '/' }}>
                        <img src="/icon_profile.png" alt="프로필" />
                    </Link>
                </div>
            </div>
        </header>
    );
};