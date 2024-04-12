import Link from "next/link";

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
        </div>
    );
};