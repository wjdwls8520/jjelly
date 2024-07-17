'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SquareBoard(props) {

    let pathname = usePathname();

    let testArr = [];
    for (let i = 0; i < 11; i++) {
        testArr.push('test');
    }

    return(
        <>
            {
                pathname === '/' ?
                    <ul className="squareBoardWrap hotPost">
                        <li className="userPost">
                            <div className="userProfile">
                                <img className="postProfile" src="/character_dog.png" />
                            </div>
                            <Link className="imgWrap" href={{ pathname: 'meeting/detail', query: 'type=meet' }}>
                                <img className="postImg" src="/userimg_001.png" />
                            </Link>
                            <div className="postContent">
                                <span className="txt">
                                    우리 집의 작은 천사, 너와 함께하는 매일이 선물 같아.
                                </span>
                            </div>
                        </li>
                        <li className="userPost">
                            <div className="userProfile">
                                <img className="postProfile" src="/bird.png" />
                            </div>
                            <Link className="imgWrap" href={{ pathname: 'meeting/detail', query: 'type=meet' }}>
                                <img className="postImg" src="/userimg_003.png" />
                            </Link>
                            <div className="postContent">
                                <span className="txt">
                                    네가 내 곁에 있어주는 것만으로도 세상 모든 행복을 얻은 기분이야.
                                </span>
                            </div>
                        </li>
                        <li className="userPost">
                            <div className="userProfile">
                                <img className="postProfile" src="/profile.png" />
                            </div>
                            <Link className="imgWrap" href={{ pathname: 'meeting/detail', query: 'type=meet' }}>
                                <img className="postImg" src="/userimg_008.png" />
                            </Link>
                            <div className="postContent">
                                <span className="txt">
                                    눈을 뜨면 마주하는 너의 맑은 눈빛, 하루를 살아갈 힘이 되어줘.
                                </span>
                            </div>
                        </li>
                        <li className="userPost">
                            <div className="userProfile">
                                <img className="postProfile" src="/icon_cs.png" />
                            </div>
                            <Link className="imgWrap" href={{ pathname: 'meeting/detail', query: 'type=meet' }}>
                                <img className="postImg" src="/userimg_006.png" />
                            </Link>
                            <div className="postContent">
                                <span className="txt">
                                    네 작은 발소리가 내 마음을 따뜻하게 만들어줘.
                                </span>
                            </div>
                        </li>
                        <li className="userPost">
                            <div className="userProfile">
                                <img className="postProfile" src="/profile2.png" />
                            </div>
                            <Link className="imgWrap" href={{ pathname: 'meeting/detail', query: 'type=meet' }}>
                                <img className="postImg" src="/userimg_007.png" />
                            </Link>
                            <div className="postContent">
                                <span className="txt">
                                    우리가 함께하는 모든 순간이 추억으로 남아, 그리움이 될 거야.
                                </span>
                            </div>
                        </li>
                        <li className="userPost">
                            <div className="userProfile">
                                <img className="postProfile" src="/dog.png" />
                            </div>
                            <Link className="imgWrap" href={{ pathname: 'meeting/detail', query: 'type=meet' }}>
                                <img className="postImg" src="/userimg_012.png" />
                            </Link>
                            <div className="postContent">
                                <span className="txt">
                                    ㅋㅋㅋ 개킹받쥬? ㅋㅋㅋㅋㅋㅋㅋ
                                </span>
                            </div>
                        </li>
                        <li className="userPost">
                            <div className="userProfile">
                                <img className="postProfile" src="/userimg_001.png" />
                            </div>
                            <Link className="imgWrap" href={{ pathname: 'meeting/detail', query: 'type=meet' }}>
                                <img className="postImg" src="/userimg_004.png" />
                            </Link>
                            <div className="postContent">
                                <span className="txt">
                                    오늘도 몰랑이와 산책을 떠다는 강아지는 맛있는 쩰리를 먹습니다. 강아지는 맛있는 쩰리를 먹습니다. 강아지는 맛있는 쩰리를 먹습니다.
                                </span>
                            </div>
                        </li>
                        <li className="userPost">
                            <div className="userProfile">
                                <img className="postProfile" src="/userimg_005.png" />
                            </div>
                            <Link className="imgWrap" href={{ pathname: 'meeting/detail', query: 'type=meet' }}>
                                <img className="postImg" src="/userimg_009.png" />
                            </Link>
                            <div className="postContent">
                                <span className="txt">
                                    오늘도 몰랑이와 산책을 떠다는 강아지는 맛있는 쩰리를 먹습니다. 강아지는 맛있는 쩰리를 먹습니다. 강아지는 맛있는 쩰리를 먹습니다.
                                </span>
                            </div>
                        </li>
                        <li className="userPost">
                            <div className="userProfile">
                                <img className="postProfile" src="/userimg_012.png" />
                            </div>
                            <Link className="imgWrap" href={{ pathname: 'meeting/detail', query: 'type=meet' }}>
                                <img className="postImg" src="/userimg_002.png" />
                            </Link>
                            <div className="postContent">
                                <span className="txt">
                                    오늘도 몰랑이와 산책을 떠다는 강아지는 맛있는 쩰리를 먹습니다. 강아지는 맛있는 쩰리를 먹습니다. 강아지는 맛있는 쩰리를 먹습니다.
                                </span>
                            </div>
                        </li>
                    </ul>
                : 
                    <ul className="squareBoardWrap hotPost">
                        <li className="userPost">
                            <div className="userProfile">
                                <img className="postProfile" src="/character_dog.png" />
                            </div>
                            <Link className="imgWrap" href={{ pathname: 'meeting/detail', query: 'type=' + props.type }}>
                                <img className="postImg" src="/userimg_001.png" />
                            </Link>
                            <div className="postContent">
                                <span className="txt">
                                    우리 집의 작은 천사, 너와 함께하는 매일이 선물 같아.
                                </span>
                            </div>
                        </li>
                        <li className="userPost">
                            <div className="userProfile">
                                <img className="postProfile" src="/bird.png" />
                            </div>
                            <Link className="imgWrap" href={{ pathname: 'meeting/detail', query: 'type=' + props.type }}>
                                <img className="postImg" src="/userimg_003.png" />
                            </Link>
                            <div className="postContent">
                                <span className="txt">
                                    네가 내 곁에 있어주는 것만으로도 세상 모든 행복을 얻은 기분이야.
                                </span>
                            </div>
                        </li>
                        <li className="userPost">
                            <div className="userProfile">
                                <img className="postProfile" src="/profile.png" />
                            </div>
                            <Link className="imgWrap" href={{ pathname: 'meeting/detail', query: 'type=' + props.type }}>
                                <img className="postImg" src="/userimg_008.png" />
                            </Link>
                            <div className="postContent">
                                <span className="txt">
                                    눈을 뜨면 마주하는 너의 맑은 눈빛, 하루를 살아갈 힘이 되어줘.
                                </span>
                            </div>
                        </li>
                        <li className="userPost">
                            <div className="userProfile">
                                <img className="postProfile" src="/icon_cs.png" />
                            </div>
                            <Link className="imgWrap" href={{ pathname: 'meeting/detail', query: 'type=' + props.type }}>
                                <img className="postImg" src="/userimg_006.png" />
                            </Link>
                            <div className="postContent">
                                <span className="txt">
                                    네 작은 발소리가 내 마음을 따뜻하게 만들어줘.
                                </span>
                            </div>
                        </li>
                        <li className="userPost">
                            <div className="userProfile">
                                <img className="postProfile" src="/profile2.png" />
                            </div>
                            <Link className="imgWrap" href={{ pathname: 'meeting/detail', query: 'type=' + props.type }}>
                                <img className="postImg" src="/userimg_007.png" />
                            </Link>
                            <div className="postContent">
                                <span className="txt">
                                    우리가 함께하는 모든 순간이 추억으로 남아, 그리움이 될 거야.
                                </span>
                            </div>
                        </li>
                        <li className="userPost">
                            <div className="userProfile">
                                <img className="postProfile" src="/dog.png" />
                            </div>
                            <Link className="imgWrap" href={{ pathname: 'meeting/detail', query: 'type=' + props.type }}>
                                <img className="postImg" src="/userimg_012.png" />
                            </Link>
                            <div className="postContent">
                                <span className="txt">
                                    ㅋㅋㅋ 개킹받쥬? ㅋㅋㅋㅋㅋㅋㅋ
                                </span>
                            </div>
                        </li>
                        <li className="userPost">
                            <div className="userProfile">
                                <img className="postProfile" src="/userimg_001.png" />
                            </div>
                            <Link className="imgWrap" href={{ pathname: 'meeting/detail', query: 'type=' + props.type }}>
                                <img className="postImg" src="/userimg_004.png" />
                            </Link>
                            <div className="postContent">
                                <span className="txt">
                                    오늘도 몰랑이와 산책을 떠다는 강아지는 맛있는 쩰리를 먹습니다. 강아지는 맛있는 쩰리를 먹습니다. 강아지는 맛있는 쩰리를 먹습니다.
                                </span>
                            </div>
                        </li>
                        <li className="userPost">
                            <div className="userProfile">
                                <img className="postProfile" src="/userimg_005.png" />
                            </div>
                            <Link className="imgWrap" href={{ pathname: 'meeting/detail', query: 'type=' + props.type }}>
                                <img className="postImg" src="/userimg_009.png" />
                            </Link>
                            <div className="postContent">
                                <span className="txt">
                                    오늘도 몰랑이와 산책을 떠다는 강아지는 맛있는 쩰리를 먹습니다. 강아지는 맛있는 쩰리를 먹습니다. 강아지는 맛있는 쩰리를 먹습니다.
                                </span>
                            </div>
                        </li>
                        <li className="userPost">
                            <div className="userProfile">
                                <img className="postProfile" src="/userimg_012.png" />
                            </div>
                            <Link className="imgWrap" href={{ pathname: 'meeting/detail', query: 'type=' + props.type }}>
                                <img className="postImg" src="/userimg_002.png" />
                            </Link>
                            <div className="postContent">
                                <span className="txt">
                                    오늘도 몰랑이와 산책을 떠다는 강아지는 맛있는 쩰리를 먹습니다. 강아지는 맛있는 쩰리를 먹습니다. 강아지는 맛있는 쩰리를 먹습니다.
                                </span>
                            </div>
                        </li>
                    </ul>
            }
        </>
        
    );
};