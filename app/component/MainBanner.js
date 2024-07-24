'use client'

import { usePathname } from "next/navigation"

export default function MainBanner() {
    const pathName = usePathname();
    return (
        <>
            {
                pathName === '/' ? 

                    <section className="section section01 fixedSec">
                        <div className="sloganWrap">
                            <span className="subSW">
                                사랑과 추억을 나누는,
                            </span>
                            <span className="mainSW">
                                반려동물 이야기
                            </span>
                            <span className="subSW">
                                작은 발걸음이 만드는 큰 행복
                            </span>
                            <span className="subSW">
                                행복은 네 발로 다가옵니다.
                            </span>
                        </div>
                        <div className="bannerWrap">
                            <div className="banner banner01"></div>
                            <div className="banner banner02"></div>
                        </div>
                    </section>

                : 

                 null
            }
            
        </>
    )
};