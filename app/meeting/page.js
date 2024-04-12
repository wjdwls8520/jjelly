import Link from "next/link";
import Hotmeet from "../component/Hotmeet";

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

            <h2 className="title">
                <em>HOT</em> 모임 <i>!</i>
            </h2>

            <Hotmeet />
                
        </div>  
    );
};