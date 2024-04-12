import HotBoard from "./component/HotBoard";

export default function Home() {
    return (
        <>
            <div id="section" className="mainSection">

                <div className="boardWrap firstGroup">
                    <div className="boardBox">
                        <span>JJelly 소식</span>
                    </div>

                    <div className="boardBox">
                    <span>JJelly 모임</span> 
                    </div>

                    <div className="boardBox">
                    <span>JJelly Map</span> 
                    </div>
                </div>

                <div className="boardWrap secondGroup">
                    <div className="leftContents">
                        <div className="boardBox">
                            <span>자유<br></br>게시판</span>
                        </div>

                        <div className="boardBox">
                            <span>핫 딜</span> 
                        </div>
                    </div>

                    <div className="centerContents">
                        <div className="boardBox">
                            <span>멍멍이</span> 
                        </div>

                        <div className="boardBox">
                            <span>냥이</span>
                        </div>

                        <div className="boardBox">
                            <span>새</span> 
                        </div>

                        <div className="boardBox">
                            <span>물고기</span> 
                        </div>
                    </div>   

                    <div className="rightContents">
                        <div className="boardBox">
                            <span>봉사<br></br>활동</span> 
                        </div>       
                    </div>     
                </div>

            </div>

            <span className="layoutLine"></span>

            <HotBoard />

        </>
    );
}
