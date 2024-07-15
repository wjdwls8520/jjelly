'use client'
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

/* 분류 : 지역 */
export default function Field() {
    return(
        <Swiper 
            slidesPerView={3.3}
            spaceBetween={6}
            className="mySwiper fieldSwiper"
        >
            <SwiperSlide>
                <div className="field division active">
                    카페 / 음식점
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="field division">
                    호텔 / 캠핑장
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="field division">
                    산책 / 활동
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="field division">
                    공부
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="field division">
                    쇼핑
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="field division">
                    건강 / 병원
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="field division">
                    커플 / 소개팅
                </div>
            </SwiperSlide>
        </Swiper>
    );
};