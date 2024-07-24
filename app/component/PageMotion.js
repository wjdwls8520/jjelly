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
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1.0 }}
                            exit={{ opacity: 1, scale: 1.0 }}
                            transition={{ ease: "easeOut", duration: 0.3 }}
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>


        
        </>
    )
};