'use client' 

import Link from "next/link";

export default function MeetNotice(props) {

    return (

        <ul className="commonBoardListWrap">
            <li>
                <Link href={{ pathname: '/meetNotice/detail' , query: 'type=meetNotice' }}>
                    <div className="post commonPost style2">
                        <div className="content">
                            <span className="title titleLine2">
                                [내돈내산] 강아지와 함께하는 행복한 산책 코스 추천!
                            </span>
                            <div className="userInfo">
                                <span className="user">명젤리</span>
                                <span className="time">12:12</span>
                                <span className="check">조회 6</span>
                            </div>
                        </div>
                        <span className="imgBox">
                            <img className="boardImg" src="/profile.png" />
                        </span>
                        <div className="util">
                            <span className="commentBox">
                                <span className="aTag" href={{ pathname: '/meetNotice/detail' , query: 'type=meetNotice'  }}>
                                    <span className="conmmentNum">3</span>
                                    <span>댓글</span>
                                </span>
                            </span>
                        </div>
                    </div>
                </Link>
            </li>
            <li>
                <Link href={{ pathname: '/meetNotice/detail' , query: 'type=meetNotice' }}>
                    <div className="post commonPost style3">
                        <div className="content">
                            <span className="title titleLine2">
                                "고양이의 마음을 사로잡는 새로운 장난감 출시!" 오늘은 스터디카페에 갔다왔어요. 기쁘며 얼마나 아름다우냐? 이것을
                            </span>
                            <div className="userInfo">
                                <span className="user">명젤리</span>
                                <span className="time">12:12</span>
                                <span className="check">조회 6</span>
                            </div>
                        </div>
                        <div className="util">
                            <span className="commentBox">
                                <span className="aTag" href={{ pathname: '/meetNotice/detail' , query: 'type=meetNotice' }}>
                                    <span className="conmmentNum">3</span>
                                    <span>댓글</span>
                                </span>
                            </span>
                        </div>
                    </div>
                </Link>
            </li>
        </ul>
    )

};
