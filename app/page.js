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
                            <Link className="imgWrap" href={{ pathname: '/news' }}>
                                <img src="/news.png" alt="모임" />
                                쩰리 소식
                            </Link>
                        </li>
                        <li>
                            <Link className="imgWrap" href={{ pathname: '/meeting' }}>
                                <img src="/group.png" alt="모임" />
                                쩰리 모임
                            </Link>
                        </li>
                        <li>
                            <Link className="imgWrap" href={{ pathname: '/meetNotice' }}>
                                <img src="/map.png" alt="모임" />
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
                            <Link className="imgWrap" href={{ pathname: '/hotDeal' }}>
                                <img src="/bird.png" alt="핫딜" />
                                핫딜
                            </Link>
                        </li>
                        <li>
                            <Link className="imgWrap" href={{ pathname: '/freeBoard' }}>
                                <img src="/fish2.png" alt="자유게시판" />
                                자유게시판
                            </Link>
                        </li>
                        <li>
                            <Link className="imgWrap" href={{ pathname: '/volunteer' }}>
                                <img src="/dog_bone.png" alt="봉사" />
                                봉사
                            </Link> 
                        </li>
                        <li>
                            <Link className="imgWrap" href={{ pathname: '/dogBoard' }}>
                                <img src="/dog.png" alt="강아지게시판" />
                                멍이 게시판
                            </Link>
                        </li>
                        <li>
                            <Link className="imgWrap" href={{ pathname: '/catBoard' }}>
                                <img src="/cat.png" alt="고양이게시판" />
                                냥이 게시판
                            </Link>
                        </li>
                        <li>
                            <Link className="imgWrap" href={{ pathname: '/allBoard' }}>
                                <img src="/paws.png" alt="모두게시판" />
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
