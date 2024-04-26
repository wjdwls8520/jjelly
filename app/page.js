import Link from "next/link";
import HotBoard from "./component/HotBoard";

export default function Home() {
    return (
        <>
            <div id="section" className="mainSection">

                <div className="boardWrap firstGroup">
                    <div className="boardBox">
                        <Link href={{ pathname: '/news' }}>
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
                        <Link href={{ pathname: '/freeBoard' }}>
                            <div className="boardBoxWrap">
                                <div className="boardBox">
                                    <img className="boardImg" src='/paws.png' /> 
                                </div>
                                <span>자유 게시판</span>
                            </div>
                        </Link>

                        <Link href={{ pathname: '/' }}>
                            <div className="boardBoxWrap">
                                <div className="boardBox">
                                    <img className="boardImg" src='/dog_bone.png' />                                 
                                </div>
                                <span>핫 딜</span>
                            </div>
                        </Link>

                        <Link href={{ pathname: '/' }}>
                            <div className="boardBoxWrap">
                                <div className="boardBox">
                                    <img className="boardImg" src='/volunteer.png' />   
                                </div>
                                <span>봉사 활동</span>
                            </div>
                        </Link>
                    </div>

                    <div className="contents contents02">
                        <Link href={{ pathname: '/dogBoard' }}>
                            <div className="boardBoxWrap">
                                <div className="boardBox">
                                    <img className="boardImg" src='/dog.png' /> 
                                </div>
                                <span>멍멍이</span>
                            </div>
                        </Link>

                        <Link href={{ pathname: '/' }}>
                            <div className="boardBoxWrap">
                                <div className="boardBox">
                                    <img className="boardImg" src='/cat.png' /> 
                                </div>
                                <span>냥이</span>
                            </div>
                        </Link>

                        <Link href={{ pathname: '/' }}>
                            <div className="boardBoxWrap">
                                <div className="boardBox">
                                    <img className="boardImg" src='/bird.png' /> 
                                </div>
                                <span>새</span>
                            </div>
                        </Link>

                        <Link href={{ pathname: '/' }}>
                            <div className="boardBoxWrap">
                                <div className="boardBox">
                                    <img className="boardImg" src='/fish2.png' /> 
                                    
                                </div>
                                <span>물고기</span>
                            </div>
                        </Link>
                    </div>      
                </div>

            </div>

            <span className="layoutLine"></span>

            <HotBoard />

        </>
    );
}
