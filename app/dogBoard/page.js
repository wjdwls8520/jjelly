'use client'

import Link from "next/link";

export default function DogBoard() {

    return (
        <div id="section" className="meetingSection">
            <ul className="tabCategory">
                <li className="meet active">
                    <Link href={{ pathname: '/dogBoard' }}>
                        전체
                    </Link>
                </li>
                <li className="meetNotice">
                    <Link href={{ pathname: '/dogBoard', query: 'best' }}>
                        베스트
                    </Link>
                </li>
            </ul>
        </div>
    );
}
