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
                    <div className="contents contents01">
                        <div className="boardBoxWrap">
                            <div className="boardBox">
                                <img className="boardImg" src='/paws.png' /> 
                                <Link href={{ pathname: '/' }}>
                                </Link>
                            </div>
                            <span>자유 게시판</span>
                        </div>

                        <div className="boardBoxWrap">
                            <div className="boardBox">
                                <img className="boardImg" src='/dog_bone.png' />                                 
                                <Link href={{ pathname: '/' }}>
                                </Link>
                            </div>
                            <span>핫 딜</span>
                        </div>

                        <div className="boardBoxWrap">
                            <div className="boardBox">
                                <img className="boardImg" src='/volunteer.png' />   
                                <Link href={{ pathname: '/' }}>
                                </Link>
                            </div>
                            <span>봉사 활동</span>
                        </div>
                    </div>

                    <div className="contents contents02">
                    <div className="boardBoxWrap">
                            <div className="boardBox">
                                <img className="boardImg" src='/dog.png' /> 
                                <Link href={{ pathname: '/' }}>
                                </Link>
                            </div>
                            <span>멍멍이</span>
                        </div>

                        <div className="boardBoxWrap">
                            <div className="boardBox">
                                <img className="boardImg" src='/cat.png' /> 
                                <Link href={{ pathname: '/' }}>
                                </Link>
                            </div>
                            <span>냥이</span>
                        </div>

                        <div className="boardBoxWrap">
                            <div className="boardBox">
                                <img className="boardImg" src='/bird.png' /> 
                                <Link href={{ pathname: '/' }}>
                                </Link>
                            </div>
                            <span>새</span>
                        </div>

                        <div className="boardBoxWrap">
                            <div className="boardBox">
                                <img className="boardImg" src='/fish2.png' /> 
                                <Link href={{ pathname: '/' }}>
                                </Link>
                            </div>
                            <span>물고기</span>
                        </div>
                    </div>      
                </div>

            </div>

            <span className="layoutLine"></span>

            <HotBoard />

        </>
    );
}
