'use client'

import Link from "next/link";

export default function FreeBoard() {

    let testArr = [];
    for (let i = 0; i < 8; i++) {
        testArr.push('test');
    }

    return (
        <div id="section" className="freeBoardSection">

            <ul className="tabCategory">
                <li className="meet active">
                    <Link href={{ pathname: '/news' }}>
                        뉴스
                    </Link>
                </li>
                <li className="meetNotice">
                    <Link href={{ pathname: '/newsJjelly' }}>
                        젤리 소식
                    </Link>
                </li>
            </ul>

            {
                testArr.map((a, i)=> {
                    return (
                        <div className="post commonPost style2">
                            <span className="imgBox">
                                <Link href={{ pathname: '/freeBoard', query: 'detail' }}>
                                    <img className="boardImg" src='/profile.png' />   
                                </Link>
                            </span>
                                

                            <div className="content">
                                    <Link href={{ pathname: '/freeBoard', query: 'detail' }}>
                                        <span className="title titleLine1">
                                            [구독 전략 릴레이 인터뷰 ⑨] 백수진·이효석 ‘캣챠’ 공동대표… “길고양이 오해 바로잡고 ‘공생’ 위한 솔루션 만들고파” 
                                        </span> 
                                        <div className="userInfo">
                                            <span className="txt">“길고양이는 인간 마을 공동체의 한 축이다. 고대시대부터 함께 해왔던 마을의 동물이다. 인간이 곡식을 저장하면서 쥐가 생기자 고양이를 마을에 풀어 문제를 해결했다. 그러나 도시화가 진행되면서부터 삶의 터전을 빼앗기고 쓸모없는 존재로 치부됐다. 인간이 들여온 만큼 고양이는 공생해야 하는 존재다.”</span>
                                        </div>
                                    </Link>
                            </div>

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
                    )
                })
            }
          
        </div>
    );
}
