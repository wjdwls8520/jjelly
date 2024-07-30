'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function FloatingSearch() {


    // 검색 버튼 UI JS
    const pathname = usePathname();

    let [active, setActive] = useState(false);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    

    // ************* 검색 클릭시 기능 JS *************
    let inpSearch = useRef();
    // 쿼리문찾기
    const router = useRouter(); 
    const params = useSearchParams();
    const type = params.get('type');
    const navigateToPage = () => {
        let data = {
            type: type,
            keyword: inpSearch.current.value,
            method : 'title'
        };
        const queryString = new URLSearchParams(data).toString();

        router.push(`/search?${queryString}`);  
        // '/target-page'로 페이지 이동
    };
    function btnSearch() {
        if (active) {
            if(inpSearch.current.value.length > 0) {
                navigateToPage();
            } else {
                alert('검색란을 입력해주세요.');
                inpSearch.current.focus();
            };
        };
    };


    return (
        <div ref={ref} className={`searchBox ${active ? 'active' : ''}` }>
            <button className="btnSearch" onClick={() => {
                        setActive(true); 
                        btnSearch();
                    }}>
                <img src="/icon_search.png" alt="검색" />
            </button>
            <div className="searchWrap">
                <input 
                    id="inpSearch" 
                    className="myInput" 
                    type="text"
                    ref={inpSearch}
                />
            </div>
        </div>
    )
};

