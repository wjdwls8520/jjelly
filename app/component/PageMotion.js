'use client'

import { AnimatePresence } from "framer-motion";
import { motion } from 'framer-motion';
import { usePathname } from "next/navigation";


export default function PageMotion({children}) {
    const pathName = usePathname();

    return (
        <>
            <AnimatePresence>
                <motion.div className="motionWrap"
                    key={pathName}
                    initial={{ opacity: 0.9, scale: 0.95 }}
                    animate={{ opacity: 1, scale: [0.9, 1] }}
                    // initial={{ opacity: 0.9, x: '100%' }}
                    // animate={{ opacity: 1, x: ['100%', '-3%', 0] }}
                    exit={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 0.4 }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </>
    )
};