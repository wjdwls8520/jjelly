import Link from "next/link";

export default function MeetPost() {

    let testArr = [];
    for (let i = 0; i < 11; i++) {
        testArr.push('test');
    }

    return(
        <div className="boardWrap MeetPost">
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