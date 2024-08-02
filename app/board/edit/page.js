'use client'

import ToastUiEditor from "/app/component/ToastUi"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react";
import { useEffect } from "react";
import { titleData } from "/app/data/data";
import { Suspense } from "react";
import SellectBox from "/app/component/SellectBox";

function BoardCreateContent() {

    // 쿼리문찾기
    const params = useSearchParams();
    const type = params.get('type');


    // 뒤로가기
    const router = useRouter(); 

    
    // 쿼리문으로 게시판 타입 판별
    const [title, setTitle] = useState(null);

    useEffect(() => {
        if (type) {
          const newTitle = titleData[type];
          setTitle(newTitle); // 이 시점에서 newTitle은 업데이트된 상태입니다.
        }
    }, [type]); // 의존성 배열에 type을 추가


    
    const [file, setFile] = useState(null);
    const [base64, setBase64] = useState("");

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            convertToBase64(selectedFile);
        } else {
            setFile(null);
            setBase64("");
        };
    };

    const convertToBase64 = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setBase64(reader.result);
        };
    };

    useEffect(() => {
        console.log(file);
    }, [file]);


    return (
        <>
            <section className="section customPt commonBoardSection">
                <h3 className="commonBoardTit">
                {title} <span> 만들기 </span>
                </h3>
                <div className="detailDataForm">
                <div className="titleSpace spaceWrap">
                        <label className="tit">말머리</label>
                        <h3 className="title subTitle customSellectBox">
                            <SellectBox id={'inpSubTitle'} field={'subTitle'} />
                        </h3>
                    </div>
                    <div className="titleSpace spaceWrap">
                        <label className="tit">제목</label>
                        <h3 className="title">
                            <input type="text" id="inpTitle" className="myInput bdCustom" autoComplete="off" placeholder="제목을 입력해주세요." />
                        </h3>
                    </div>
                    <div className="titleSpace spaceWrap">
                        <label className="tit">첨부파일</label>
                        <h3 className="title mainImg customSellectBox">
                            <input type="file" id="inpMainImg" className="myInput bdCustom mySellect display-none" accept="image/*" onChange={handleFileChange} />
                            <label htmlFor="inpMainImg" className={base64 ? 'customFile labelMainImg on' : 'customFile labelMainImg'} >
                                <img id="nomalImg" className="nomalImg" src={base64 ? base64 : `/nomal_profile.png`} alt="대표이미지" />
                                <div className="icon_profile">
                                    <img src="/icon_camera.png" alt="카메라" />
                                </div>
                            </label>
                        </h3>
                    </div>
                    {/* <div className="line"></div> */}
                    <div className="contentSpace spaceWrap">
                        <label className="tit">내용</label>
                        <ToastUiEditor />
                    </div>
                </div>
            </section>


            <div className="btnWrap returnList">
                
                <button id="commontWrite" className="btn btnStyle01">
                    수정하기
                </button>

                <span onClick={()=> {router.back()}}>
                    <button id="commontWrite" className="btn btnStyle02">
                        돌아가기
                    </button>
                </span>
            </div>
        </>
    )
};

export default function BoardCreate() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BoardCreateContent />
        </Suspense>
    )
};
