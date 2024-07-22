'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react";
import { useEffect } from "react";

import { Suspense } from "react";
import titleData from "@/app/data/data";
import Meeting from "@/app/meetNotice/page";
import MeetNotice from "@/app/component/MeetNotice";

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

    return (
        <>
            <section className="section pt60 commonBoardSection meet">
                <h3 className="commonBoardTit">
                    {title} <i>!</i>
                </h3>
                <div className="detailDataForm">
                    <div className="bannerSpace spaceWrap">
                        <img src="/userimg_002.png" alt="메인 이미지" />
                    </div>
                    <div className="titleSpace spaceWrap">
                        <h3 className="title">
                            배리베리굿 모임
                        </h3>
                    </div>
                    <div className="userInfoSpace">
                        {/* 모임 방장 */}
                        <div className="profileZone">
                            <img src="/profile.png" alt="프로필" />
                            <span className="nickname">박쩰리</span>
                        </div>
                        <div className="postInfoZone">
                            <div className="dateWrap">
                                <span className="time">
                                    모임 생성일 :
                                </span>
                                <span className="date">
                                    2024.07.07
                                </span>
                            </div>
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
                            <span className="tit">리뷰</span>
                        </div>
                    </div>

                    <div className="membershipApply">
                        <button type="button" className="btnApply">가입 신청하기</button>
                        <button type="button" className="btnShare">
                            <img src="/icon_share.png" alt="공유" />
                        </button>
                    </div>

                    {/* 모임 탭 카테고리 */}
                    <ul className="contentCategory">
                        <li className="active">
                            홈
                        </li>
                        <li>
                            공고 
                        </li>
                        <li>
                            소개
                        </li>
                        <li>
                            리뷰
                        </li>
                    </ul>

                    <div className="line"></div>

                    <div className="contentSpace">
                        <span className="tit">소개</span>
                        저희는 강아지를 키우는 사람들의 모임입니다.
                    </div>
                </div>

                <div className="noticeWrap">
                    <h4 className="tit">
                        공고
                    </h4>
                    <MeetNotice type={type} />
                </div>

                <div className="commemtWrap">
                    <h4 className="tit">
                        리뷰
                        <span className="num">
                            4.5
                        </span>
                        <span className="rating">
                            ★★★★☆
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

            {/* anotherBoardList */}
            {/* <section className="section commonBoardSection anotherBoardList">
                <h3 className="commonBoardTit">
                핫 딜 <i>!</i>
                    <span className="seeMore">
                        더 보기
                    </span>
                </h3>
                <CommonBoard type={type} />
            </section> */}

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