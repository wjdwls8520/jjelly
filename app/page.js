import Link from "next/link";
import CommonBoard from "./component/CommonBoard";
import SquareBoard from "./component/SquareBoard";


export default function Home() {
    return (
        <>
            <section className="section section01">
                <div className="sloganWrap">
                    <span className="subSW">
                        사랑과 추억을 나누는,
                    </span>
                    <span className="mainSW">
                        반려동물 이야기
                    </span>
                    <span className="subSW">
                        작은 발걸음이 만드는 큰 행복
                    </span>
                    <span className="subSW">
                        행복은 네 발로 다가옵니다.
                    </span>
                </div>
                <div className="bannerWrap">
                    <div className="banner banner01"></div>
                    <div className="banner banner02"></div>
                </div>
            </section>

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
                            <Link className="imgWrap" href={{ pathname: '/map' }}>
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
                <h3 className="commonBoardTit">
                    이 주의 인기 소식 <i>!</i>
                </h3>
                <CommonBoard />
            </section>

            <section className="section section04 squareBoardSection">
                <h3 className="commonBoardTit">
                    Best of Best <i>!</i>
                </h3>
                <SquareBoard />
            </section>
        </>
    );
}
