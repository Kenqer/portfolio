import React, { useEffect, useRef } from "react";
import {motion, useInView, useAnimation} from "framer-motion"

const Reveal = ({children}) => {
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
                        x: -75
                    },
                    visi:{
                        opacity:1,
                        x: 0
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
 
export default Reveal;
