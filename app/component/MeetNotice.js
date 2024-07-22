'use client' 

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MeetNotice(props) {

    let pathName = usePathname();
    console.log(pathName)

    return (
        <>
            {
                pathName === '/meeting/detail' ? 

                    // 모임 디테일
                    <ul className="commonBoardListWrap meetNotice">
                        <li>
                            <Link href={{ pathname: '/meetNotice/detail' , query: 'type=meetNotice' }}>
                                <div className="post commonPost">
                                    <span className="imgBox">
                                        <img className="boardImg" src="/sample.png" />
                                    </span>
                                    <div className="content">
                                        <span className="title titleLine2">
                                            이번주 상암동 강아지 모임 합니다!!
                                        </span>
                                        <div className="userInfo">
                                            <span className="time">12:12</span>
                                            <span className="check">조회 6</span>
                                            <span className="coment">댓글 6</span>

                                            <span className="noticeContent">

                                                이번 주 토요일 상암동 카페에서 강아지 모임을 하기 위해 카페를 전부 빌렸습니다. 꺄르륵 
                                                많은 참여 부탁드려요 ㅎㅎ ~

                                            </span>

                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={{ pathname: '/meetNotice/detail' , query: 'type=meetNotice' }}>
                                <div className="post commonPost">
                                    <div className="content">
                                        <span className="title titleLine2">
                                            [내돈내산] 냥이와 함께하는 행복한 산책 코스 추천!
                                        </span>
                                        <div className="userInfo">
                                            <span className="time">12:12</span>
                                            <span className="check">조회 6</span>
                                            <span className="coment">댓글 6</span>

                                            <span className="noticeContent">

                                            고양이는 조용히 다가와 마음을 어루만진다.
                                            그 눈빛엔 우주와 같은 깊이가 담겨 있다.
                                            고양이와 함께라면 매일이 특별하다.

                                            </span>

                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                
                : 

                    // 공고
                    <ul className="commonBoardListWrap meetNotice">
                        <li>
                            <Link href={{ pathname: '/meetNotice/detail' , query: 'type=meetNotice' }}>
                                <div className="post commonPost">
                                    <span className="imgBox">
                                        <img className="boardImg" src="/sample.png" />
                                    </span>
                                    <div className="content">
                                        <span className="title titleLine2">
                                            이번주 상암동 강아지 모임 합니다!!
                                        </span>
                                        <div className="userInfo">
                                            <span className="time">12:12</span>
                                            <span className="check">조회 6</span>
                                            <span className="coment">댓글 6</span>

                                            <span className="noticeContent">

                                                이번 주 토요일 상암동 카페에서 강아지 모임을 하기 위해 카페를 전부 빌렸습니다. 꺄르륵 
                                                많은 참여 부탁드려요 ㅎㅎ ~

                                            </span>

                                            <span className="groupName">
                                                <img className="groupProfile" src="/dog.png" />
                                                배리배리 강아지 모임
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={{ pathname: '/meetNotice/detail' , query: 'type=meetNotice' }}>
                                <div className="post commonPost">
                                    <div className="content">
                                        <span className="title titleLine2">
                                            [내돈내산] 냥이와 함께하는 행복한 산책 코스 추천!
                                        </span>
                                        <div className="userInfo">
                                            <span className="time">12:12</span>
                                            <span className="check">조회 6</span>
                                            <span className="coment">댓글 6</span>

                                            <span className="noticeContent">

                                            고양이는 조용히 다가와 마음을 어루만진다.
                                            그 눈빛엔 우주와 같은 깊이가 담겨 있다.
                                            고양이와 함께라면 매일이 특별하다.

                                            </span>

                                            <span className="groupName">
                                                <img className="groupProfile" src="/cat.png" />
                                                냥사모
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
            }
        </>
    )

};
