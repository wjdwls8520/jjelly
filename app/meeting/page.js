import Link from "next/link";
import HotMeetPost from "../component/HotMeetPost";
import Region from "../component/Region";
import Field from "../component/Field";
import MeetPost from "../component/MeetPost";


export default function Meeting() {
    return(
        <div id="section" className="meetingSection">
            <ul className="tabCategory">
                <li>
                    <Link href={{ pathname: '/' }}>
                        젤리 모임
                    </Link>
                </li>
                <li>
                    <Link href={{ pathname: '/' }}>
                        젤리 공고
                    </Link>
                </li>
            </ul>

            {/* 분류 : 지역 */}
            <Region />

            <h2 className="title">
                <em>HOT</em> 모임 <i>!</i>
            </h2>

            <HotMeetPost />

            {/* 분류 카테고리, 활동  */}
            <Field />

            <h2 className="title">
                <em>젤리 모임</em> 
            </h2>

            <MeetPost />
                
        </div>  
    );
};