'use client'

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { usePathname } from "next/navigation";

/* 분류 : 지역 */
export default function SlideFullBoard(props) {

    let pathName = usePathname();

    const regex = /\/([^\/]*)\/detail/;

    const detailRomve = pathName.replace(/^(\/[^\/]+)\/.*/, '$1');
    
    let statement = regex.test(pathName);


    return(
        <>
            {
                statement ?

                    <></>

                : 

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
                            <Link className="imgWrap" href={{ pathname: pathName + '/detail', query: 'type=' + props.type }}>
                                <img className="postImg" src="/userimg_002.png" />
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
                                <img className="postProfile" src="/userimg_012.png" />
                            </div>
                            <Link className="imgWrap" href={{ pathname: pathName + '/detail', query: 'type=' + props.type }}>
                                <img className="postImg" src="/userimg_003.png" />
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
                                <img className="postProfile" src="/userimg_008.png" />
                            </div>
                            <Link className="imgWrap" href={{ pathname: pathName + '/detail', query: 'type=' + props.type }}>
                                <img className="postImg" src="/userimg_004.png" />
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
                                <img className="postProfile" src="/userimg_009.png" />
                            </div>
                            <Link className="imgWrap" href={{ pathname: pathName + '/detail', query: 'type=' + props.type }}>
                                <img className="postImg" src="/userimg_005.png" />
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
                                <img className="postProfile" src="/profile.png" />
                            </div>
                            <Link className="imgWrap" href={{ pathname: pathName + '/detail', query: 'type=' + props.type }}>
                                <img className="postImg" src="/userimg_011.png" />
                            </Link>
                            <div className="postContent">
                                <span className="txt">
                                    우리 집의 작은 천사, 너와 함께하는 매일이 선물 같아.
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                   </Swiper>

            }
        
        </>
    );
};
