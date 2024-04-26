'use client'

import Link from "next/link";

export default function HotDeal() {

    let testArr = [];
    for (let i = 0; i < 8; i++) {
        testArr.push('test');
    }

    return (
        <div id="section" className="freeBoardSection">

            {
                testArr.map((a, i)=> {
                    return (
                        <div className="post commonPost style2">
                            <span className="imgBox">
                                <Link href={{ pathname: '/freeBoard', query: 'detail' }}>
                                    <img className="boardImg" src='/samplehotdeal.png' />   
                                </Link>
                            </span>
                                

                            <div className="content">
                                    <Link href={{ pathname: '/freeBoard', query: 'detail' }}>
                                        <span className="title titleLine1">
                                            [롯데온] 나이키 인피니티 런 4 DR2665-103 (100,240원) (무료)
                                        </span> 
                                        <div className="userInfo">
                                            <span className="txt">
                                                ㄴ남은사이즈 250~265 가격은 펨코발 최저가 9만발 / 상시가 13~4 특급가격은 아니지만, 자기 사이즈 맞고 런닝화 땡겨보려면 추천(반업/한업 추천)
                                            </span>
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
