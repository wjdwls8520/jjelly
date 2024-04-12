import Link from "next/link";

export default function HotBoard() {

    let testArr = [];
    for (let i = 0; i < 11; i++) {
        testArr.push('test');
    }

    return(
        <div id="section" className="boardWrap hotBoard">
            <h2 className="title">
                HOT 젤 100 <i>!</i>
            </h2>

            {
                testArr.map((a, i)=> {
                    return(
                        <div className="userPost">
                            <div className="userProfile">
                                <img className="postProfile" src='/profile2.png' /> 
                            </div>
                            <Link href={{ pathname: '/' }}>
                                <img className="postImg" src='/profile.png' /> 
                            </Link>
                            <div className="postContent">
                                <span className="txt">
                                    오늘도 몰랑이와 산책을 떠다는 강아지는 맛있는 쩰리를 먹습니다. 
                                    강아지는 맛있는 쩰리를 먹습니다.
                                    강아지는 맛있는 쩰리를 먹습니다.
                                </span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};