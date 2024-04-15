'use client'
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function HotMeetPost() {
    return(
        <div className="hotMeet">
            {/* 핫 모임 */}
            <Swiper 
                slidesPerView={1.8}
                spaceBetween={30}
                className="hotMeetPost"
            >
                <SwiperSlide>
                    <div className="userPost">
                        <div className="userProfile">
                            <img className="postProfile" src='/profile2.png' /> 
                        </div>
                        <Link href={{ pathname: '/' }}>
                            <img className="postImg" src='/profile.png' /> 
                        </Link>
                        <div className="postContent">
                            <span className="txt">
                                오늘도 몰랑이와 산책을 떠다는 강아지는 맛있는 쩰리를 먹습니다. 
                                강아지는 맛있는 쩰리를 먹습니다.
                                강아지는 맛있는 쩰리를 먹습니다.
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="userPost">
                        <div className="userProfile">
                            <img className="postProfile" src='/profile2.png' /> 
                        </div>
                        <Link href={{ pathname: '/' }}>
                            <img className="postImg" src='/profile.png' /> 
                        </Link>
                        <div className="postContent">
                            <span className="txt">
                                오늘도 몰랑이와 산책을 떠다는 강아지는 맛있는 쩰리를 먹습니다. 
                                강아지는 맛있는 쩰리를 먹습니다.
                                강아지는 맛있는 쩰리를 먹습니다.
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="userPost">
                        <div className="userProfile">
                            <img className="postProfile" src='/profile2.png' /> 
                        </div>
                        <Link href={{ pathname: '/' }}>
                            <img className="postImg" src='/profile.png' /> 
                        </Link>
                        <div className="postContent">
                            <span className="txt">
                                오늘도 몰랑이와 산책을 떠다는 강아지는 맛있는 쩰리를 먹습니다. 
                                강아지는 맛있는 쩰리를 먹습니다.
                                강아지는 맛있는 쩰리를 먹습니다.
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="userPost">
                        <div className="userProfile">
                            <img className="postProfile" src='/profile2.png' /> 
                        </div>
                        <Link href={{ pathname: '/' }}>
                            <img className="postImg" src='/profile.png' /> 
                        </Link>
                        <div className="postContent">
                            <span className="txt">
                                오늘도 몰랑이와 산책을 떠다는 강아지는 맛있는 쩰리를 먹습니다. 
                                강아지는 맛있는 쩰리를 먹습니다.
                                강아지는 맛있는 쩰리를 먹습니다.
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};