'use client'

import CommonBoard from "../component/CommonBoard";
import FloatingSearch from "../component/FloatinSearch";
import FloatingMenu from "../component/FloatingMenu";

export default function HotDeal() {


    let testArr = [];
    for (let i = 0; i < 8; i++) {
        testArr.push('test');
    };

    return (
        <section className="section pt80 commonBoardSection">
            <h3 className="commonBoardTit">
                핫 딜 <i>!</i>
            </h3>
            <CommonBoard />

            {/* 플로팅 검색 ( 검색 ) */}
            <FloatingSearch />
            {/* 플로팅 메뉴 ( 글쓰기 ) */}
            <FloatingMenu />
        </section>
    );
}
