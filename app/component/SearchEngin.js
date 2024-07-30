'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import SquareBoard from "./SquareBoard";
import MeetNotice from "./MeetNotice";
import Link from "next/link";
import CommonBoard from "./CommonBoard";

function SearchEnginLogic() {

    // 쿼리문찾기
    const params = useSearchParams();
    const type = params.get('type');
    const keyword = params.get('keyword');
    const method = params.get('method');

    let commonBoard = ['newsBd', 'hotBd', 'freeBd', 'volunteerBd', 'dogBd', 'catBd', 'allBd'];

    return (
        <section className={`section customPt ${type === ('meet' || 'meetNotice') ? 'squareBoardSection' : 'commonBoardSection'}`}>
            <ul className="tabCategory">
                <li className={method === 'title' ? 'active' : null}>
                    <Link href={{ pathname: '/search', query: `type=${type}&keyword=${keyword}&method=title` }}>
                        제목만
                    </Link>
                </li>
                <li className={method === 'contents' ? 'active' : null}>
                    <Link href={{ pathname: '/search', query: `type=${type}&keyword=${keyword}&method=contents` }}>
                        제목 + 내용
                    </Link>
                </li>
                <li className={method === 'nickname' ? 'active' : null}>
                    <Link href={{ pathname: '/search', query: `type=${type}&keyword=${keyword}&method=nickname` }}>
                        작성자
                    </Link>
                </li>
            </ul>

            <h3 className="commonBoardTit tc mt25 mb30 ">
                '{keyword}'
                &nbsp;&nbsp;
                <span className="ment grayColor">에 &nbsp;&nbsp; 해당하는 검색 결과</span>
            </h3>

            {
                type === 'meet' ? <SquareBoard type={type} /> : null
            }

            {
                type === 'meetNotice' ? <MeetNotice type={type} /> : null
            }

            {
                commonBoard.includes(type) ? <CommonBoard type={type} /> : null
            }

            <div className="btnWrap returnList mt40">
                <button className="btn btnStyle03">
                    더 보기
                </button>
            </div>

        </section>
    )
};

export default function SearchEngin() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchEnginLogic />
        </Suspense>
    );
};