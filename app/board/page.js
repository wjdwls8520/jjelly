'use client'


import { useSearchParams } from "next/navigation";
import CommonBoard from "../component/CommonBoard";
import FloatingSearch from "../component/FloatinSearch";
import FloatingMenu from "../component/FloatingMenu";
import { useEffect } from "react";
import titleData from "./data";
import { useState } from "react";
import { Suspense } from "react";


export default function HotDeal() {

    const params = useSearchParams();
    const type = params.get('type');

    const [title, setTitle] = useState(null);

    useEffect(() => {
        if (type) {
          const newTitle = titleData[type];
          setTitle(newTitle);
          console.log(newTitle); // 이 시점에서 newTitle은 업데이트된 상태입니다.
        }
      }, [type]); // 의존성 배열에 type을 추가


    let testArr = [];
    for (let i = 0; i < 8; i++) {
        testArr.push('test');
    };

    return (
        <Suspense>
            <section className="section pt80 commonBoardSection">
                
                {/* 카테고리 */}
                <ul className="category">
                    <li className="active">
                        최신순
                    </li>
                    <li>
                        조회순
                    </li>
                    <li>
                        인기순
                    </li>
                </ul>

                <h3 className="commonBoardTit">
                    {title} <i>!</i>
                </h3>
                <CommonBoard />

                {/* 플로팅 검색 ( 검색 ) */}
                <FloatingSearch />
                {/* 플로팅 메뉴 ( 글쓰기 ) */}
                <FloatingMenu />
            </section>
        </Suspense>
    );
}
