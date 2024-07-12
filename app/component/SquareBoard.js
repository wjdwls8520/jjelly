import Link from "next/link";

export default function SquareBoard() {

    let testArr = [];
    for (let i = 0; i < 11; i++) {
        testArr.push('test');
    }

    return(
        <ul className="squareBoardWrap hotPost">
            <li className="userPost">
                <div className="userProfile">
                    <img className="postProfile" src="/profile2.png" />
                </div>
                <Link className="imgWrap" href={{ pathname: '/' }}>
                    <img className="postImg" src="/profile.png" />
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
                <Link className="imgWrap" href={{ pathname: '/' }}>
                    <img className="postImg" src="/profile2.png" />
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
                <Link className="imgWrap" href={{ pathname: '/' }}>
                    <img className="postImg" src="/fish.png" />
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
                <Link className="imgWrap" href={{ pathname: '/' }}>
                    <img className="postImg" src="/cat.png" />
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
                <Link className="imgWrap" href={{ pathname: '/' }}>
                    <img className="postImg" src="/dog_bone.png" />
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
                <Link className="imgWrap" href={{ pathname: '/' }}>
                    <img className="postImg" src="/banner.png" />
                </Link>
                <div className="postContent">
                    <span className="txt">
                        서로를 안아줄 때, 우리는 세상에서 가장 행복한 가족이 돼.
                    </span>
                </div>
            </li>
            <li className="userPost">
                <div className="userProfile">
                    <img className="postProfile" src="/profile.png" />
                </div>
                <Link className="imgWrap" href={{ pathname: '/' }}>
                    <img className="postImg" src="/banner_02.png" />
                </Link>
                <div className="postContent">
                    <span className="txt">
                        오늘도 몰랑이와 산책을 떠다는 강아지는 맛있는 쩰리를 먹습니다. 강아지는 맛있는 쩰리를 먹습니다. 강아지는 맛있는 쩰리를 먹습니다.
                    </span>
                </div>
            </li>
        </ul>
    );
};