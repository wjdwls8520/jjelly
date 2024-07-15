'use client'
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

/* 분류 : 지역 */
export default function SquareBoardSlide() {
    return(
        <Swiper 
            slidesPerView={2.16}
            spaceBetween={14}
            className="mySwiper regionSwiper"
        >
            <SwiperSlide className="squareBoardWrapSlide">
                <div className="userPost">
                    <div className="userProfile">
                        <img className="postProfile" src="/profile2.png" />
                    </div>
                    <Link className="imgWrap" href={{ pathname: '/' }}>
                        <img className="postImg" src="/profile.png" />
                    </Link>
                    <div className="postContent">
                        <span className="txt">
                            우리 집의 작은 천사, 너와 함께하는 매일이 선물 같아.
                        </span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="squareBoardWrapSlide">
                <div className="userPost">
                    <div className="userProfile">
                        <img className="postProfile" src="/profile2.png" />
                    </div>
                    <Link className="imgWrap" href={{ pathname: '/' }}>
                        <img className="postImg" src="/profile.png" />
                    </Link>
                    <div className="postContent">
                        <span className="txt">
                            우리 집의 작은 천사, 너와 함께하는 매일이 선물 같아.
                        </span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="squareBoardWrapSlide">
                <div className="userPost">
                    <div className="userProfile">
                        <img className="postProfile" src="/profile2.png" />
                    </div>
                    <Link className="imgWrap" href={{ pathname: '/' }}>
                        <img className="postImg" src="/profile.png" />
                    </Link>
                    <div className="postContent">
                        <span className="txt">
                            우리 집의 작은 천사, 너와 함께하는 매일이 선물 같아.
                        </span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="squareBoardWrapSlide">
                <div className="userPost">
                    <div className="userProfile">
                        <img className="postProfile" src="/profile2.png" />
                    </div>
                    <Link className="imgWrap" href={{ pathname: '/' }}>
                        <img className="postImg" src="/profile.png" />
                    </Link>
                    <div className="postContent">
                        <span className="txt">
                            우리 집의 작은 천사, 너와 함께하는 매일이 선물 같아.
                        </span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="squareBoardWrapSlide">
                <div className="userPost">
                    <div className="userProfile">
                        <img className="postProfile" src="/profile2.png" />
                    </div>
                    <Link className="imgWrap" href={{ pathname: '/' }}>
                        <img className="postImg" src="/profile.png" />
                    </Link>
                    <div className="postContent">
                        <span className="txt">
                            우리 집의 작은 천사, 너와 함께하는 매일이 선물 같아.
                        </span>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};