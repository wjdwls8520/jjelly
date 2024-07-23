'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react";
import { useEffect } from "react";

import { Suspense } from "react";
import titleData from "@/app/data/data";
import MeetNotice from "@/app/component/MeetNotice";
import SquareBoardSlide from "@/app/component/SquareBoardSlide";

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


    const navigateToPage = () => {
        router.push('/meetNotice/create?type=meetNotice');  // '/target-page'로 페이지 이동
    };

    let [btnChange, setBtnChange] = useState(false);
    let btnApply = ()=> {

        if ( btnChange ) {
            // 공고만들기
            navigateToPage();
        } else {
            alert('가입신청이 완료되었습니다.');
            setBtnChange(true);
        };
    };  


    return (
        <>
            <section className="section customPt commonBoardSection meet">
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
                        <button type="button" className={btnChange ? 'btnApply noticeCreate' : 'btnApply meetJoin'} onClick={btnApply}>{btnChange ? '공고 만들기' : '가입 신청하기'}</button>
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
                            소개
                        </li>
                        <li>
                            공고 
                        </li>
                        <li>
                            리뷰
                        </li>
                    </ul>

                    <div className="line"></div>

                    <div className="contentSpace">
                        <span className="tit mb30">소개</span>
                            저희는 강아지를 키우는 사람들의 모임입니다.
                            <br />
                            <br />
                            <br />
                            아래 방법으로 새로운 오픈채팅방을 만들 수 있습니다.
                            <br />
                            <br />
                            1) 카카오톡 - 오픈채팅탭 - 우상단 채팅 만들기 버튼 누르기
                            <br />
                            <br />
                            2) 우상단 MY 버튼 - 나의 채팅방 영역의 만들기 버튼 누르기
                            <br />
                            <br />
                            채팅방의 이름과 #키워드, 사용할 프로필을 선택하여 오픈채팅 대화방 링크를 생성하고, 생성된 링크를 블로그나 카페 등에 공유해 보세요.
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
            <section className="section commonBoardSection anotherBoardList">
                <h3 className="commonBoardTit">
                인기 {title}
                    <span className="seeMore">
                        더 보기
                    </span>
                </h3>
                <SquareBoardSlide type={type} />
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