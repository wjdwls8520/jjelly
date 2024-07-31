'use client'

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { field } from "../data/data";


export default function SellectBox(props) {

    // 박스 디폴트값, 박스 옵션 값
    let fieldData = props.field === 'subTitle' ? field.subTitle :
    props.field === 'region' ? field.region : field.division;
    let [boxContents, setBoxContents] = useState(fieldData[0]);


    // 박스 클릭 이벤트
    let [isClick, setIsClick] = useState(false);
    function ShowSellectBox(e) {
        e.stopPropagation();
        setIsClick(true);
        bodyOn();
    };
    function HideSellectBox() {
        setIsClick(false);
        bodyOn();
    };

    function bodyOn() {
        let body = document.querySelector('body');
        body.classList.toggle('on');
    };

    return (
        <>
            <button id={props.id} className="myInput bdCustom mySellect" onClick={ShowSellectBox}>   
                {boxContents}
            </button>

            <AnimatePresence>
                {isClick && (
                    <>
                        <motion.div 
                            initial={{ y: '100%', x: '-50%' }}
                            animate={{ y: ['100%', '0%', '5%'] , x: '-50%'}}
                            exit={{ y: [null, '-0%', '100%'], x: '-50%' }}
                            transition={{ ease: "easeOut", duration: 0.5 }}
                            className="sellectBoxWrap"
                        >                
                            <span className="boxTitle">
                                컨셉 분류
                                <img src="/icon_close.png" alt="X" onClick={HideSellectBox} />
                            </span>
                            <ul className="boxList">
                                {
                                    fieldData.map((a, i) => (
                                        <li key={i} onClick={()=> {setBoxContents(a); HideSellectBox();}}>{a}</li>
                                    ))
                                }
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, }}
                            animate={{ opacity: 1 ,}}
                            exit={{ opacity: 0, }}
                            transition={{ ease: "easeOut", duration: 0.5 }}
                            className="dim on"
                        >
                            
                        </motion.div>
                    </>
                )}

            </AnimatePresence>
        </>
    )
};