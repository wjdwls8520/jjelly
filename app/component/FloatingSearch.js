'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function FloatingSearch() {

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

    return (
        <div ref={ref} className={`searchBox ${active ? 'active' : ''}` }>
            <button className="btnSearch" onClick={() => setActive(true)}>
                <img src="/icon_search.png" alt="검색" />
            </button>
            <div className="searchWrap">
                <input id="inpSearch" className="myInput" type="text" />
            </div>
        </div>
    )
};

