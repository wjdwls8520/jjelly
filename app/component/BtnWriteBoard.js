'use client'

import { useState } from "react"

export default function BtnWriteBoard({writeBoard}) {
    
    let [test, setTest] = useState(0);

    return (
        <button className={`btnWrap boardWrite ${test}`} onClick={()=> {
            writeBoard ='12312313'
            setTest(writeBoard)
        }}>
            <img src='/ico_write2.png' />   
        </button>
    )
};