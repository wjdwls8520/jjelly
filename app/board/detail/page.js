'use client'

import CommonBoard from "@/app/component/CommonBoard";
import titleData from "@/app/data/data";
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react";
import { useEffect } from "react";

import { Suspense } from "react";


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
            <section className="section pt60 commonBoardSection">
                <h3 className="commonBoardTit">
                {title} <i>!</i>
                </h3>
                <div className="detailDataForm">
                    <div className="titleSpace spaceWrap">
                        <h3 className="title">
                            갤럭시 노트 울라리 특가 581,000원 빨리 사러가자 애들아!!
                        </h3>
                    </div>
                    <div className="userInfoSpace">
                        <div className="profileZone">
                            <img src="/profile.png" alt="프로필" />
                            <span className="nickname">박쩰리</span>
                        </div>
                        <div className="postInfoZone">
                            <div className="dateWrap">
                                <span className="time">
                                    13분 전
                                </span>
                                <span className="date">
                                    2024.07.07
                                </span>
                            </div>
                            <div className="utilWrap">
                                <span className="view">
                                    <img src="/icon_view.png" alt="조회수" /> 
                                    <span className="num">3,687</span>
                                </span> 
                                <span className="like">
                                    <img src="/icon_like.png" alt="좋아요" /> 
                                    <span className="num">1,107</span>
                                </span> 
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="contentSpace">
                        모르는 사람을 어딘가로 데려가려고 한다. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure distinctio cupiditate consequuntur error aliquam non explicabo dolore nemo ab. Fugit reiciendis dolore vel nesciunt fuga error vero laudantium accusamus quis.
                        모르는 사람을 어딘가로 데려가려고 한다. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure distinctio cupiditate consequuntur error aliquam non explicabo dolore nemo ab. Fugit reiciendis dolore vel nesciunt fuga error vero laudantium accusamus quis.
                        <br />
                        <br />
                        모르는 사람을 어딘가로 데려가려고 한다. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure distinctio cupiditate consequuntur error aliquam non explicabo dolore nemo ab. Fugit reiciendis dolore vel nesciunt fuga error vero laudantium accusamus quis.
                        모르는 사람을 어딘가로 데려가려고 한다. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure distinctio cupiditate consequuntur error aliquam non explicabo dolore nemo ab. Fugit reiciendis dolore vel nesciunt fuga error vero laudantium accusamus quis.
                    </div>
                </div>
                <div className="bottomNav">
                    <div className="bUtilWrap">
                        <div className="likeWrap">
                            <img src="/icon_like2.png" alt="좋아요" />
                            <span className="num">6</span>
                        </div>
                        <div className="commentWrap">
                            <img src="/icon_comment.png" alt="댓글" />
                            <span className="num">6</span>
                        </div>
                    </div>
                    <div className="bUtilWrap">
                        <div className="favWrap">
                            <img src="/icon_fav.png" alt="즐겨찾기" />
                        </div>
                        <div className="shareWrap">
                            <img src="/icon_share.png" alt="공유" />
                        </div>
                    </div>
                </div>
                <div className="commemtWrap">
                    <h4 className="tit">
                        댓글
                        <span className="num">
                            0
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
                핫 딜 <i>!</i>
                    <span className="seeMore">
                        더 보기
                    </span>
                </h3>
                <CommonBoard type={type} />
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