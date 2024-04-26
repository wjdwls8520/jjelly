'use client'

import Link from "next/link";

export default function Volunteer() {

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
                                <Link href={{ pathname: '/volunteer', query: 'detail' }}>
                                    <img className="boardImg" src='/samplevolunteer.png' />   
                                </Link>
                            </span>
                                
                            <div className="content">
                                    <a href="https://www.1365.go.kr/vols/1572247904127/partcptn/timeCptn.do?type=show&menuNo=&progrmRegistNo=3080970" target="_blank">
                                    {/* <Link href={{ pathname: '/freeBoard', query: 'detail' }}> */}
                                        <span className="title titleLine1">
                                            시간인증 관평도서관 자료실 서가 배가 및 훼손자료 보수 등 (오전 / 성인만 가능) (모집중)
                                        </span> 
                                        <div className="userInfo">
                                            <span className="txt">
                                            1. 도서관 운영 지원을 위한 성인 자원봉사활동입니다 . 도서 정리와 환경 미화 등을 도와주시면 됩니다. 
                                            2. 대학생 이상 성인만 신청 가능하며  중, 고등학생 신청 시 별도 안내 없이 삭제 처리합니다. 
                                            3. 하루 1회만 신청 가능 (1회 이상 신청 시 나머지는 취소 처리) 
                                            4. 3건 이상  봉사 신청 후 3번 이상 취소나 3번 이상 불참 시 본 도서관 자원봉사 활동이 힘들 수 있습니다. 
                                            참고하시어 신중하게 봉사 활동 신청 후 "1층 어린이 자료실"로 시간에 맞춰 와 주세요 
                                            5. 안내 문자나 전화 드릴 수 있으니 전화번호 변경 시 꼭 수정해 주세요. 
                                                본인이 연락이 안돼서 봉사 활동이 취소되는 경우 책임 소재는 본인에게 있습니다 
                                            </span>
                                        </div>
                                    {/* </Link> */}
                                    </a>
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
