'use client'

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";


function BestStarContent() {
    return (
    <div className="popularWrap">
        <div className="popularPost">
            <div className="popularInfo">
                <Link href={{ pathname: '/board', query: 'type=newsBd' }}>
                    <div className="profileImg">
                        <img src="/userimg_007.png" alt="인기 스타 프로필" />
                    </div>
                    <div className="profileName">
                        흰색 줄무늬 배리
                    </div>
                </Link>
                <div className="subscribeWrap">
                    <button className="btnSubscribe">
                        <img src="/icon_alarm.png" alt="알림" /> 
                        구독
                    </button>
                </div>
            </div>
            <div className="popularInfo">
                <span className="type">
                    고양이
                </span>
                <span className="subscribe">
                    <span className="num">1,085</span>명이 구독 중입니다.
                </span>
            </div>
            <div className="popularInfo">
                <Link href={{ pathname: '/board', query: 'type=newsBd' }}>
                    <div className="mainImg">
                        <img src="/userimg_009.png" alt="인기 스타 이미지" />
                    </div>
                </Link>
            </div>
            <div className="popularInfo">
                <span className="introduce">
                    작지만 가치 있는 변화를 이끌어내는 사이를 만들기 위해 노력하고 있습니다.
                </span>
            </div>
        </div>
        
        <div className="popularPost">
            <div className="popularInfo">
                <Link href={{ pathname: '/board', query: 'type=newsBd' }}>
                    <div className="profileImg">
                        <img src="/userimg_002.png" alt="인기 스타 프로필" />
                    </div>
                    <div className="profileName">
                        어쩔TV 멍이
                    </div>
                </Link>
                <div className="subscribeWrap">
                    <button className="btnSubscribe active">
                        <img src="/icon_alarm.png" alt="알림" /> 
                        구독중...
                    </button>
                </div>
            </div>
            <div className="popularInfo">
                <span className="type">
                    멍멍이
                </span>
                <span className="subscribe">
                    <span className="num">121</span>명이 구독 중입니다.
                </span>
            </div>
            <div className="popularInfo">
                <Link href={{ pathname: '/board', query: 'type=newsBd' }}>
                    <div className="mainImg">
                        <img src="/userimg_005.png" alt="인기 스타 이미지" />
                    </div>
                </Link>
            </div>
            <div className="popularInfo">
                <span className="introduce">
                    작지만 가치 있는 변화를 이끌어내는 사이를 만들기 위해 노력하고 있습니다.
                </span>
            </div>
        </div>

        <div className="popularPost">
            <div className="popularInfo">
                <Link href={{ pathname: '/board', query: 'type=newsBd' }}>
                    <div className="profileImg">
                        <img src="/profile.png" alt="인기 스타 프로필" />
                    </div>
                    <div className="profileName">
                        갈매기쨩
                    </div>
                </Link>
                <div className="subscribeWrap">
                    <button className="btnSubscribe">
                        <img src="/icon_alarm.png" alt="알림" /> 
                        구독
                    </button>
                </div>
            </div>
            <div className="popularInfo">
                <span className="type">
                    새
                </span>
                <span className="subscribe">
                    <span className="num">87</span>명이 구독 중입니다.
                </span>
            </div>
            <div className="popularInfo">
                <Link href={{ pathname: '/board', query: 'type=newsBd' }}>
                    <div className="mainImg">
                        <img src="/userimg_012.png" alt="인기 스타 이미지" />
                    </div>
                </Link>
            </div>
            <div className="popularInfo">
                <span className="introduce">
                    꼬우면 연락하던지 ㅋㅋ 꼬꼬댁 하면서 오던지 ㅋㅋㅋ ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
                </span>
            </div>
        </div>
    </div>
    )
};

function BestStarContentSlide() {
    return (
        <Swiper
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            speed={800}
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            modules={[Autoplay]}
            className="mySwiper popularWrap"
            breakpoints={{
                320:{
                    slidesPerView:1          
                },
                520:{
                    slidesPerView:1.4
                },
                768:{
                    slidesPerView:2.2
                },
                1024:{
                    slidesPerView:2.6
                },
                1248: {
                    slidesPerView:2.8
                },
                1400: {
                    slidesPerView:1.8
                },
                1620: {
                    slidesPerView:2.2
                }
            }}
        >
            <SwiperSlide className="popularPost firstSlide">
                <div className="popularInfo">
                    <Link href={{ pathname: '/board', query: 'type=newsBd' }}>
                        <div className="profileImg">
                            <img src="/userimg_007.png" alt="인기 스타 프로필" />
                        </div>
                        <div className="profileName">
                            흰색 줄무늬 배리
                        </div>
                    </Link>
                    <div className="subscribeWrap">
                        <button className="btnSubscribe">
                            <img src="/icon_alarm.png" alt="알림" /> 
                            구독
                        </button>
                    </div>
                </div>
                <div className="popularInfo">
                    <span className="type">
                        고양이
                    </span>
                    <span className="subscribe">
                        <span className="num">1,085</span>명이 구독 중입니다.
                    </span>
                </div>
                <div className="popularInfo">
                    <Link href={{ pathname: '/board', query: 'type=newsBd' }}>
                        <div className="mainImg">
                            <img src="/userimg_009.png" alt="인기 스타 이미지" />
                        </div>
                    </Link>
                </div>
                <div className="popularInfo">
                    <span className="introduce">
                        작지만 가치 있는 변화를 이끌어내는 사이를 만들기 위해 노력하고 있습니다.
                    </span>
                </div>
            </SwiperSlide>

            <SwiperSlide className="popularPost secSlide">
                <div className="popularInfo">
                    <Link href={{ pathname: '/board', query: 'type=newsBd' }}>
                        <div className="profileImg">
                            <img src="/userimg_002.png" alt="인기 스타 프로필" />
                        </div>
                        <div className="profileName">
                            어쩔TV 멍이
                        </div>
                    </Link>
                    <div className="subscribeWrap">
                        <button className="btnSubscribe active">
                            <img src="/icon_alarm.png" alt="알림" /> 
                            구독중...
                        </button>
                    </div>
                </div>
                <div className="popularInfo">
                    <span className="type">
                        멍멍이
                    </span>
                    <span className="subscribe">
                        <span className="num">121</span>명이 구독 중입니다.
                    </span>
                </div>
                <div className="popularInfo">
                    <Link href={{ pathname: '/board', query: 'type=newsBd' }}>
                        <div className="mainImg">
                            <img src="/userimg_005.png" alt="인기 스타 이미지" />
                        </div>
                    </Link>
                </div>
                <div className="popularInfo">
                    <span className="introduce">
                        작지만 가치 있는 변화를 이끌어내는 사이를 만들기 위해 노력하고 있습니다.
                    </span>
                </div>
            </SwiperSlide>

            <SwiperSlide className="popularPost thdSlide">
                <div className="popularInfo">
                    <Link href={{ pathname: '/board', query: 'type=newsBd' }}>
                        <div className="profileImg">
                            <img src="/profile.png" alt="인기 스타 프로필" />
                        </div>
                        <div className="profileName">
                            갈매기쨩
                        </div>
                    </Link>
                    <div className="subscribeWrap">
                        <button className="btnSubscribe">
                            <img src="/icon_alarm.png" alt="알림" /> 
                            구독
                        </button>
                    </div>
                </div>
                <div className="popularInfo">
                    <span className="type">
                        새
                    </span>
                    <span className="subscribe">
                        <span className="num">87</span>명이 구독 중입니다.
                    </span>
                </div>
                <div className="popularInfo">
                    <Link href={{ pathname: '/board', query: 'type=newsBd' }}>
                        <div className="mainImg">
                            <img src="/userimg_012.png" alt="인기 스타 이미지" />
                        </div>
                    </Link>
                </div>
                <div className="popularInfo">
                    <span className="introduce">
                        꼬우면 연락하던지 ㅋㅋ 꼬꼬댁 하면서 오던지 ㅋㅋㅋ ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
                    </span>
                </div>
            </SwiperSlide>
        </Swiper>
    )
};

export default function BestStar() {
    return (
        <BestStarContentSlide />
    )
};


























