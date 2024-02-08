import React, { useEffect, useRef } from "react";
import {motion, useInView, useAnimation} from "framer-motion"

const RevealCard = ({children}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const mainControls = useAnimation();

    useEffect(()=>{
        if (isInView) {
            mainControls.start('visi')
        }
    }, [isInView])
    const iconVariants = {

    }
    return ( 
        <div ref={ref}>
            <motion.div
                variants={{
                    hidd:{
                        opacity:0,
                        filter:"blur(10px)",
                        y: 175
                    },
                    visi:{
                        opacity:1,
                        filter:"blur(0px)",
                        y: 0
                    }
                }}
                initial="hidd"
                animate={mainControls}
                transition={{
                    duration:1
                }}
            >
                {children}
            </motion.div>
        </div>
     );
}
 
export default RevealCard;