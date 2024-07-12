'use client'

import ToastUiEditor from "@/app/component/ToastUi"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function HotDeal() {

    const pathname = usePathname();
    const customPath = pathname.replace(/^(\/[^\/]+)\/.*/, '$1');

    return (
        <>
            <section className="section commonBoardSection">
                <h3 className="commonBoardTit">
                핫 딜 <i>!</i>
                </h3>
                <div className="detailDataForm">
                    <div className="titleSpace">
                        <h3 className="title">
                            <input id="inpTitle" className="myInput bdCustom" autoComplete="off" placeholder="제목을 입력해주세요." />
                        </h3>
                        <h3 className="title subjectTitle customSellectBox">
                            <button id="inpSubjectTitle" className="myInput bdCustom mySellect">
                                말머리를 입력해주세요.
                            </button>
                        </h3>
                    </div>
                    <div className="line"></div>
                    <div className="contentSpace">
                        <ToastUiEditor />
                    </div>
                </div>
            </section>


            <div className="btnWrap returnList">
                
                <button id="commontWrite" className="btn btnStyle01">
                    작성하기
                </button>

                <Link href={{ pathname: customPath }}>
                    <button id="commontWrite" className="btn btnStyle02">
                        돌아가기
                    </button>
                </Link>
            </div>
        </>
    )
};
