'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react";
import { useEffect } from "react";

import { Suspense } from "react";
import { titleData } from "./app/data/data";
import ZoomInOut from "./app/component/PinchZoom";

function DetailContent() {
    
    // 쿼리문찾기
    const params = useSearchParams();
    const type = params.get('type');

    // 뒤로가기
    const router = useRouter(); 

    
    // 쿼리문으로 게시판 타입 판별
    const [title, setTitle] = useState(null);

    useEffect(() => {
        if (type) {
          const newTitle = titleData[type];
          setTitle(newTitle); // 이 시점에서 newTitle은 업데이트된 상태입니다.
        }
    }, [type]); // 의존성 배열에 type을 추가


    // 줌인아웃 공고 이미지
    let posterURL = '/sample.png';


    return (
        <>
            <section className="section customPt commonBoardSection meet meetNotice">
                <h3 className="commonBoardTit">
                    {title} <i>!</i>
                </h3>
                <div className="divisionWrap">
                    <div className="divInfo region">
                        서울
                    </div>
                    <div className="divInfo field">
                        카페 / 음식점
                    </div>
                </div>
                <div className="detailDataForm">
                    <div className="bannerSpace spaceWrap">
                        <img src="/userimg_002.png" alt="메인 이미지" />
                    </div>
                    <div className="titleSpace spaceWrap meetTitle">
                        <h3 className="title">
                            배리베리굿 강아지 모임
                        </h3>
                    </div>
                    <div className="userInfoSpace">
                        {/* 모임 방장 */}
                        <div className="profileZone">
                            <img src="/profile.png" alt="프로필" />
                            <span className="nickname">배리베리굿 모임장</span>
                        </div>

                        {/* 좋아요 버튼 */}
                        <button type="button" className="btnLike">
                            <img src="/icon_like2.png" alt="좋아요 버튼" />
                        </button>
                    </div>

                    <div className="utilSpace">
                        <div className="infoZone view">
                            <span className="num">12.1K</span>
                            <span className="tit">조회수</span>
                        </div>
                        <div className="infoZone like">
                            <span className="num">1,121</span>
                            <span className="tit">좋아요</span>
                        </div>
                        <div className="infoZone review">
                            <span className="num">45</span>
                            <span className="tit">댓글</span>
                        </div>
                    </div>


                    <div className="line"></div>

                    {/* 공고 제목 */}
                    <div className="titleSpace spaceWrap meetNoticeTitle">
                        <h3 className="title">
                            이번주 상암동 강아지 모임 합니다!!
                        </h3>
                    </div>
                    {/* 공고 생성일 */}
                    <div className="postInfoZone">
                        <div className="dateWrap">
                            <span className="time">
                                공고 생성일 :
                            </span>
                            <span className="date">
                                2024.07.07
                            </span>
                        </div>
                    </div>

                    {/* 내용 */}
                    <div className="contentSpace">
                        <span className="tit">내용</span>
                        {/* 공고 이미지 */}
                        <div className="posterSpace">
                            <ZoomInOut posterURL={posterURL} />
                        </div>

                        여기가 저희가 만날 상암동 카페입니다. 
                        <br />
                        카카오톡 오픈채팅방에 자세한 얘기 남겨놨으니 알아서 오세요.
                        <br />
                        <br />
                        위치 : 상암동 카페 
                        <br />
                        일시 : 다음주 화요일
                        
                    </div>
                </div>

                <div className="commemtWrap">
                    <h4 className="tit">
                        댓글
                        <span className="num">
                            45
                        </span>
                    </h4>
                    <div className="commentSpace">
                        <div className="userInfo">
                            <img src="/icon_cs.png" alt="프로필" />
                            <span className="nickname">박쩰리</span>
                        </div>
                        <textarea id="inpComment" className="myTTA" placeholder="방금 읽은 콘텐츠 어떠셨나요? 자유롭게 의견을 남겨주세요."></textarea>
                        <span className="textNum">0/500</span>
                    </div>
                    <div className="btnWrap">
                        <button id="commontWrite" className="btn btnStyle01">
                            작성하기
                        </button>
                    </div>
                </div>
            </section>

            {/* 목록으로 */}
            <div className="btnWrap returnList">
                <span onClick={()=> {router.back()}}>
                    <button id="commontWrite" className="btn btnStyle02">
                        돌아가기
                    </button>
                </span>
            </div>
        </>
    )
};

export default function Detail() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DetailContent />
        </Suspense>
    );
}