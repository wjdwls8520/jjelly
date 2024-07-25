'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export default function HeaderMenu(props) {

    let pathName = usePathname();
    const regex = /\/([^\/]*)\/detail/;
    const detailRomve = pathName.replace(/^(\/[^\/]+)\/.*/, '$1');
    let statement = regex.test(pathName);

    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=> {
        setIsOpen(false)
    }, [pathName]);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="menu"
        >
        <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
        >
            <img src="/icon_dot_menu.png" alt="메뉴" />
        </motion.button>
        <motion.ul
            className="menuDepth"
            variants={{
                open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.1,
                    staggerChildren: 0.05
                    }
                },
                closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3
                    }
                }
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
            <motion.li variants={itemVariants}>
                <Link className="txt" href={{ pathname: detailRomve + '/edit', query : 'type=' + props.type }}>
                    수정하기 
                </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
                <span className="txt">
                    삭제하기
                </span>
            </motion.li>
        </motion.ul>
        </motion.nav>
    );
}