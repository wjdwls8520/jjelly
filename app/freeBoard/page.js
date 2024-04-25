'use client'

import Link from "next/link";

export default function FreeBoard() {

    let testArr = [];
    for (let i = 0; i < 8; i++) {
        testArr.push('test');
    }

    return (
        <div id="section" className="freeBoardSection">
                        
                <div className="fieldWrap">
                    <select className="field">
                        <option>분류</option>
                        <option>일상에서</option>
                        <option>동물 이야기</option>
                        <option>잡담</option>
                    </select>
                </div>

                {
                    testArr.map((a, i)=> {
                        return (
                            <div className="post commonPost">
                                <div className="content">
                                    <span className="title">
                                        <Link href={{ pathname: '/freeBoard', query: 'detail' }}>
                                            <span className="subject">[일상에서]</span>
                                            오늘은 스터디카페에 갔다왔어요. 기쁘며 얼마나 아름다우냐? 이것을
                                        </Link>
                                    </span> 
                                    <div className="userInfo">
                                        <span className="user">명젤리</span>
                                        <span className="time">12:12</span>
                                        <span className="check">조회 6</span>
                                    </div>
                                </div>

                                <div className="util">
                                    <span className="imgBox">
                                        <Link href={{ pathname: '/freeBoard', query: 'detail' }}>
                                            <img className="boardImg" src='/profile2.png' />   
                                        </Link>
                                    </span>
                                    <span className="commentBox">
                                        <Link href={{ pathname: '/freeBoard', query: 'detail&comment' }}>
                                            <span className="conmmentNum">
                                                3
                                            </span>
                                            <span >
                                                댓글
                                            </span>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
          
        </div>
    );
}
