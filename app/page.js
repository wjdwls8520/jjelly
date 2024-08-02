"use client"

import Link from "next/link";
import CommonBoard from "./component/CommonBoard";
import BestStar from "./component/BestStar";
import SquareBoardSlide from "./component/SquareBoardSlide";
import { userInfo } from "../utils/supabase/lib";
import { useEffect, useState } from "react";
export default function Home() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const userData = await userInfo(); // 사용자 정보를 비동기적으로 가져옵니다.
                console.log('Base URL:', process.env.NEXT_PUBLIC_BASE_URL);
                setUser(userData);
            } catch (error) {
                console.error("Failed to fetch user info:", error);
            }
        };

        fetchUserInfo();
    }, []); // 빈 배열은 컴포넌트가 처음 렌더링될 때만 호출됩니다.

    return (
        <>

            <section className="section section02">
                <div className="boardListWrap">
                    <h3 className="boardTit">
                        <span className="orange">JJelly contents</span>
                    </h3>
                    {/* 쩰리 소식, 모임, 맵 */}
                    <ul className="boardList">
                        <li>
                            <Link className="imgWrap" href={{ pathname: '/board', query: 'type=newsBd' }}>
                                <img src="/character_news.png" alt="소식" />
                                쩰리 소식
                            </Link>
                        </li>
                        <li>
                            <Link className="imgWrap" href={{ pathname: '/meeting', query: 'type=meet' }}>
                                <img src="/character_meet.png" alt="모임" />
                                쩰리 모임
                            </Link>
                        </li>
                        <li>
                            <Link className="imgWrap" href={{ pathname: '/map', query: 'type=map' }}>
                                <img src="/character_map.png" alt="맵" />
                                쩰리 맵
                            </Link>
                        </li>
                    </ul>
                    <h3 className="boardTit">
                        <span>
                            마음을 이어주는 반려동물...
                        </span>
                        사랑이 가득한 게시판
                    </h3>
                    {/* 고통 게시판 */}
                    <ul className="boardList">
                        <li>
                            <Link className="imgWrap" href={{ pathname: '/board', query: 'type=hotBd' }}>
                                <img src="/character_hotdeal.png" alt="핫딜" />
                                핫딜
                            </Link>
                        </li>
                        <li>
                            <Link className="imgWrap" href={{ pathname: '/board', query: 'type=freeBd' }}>
                                <img src="/character_free.png" alt="자유게시판" />
                                자유게시판
                            </Link>
                        </li>
                        <li>
                            <Link className="imgWrap" href={{ pathname: '/board', query: 'type=volunteerBd' }}>
                                <img src="/volunteer.png" alt="봉사" />
                                봉사
                            </Link> 
                        </li>
                        <li>
                            <Link className="imgWrap" href={{ pathname: '/board', query: 'type=dogBd' }}>
                                <img src="/character_dog.png" alt="강아지게시판" />
                                멍이 게시판
                            </Link>
                        </li>
                        <li>
                            <Link className="imgWrap" href={{ pathname: '/board', query: 'type=catBd' }}>
                                <img src="/character_cat.png" alt="고양이게시판" />
                                냥이 게시판
                            </Link>
                        </li>
                        <li>
                            <Link className="imgWrap" href={{ pathname: '/board', query: 'type=allBd' }}>
                                <img src="/character_all.png" alt="모두게시판" />
                                모두 게시판
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="section section03 commonBoardSection">
                <h3 className="commonBoardTit grayColor">
                    이 주의 인기 소식
                </h3>
                <CommonBoard />
            </section>

            <section className="section section04 bestStar">
                <h3 className="commonBoardTit grayColor">
                    쩰리 인기의 전당 TOP3
                </h3>
                <BestStar />
            </section>

            <section className="section section05 squareBoardSection">
                <h3 className="commonBoardTit mt60 grayColor">
                    이 주의 인기 공고
                </h3>
                <SquareBoardSlide />
            </section>

           
        </>
    );
}
