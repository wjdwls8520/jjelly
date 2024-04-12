import Link from "next/link";
import HotBoard from "./component/HotBoard";

export default function Home() {
    return (
        <>
            <div id="section" className="mainSection">

                <div className="boardWrap firstGroup">
                    <div className="boardBox">
                        <Link href={{ pathname: '/' }}>
                            <span>JJelly 소식</span>
                        </Link>
                    </div>

                    <div className="boardBox">
                        <Link href={{ pathname: '/meeting' }}>
                            <span>JJelly 모임</span> 
                        </Link>
                    </div>

                    <div className="boardBox">
                        <Link href={{ pathname: '/' }}>
                            <span>JJelly Map</span> 
                        </Link>
                    </div>
                </div>

                <div className="boardWrap secondGroup">
                    <div className="leftContents">
                        <div className="boardBox">
                            <Link href={{ pathname: '/' }}>
                                <span>자유<br></br>게시판</span>
                            </Link>
                        </div>

                        <div className="boardBox">
                            <Link href={{ pathname: '/' }}>
                                <span>핫 딜</span> 
                            </Link>
                        </div>
                    </div>

                    <div className="centerContents">
                        <div className="boardBox">
                            <Link href={{ pathname: '/' }}>
                                <span>멍멍이</span> 
                            </Link>
                        </div>

                        <div className="boardBox">
                            <Link href={{ pathname: '/' }}>
                                <span>냥이</span>
                            </Link>
                        </div>

                        <div className="boardBox">
                            <Link href={{ pathname: '/' }}>
                                <span>새</span> 
                            </Link>
                        </div>

                        <div className="boardBox">
                            <Link href={{ pathname: '/' }}>
                                <span>물고기</span> 
                            </Link>
                        </div>
                    </div>   

                    <div className="rightContents">
                        <div className="boardBox">
                            <Link href={{ pathname: '/' }}>
                                <span>봉사<br></br>활동</span> 
                            </Link>
                        </div>       
                    </div>     
                </div>

            </div>

            <span className="layoutLine"></span>

            <HotBoard />

        </>
    );
}
