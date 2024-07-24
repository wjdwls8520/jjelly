'use client'


import { useState } from "react";
import { motion } from "framer-motion";

const itemVariants = {
open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
},
closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export default function HeaderMenu() {
const [isOpen, setIsOpen] = useState(false);

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
        variants={{
            open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
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
        <motion.li variants={itemVariants}> 수정하기 </motion.li>
        <motion.li variants={itemVariants}> 삭제하기 </motion.li>
    </motion.ul>
    </motion.nav>
);
}