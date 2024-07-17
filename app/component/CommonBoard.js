'use client' 

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CommonBoard(props) {
    let typeProps = `type=${props.type}`;


    let pathname = usePathname();

    const regex = /\/([^\/]*)\/detail/;

    const detailRomve = pathname.replace(/^(\/[^\/]+)\/.*/, '$1');
    
    let statement = regex.test(pathname);


    return (
        <>
            {

                pathname === '/' ?
                    <ul className="commonBoardListWrap">
                        <li>
                            <Link href={{ pathname: '/board' , query: 'type=newsBd' }}>
                                <div className="post commonPost style2">
                                    <span className="imgBox">
                                        <img className="boardImg" src="/profile.png" />
                                    </span>
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
                                    <div className="util">
                                        <span className="commentBox">
                                            <span className="aTag" href={{ pathname: '/board' , query: 'type=newsBd' }}>
                                                <span className="conmmentNum">3</span>
                                                <span>댓글</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={{ pathname: '/board' , query: 'type=newsBd' }}>
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
                                            <span className="aTag" href={{ pathname: '/board' , query: 'type=newsBd' }}>
                                                <span className="conmmentNum">3</span>
                                                <span>댓글</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={{ pathname: '/board' , query: 'type=newsBd' }}>
                            <div className="post commonPost style2">
                                    <span className="imgBox">
                                        <img className="boardImg" src="/userimg_012.png" />
                                    </span>
                                    <div className="content">
                                        <span className="title titleLine2">
                                            아 ㅋㅋㅋ 킹받냐고 ㅋㅋㅋ
                                        </span>
                                        <div className="userInfo">
                                            <span className="user">명젤리</span>
                                            <span className="time">12:12</span>
                                            <span className="check">조회 6</span>
                                        </div>
                                    </div>
                                    <div className="util">
                                        <span className="commentBox">
                                            <span className="aTag" href={{ pathname: detailRomve , query: typeProps }}>
                                                <span className="conmmentNum">3</span>
                                                <span>댓글</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={{ pathname: '/board' , query: 'type=newsBd' }}>
                                <div className="post commonPost style3">
                                    <div className="content">
                                        <span className="title titleLine2">
                                            "새로운 가족 맞이하기: 입양 전 준비사항 체크리스트"
                                        </span>
                                        <div className="userInfo">
                                            <span className="user">명젤리</span>
                                            <span className="time">12:12</span>
                                            <span className="check">조회 6</span>
                                        </div>
                                    </div>
                                    <div className="util">
                                        <span className="commentBox">
                                            <span className="aTag" href={{ pathname: '/board' , query: 'type=newsBd' }}>
                                                <span className="conmmentNum">3</span>
                                                <span>댓글</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul> 

                :


                statement ?
                    <ul className="commonBoardListWrap">
                        <li>
                            <Link href={{ pathname: detailRomve + '/detail' , query: typeProps }}>
                                <div className="post commonPost style2">
                                    <span className="imgBox">
                                        <img className="boardImg" src="/profile.png" />
                                    </span>
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
                                    <div className="util">
                                        <span className="commentBox">
                                            <span className="aTag" href={{ pathname: detailRomve + '/detail' , query: typeProps }}>
                                                <span className="conmmentNum">3</span>
                                                <span>댓글</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={{ pathname: detailRomve + '/detail' , query: typeProps }}>
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
                                            <span className="aTag" href={{ pathname: detailRomve + '/detail' , query: typeProps }}>
                                                <span className="conmmentNum">3</span>
                                                <span>댓글</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={{ pathname: detailRomve + '/detail' , query: typeProps }}>
                                <div className="post commonPost style2">
                                    <span className="imgBox">
                                        <img className="boardImg" src="/userimg_012.png" />
                                    </span>
                                    <div className="content">
                                        <span className="title titleLine2">
                                            아 ㅋㅋㅋ 킹받냐고 ㅋㅋㅋ
                                        </span>
                                        <div className="userInfo">
                                            <span className="user">명젤리</span>
                                            <span className="time">12:12</span>
                                            <span className="check">조회 6</span>
                                        </div>
                                    </div>
                                    <div className="util">
                                        <span className="commentBox">
                                            <span className="aTag" href={{ pathname: detailRomve + '/detail' , query: typeProps }}>
                                                <span className="conmmentNum">3</span>
                                                <span>댓글</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={{ pathname: detailRomve + '/detail' , query: typeProps }}>
                                <div className="post commonPost style3">
                                    <div className="content">
                                        <span className="title titleLine2">
                                            "새로운 가족 맞이하기: 입양 전 준비사항 체크리스트"
                                        </span>
                                        <div className="userInfo">
                                            <span className="user">명젤리</span>
                                            <span className="time">12:12</span>
                                            <span className="check">조회 6</span>
                                        </div>
                                    </div>
                                    <div className="util">
                                        <span className="commentBox">
                                            <span className="aTag" href={{ pathname: detailRomve + '/detail' , query: typeProps }}>
                                                <span className="conmmentNum">3</span>
                                                <span>댓글</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>

                :
                    <ul className="commonBoardListWrap">
                        <li>
                            <Link href={{ pathname: pathname + '/detail', query : typeProps }}>
                                <div className="post commonPost style2">
                                    <span className="imgBox">
                                        <img className="boardImg" src="/profile.png" />
                                    </span>
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
                                    <div className="util">
                                        <span className="commentBox">
                                            <span className="aTag" href={{ pathname: pathname + '/detail', query : typeProps }}>
                                                <span className="conmmentNum">3</span>
                                                <span>댓글</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={{ pathname: pathname + '/detail', query : typeProps }}>
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
                                            <span className="aTag" href={{ pathname: pathname + '/detail', query : typeProps }}>
                                                <span className="conmmentNum">3</span>
                                                <span>댓글</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={{ pathname: pathname + '/detail', query : typeProps }}>
                            <div className="post commonPost style2">
                                    <span className="imgBox">
                                        <img className="boardImg" src="/userimg_012.png" />
                                    </span>
                                    <div className="content">
                                        <span className="title titleLine2">
                                            아 ㅋㅋㅋ 킹받냐고 ㅋㅋㅋ
                                        </span>
                                        <div className="userInfo">
                                            <span className="user">명젤리</span>
                                            <span className="time">12:12</span>
                                            <span className="check">조회 6</span>
                                        </div>
                                    </div>
                                    <div className="util">
                                        <span className="commentBox">
                                            <span className="aTag" href={{ pathname: detailRomve , query: typeProps }}>
                                                <span className="conmmentNum">3</span>
                                                <span>댓글</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={{ pathname: pathname + '/detail', query : 'type=' + props.type }}>
                                <div className="post commonPost style3">
                                    <div className="content">
                                        <span className="title titleLine2">
                                            "새로운 가족 맞이하기: 입양 전 준비사항 체크리스트"
                                        </span>
                                        <div className="userInfo">
                                            <span className="user">명젤리</span>
                                            <span className="time">12:12</span>
                                            <span className="check">조회 6</span>
                                        </div>
                                    </div>
                                    <div className="util">
                                        <span className="commentBox">
                                            <span className="aTag" href={{ pathname: pathname + '/detail', query : 'type=' + props.type }}>
                                                <span className="conmmentNum">3</span>
                                                <span>댓글</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                
            }
        </>
    )

};
