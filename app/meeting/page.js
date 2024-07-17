'use client'

import Link from "next/link";
import Region from "../component/Region";
import Field from "../component/Field";
import SquareBoardSlide from "../component/SquareBoardSlide";
import SquareBoard from "../component/SquareBoard";
import FloatingSearch from "../component/FloatingSearch";
import FloatingMenu from "../component/FloatingMenu";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import titleData from "../data/data";
import { useState } from "react";
import { useEffect } from "react";


function MeetingContent() {

    const params = useSearchParams();
    const type = params.get('type');

    const [title, setTitle] = useState(null);

    useEffect(() => {
        if (type) {
          const newTitle = titleData[type];
          setTitle(newTitle); // 이 시점에서 newTitle은 업데이트된 상태입니다.
        }
      }, [type]); // 의존성 배열에 type을 추가
    
    return(
        <section className="section pt80 squareBoardSection">
            <ul className="tabCategory">
                <li className="meet active">
                    <Link href={{ pathname: '/meeting' }}>
                        젤리 모임
                    </Link>
                </li>
                <li className="meetNotice">
                    <Link href={{ pathname: '/meetNotice' }}>
                        젤리 공고
                    </Link>
                </li>
            </ul>

            {/* 분류 : 지역 */}
            <Region type={type} />

            <h3 className="commonBoardTit">
                인기 {title} <i>!</i>
            </h3>

            <SquareBoardSlide type={type} />


            {/* 공백 */}
            <div className="mt60"></div>  



            {/* 분류 카테고리, 활동  */}
            <Field type={type} />

            <h3 className="commonBoardTit">
                쩰리 {title}
            </h3>

            <SquareBoard type={type} />
                

            {/* 플로팅 검색 ( 검색 ) */}
            <FloatingSearch type={type} />
            {/* 플로팅 메뉴 ( 글쓰기 ) */}
            <FloatingMenu type={type} />
        </section>  
    );
};


export default function Meeting() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MeetingContent />
        </Suspense>
    )
};