'use client'

import { AnimatePresence } from "framer-motion";
import { motion } from 'framer-motion';
import { usePathname } from "next/navigation";


export default function PageMotion({children}) {
    const pathName = usePathname();

    return (
        <>
            {
                pathName === '/' ?

                    <AnimatePresence>

                            {children}

                    </AnimatePresence>

                :

                    <AnimatePresence>
                        {/* <motion.div className="motionWrap"
                            key={pathName}
                            initial={{ right: '-100%', opacity: 0 }}
                            animate={{ right: 0, opacity: 1 }}
                            exit={{ right: 0, opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 0.2 }}
                        >
                            {children}
                        </motion.div> */}

                        <motion.div className="motionWrap"
                            key={pathName}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1.0 }}
                            exit={{ opacity: 1, scale: 1.0 }}
                            transition={{ ease: "easeOut", duration: 0.2 }}
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>


            }
        </>
    )
};