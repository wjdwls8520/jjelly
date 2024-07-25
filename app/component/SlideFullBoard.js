'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

/* 분류 : 지역 */
function SlideFullBoardContents(props) {

    let pathName = usePathname();

    const regex = /\/([^\/]*)\/detail/;

    const detailRomve = pathName.replace(/^(\/[^\/]+)\/.*/, '$1');
    
    let statement = regex.test(pathName);


    return(
        <>
            {  
                pathName === '/' ? 
                
                <Swiper 
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    speed={800}
                    slidesPerView={1}
                    spaceBetween={20}
                    scrollbar={{
                        hide: false,
                    }}
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    loop={true}
                    modules={[Autoplay, Scrollbar, Pagination, Navigation]}
                    className="mySwiper fullSlideBoard"
                >
                    <SwiperSlide className="fullSlideBoardSlide">
                        <div className="meetPost">
                            <Link className="imgWrap" href={{ pathname: 'meeting' + '/detail', query: 'type=meet' }}>
                                <img className="postImg" src="/userimg_002.png" />
                            </Link>
                            <div className="postContent">
                                <span className="txt">
                                    우리 집의 작은 천사, 너와 함께하는 매일이 선물 같아.
                                </span>
                            </div>
                            <div className="meetProfile">
                                <img className="postProfile" src="/profile2.png" />
                                <span className="meetName">배리배리강아지모임</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="fullSlideBoardSlide">
                        <div className="meetPost">
                            <Link className="imgWrap" href={{ pathname: 'meeting' + '/detail', query: 'type=meet' }}>
                                <img className="postImg" src="/userimg_004.png" />
                            </Link>
                            <div className="postContent">
                                <span className="txt">
                                    우리 집의 작은 천사, 너와 함께하는 매일이 선물 같아.
                                </span>
                            </div>
                            <div className="meetProfile">
                                <img className="postProfile" src="/userimg_006.png" />
                                <span className="meetName">배리배리강아지모임</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="fullSlideBoardSlide">
                        <div className="meetPost">
                            <Link className="imgWrap" href={{ pathname: 'meeting' + '/detail', query: 'type=meet' }}>
                                <img className="postImg" src="/userimg_008.png" />
                            </Link>
                            <div className="postContent">
                                <span className="txt">
                                    우리 집의 작은 천사, 너와 함께하는 매일이 선물 같아.
                                </span>
                            </div>
                            <div className="meetProfile">
                                <img className="postProfile" src="/userimg_011.png" />
                                <span className="meetName">배리배리강아지모임</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="fullSlideBoardSlide">
                        <div className="meetPost">
                            <Link className="imgWrap" href={{ pathname: 'meeting' + '/detail', query: 'type=meet' }}>
                                <img className="postImg" src="/userimg_011.png" />
                            </Link>
                            <div className="postContent">
                                <span className="txt">
                                    우리 집의 작은 천사, 너와 함께하는 매일이 선물 같아.
                                </span>
                            </div>
                            <div className="meetProfile">
                                <img className="postProfile" src="/userimg_009.png" />
                                <span className="meetName">배리배리강아지모임</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="fullSlideBoardSlide">
                        <div className="meetPost">
                            <Link className="imgWrap" href={{ pathname: 'meeting' + '/detail', query: 'type=meet' }}>
                                <img className="postImg" src="/userimg_009.png" />
                            </Link>
                            <div className="postContent">
                                <span className="txt">
                                    우리 집의 작은 천사, 너와 함께하는 매일이 선물 같아.
                                </span>
                            </div>
                            <div className="meetProfile">
                                <img className="postProfile" src="/userimg_007.png" />
                                <span className="meetName">배리배리강아지모임</span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                : 

                statement ?

                    <></>

                    :

                    // 자동슬라이드 + 페이지네이션 + 타이틀
                    <Swiper 
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        speed={800}
                        slidesPerView={1}
                        spaceBetween={20}
                        scrollbar={{
                            hide: false,
                        }}
                        pagination={{
                            type: 'fraction',
                        }}
                        navigation={true}
                        loop={true}
                        modules={[Scrollbar, Pagination, Navigation]}
                        className="mySwiper fullSlideBoard"
                    >
                        <SwiperSlide className="fullSlideBoardSlide">
                            <div className="meetPost">
                                <Link className="imgWrap" href={{ pathname: pathName + '/detail', query: 'type=' + props.type }}>
                                    <img className="postImg" src="/userimg_002.png" />
                                </Link>
                                <div className="postContent">
                                    <span className="txt">
                                        우리 집의 작은 천사, 너와 함께하는 매일이 선물 같아.
                                    </span>
                                </div>
                                <div className="meetProfile">
                                    <img className="postProfile" src="/profile2.png" />
                                    <span className="meetName">배리배리강아지모임</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="fullSlideBoardSlide">
                            <div className="meetPost">
                                <Link className="imgWrap" href={{ pathname: pathName + '/detail', query: 'type=' + props.type }}>
                                    <img className="postImg" src="/userimg_004.png" />
                                </Link>
                                <div className="postContent">
                                    <span className="txt">
                                        우리 집의 작은 천사, 너와 함께하는 매일이 선물 같아.
                                    </span>
                                </div>
                                <div className="meetProfile">
                                    <img className="postProfile" src="/userimg_006.png" />
                                    <span className="meetName">배리배리강아지모임</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="fullSlideBoardSlide">
                            <div className="meetPost">
                                <Link className="imgWrap" href={{ pathname: pathName + '/detail', query: 'type=' + props.type }}>
                                    <img className="postImg" src="/userimg_008.png" />
                                </Link>
                                <div className="postContent">
                                    <span className="txt">
                                        우리 집의 작은 천사, 너와 함께하는 매일이 선물 같아.
                                    </span>
                                </div>
                                <div className="meetProfile">
                                    <img className="postProfile" src="/userimg_011.png" />
                                    <span className="meetName">배리배리강아지모임</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="fullSlideBoardSlide">
                            <div className="meetPost">
                                <Link className="imgWrap" href={{ pathname: pathName + '/detail', query: 'type=' + props.type }}>
                                    <img className="postImg" src="/userimg_011.png" />
                                </Link>
                                <div className="postContent">
                                    <span className="txt">
                                        우리 집의 작은 천사, 너와 함께하는 매일이 선물 같아.
                                    </span>
                                </div>
                                <div className="meetProfile">
                                    <img className="postProfile" src="/userimg_009.png" />
                                    <span className="meetName">배리배리강아지모임</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="fullSlideBoardSlide">
                            <div className="meetPost">
                                <Link className="imgWrap" href={{ pathname: pathName + '/detail', query: 'type=' + props.type }}>
                                    <img className="postImg" src="/userimg_009.png" />
                                </Link>
                                <div className="postContent">
                                    <span className="txt">
                                        우리 집의 작은 천사, 너와 함께하는 매일이 선물 같아.
                                    </span>
                                </div>
                                <div className="meetProfile">
                                    <img className="postProfile" src="/userimg_007.png" />
                                    <span className="meetName">배리배리강아지모임</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

            }
        
        </>
    );
};


export default function SlideFullBoard(props) {
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <SlideFullBoardContents type={props.type} />
        </Suspense>
    )
};
