'use client'
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

/* 분류 : 지역 */
export default function Region() {
    return(
        <Swiper 
            slidesPerView={3.7}
            spaceBetween={6}
            className="mySwiper regionSwiper"
        >
            <SwiperSlide>
                <div className="region division active">
                    서울
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="region division">
                    경기 / 동부
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="region division">
                    경기 / 서부
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="region division">
                    경기 / 남부
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="region division">
                    경기 / 북부
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="region division">
                    충청북도
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="region division">
                    충청남도
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="region division">
                    강원도
                </div>
            </SwiperSlide>
        </Swiper>
    );
};