import { Box } from "@mui/material";
import { motion } from "framer-motion"

const transition = (OgComponent) => {
    return () => (
        <>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                style={{position: "absolute", width: "100%", height: "100vh", backgroundColor: "white", zIndex: 1000000}}
            >
            </motion.div>
            <OgComponent />


        </>
    );
}

export default transition;

const pageVariants = {
    initial: {
        opacity: 1,
        x: 0,
        scale: 1
    },
    in: {
        opacity: 1,
        x: "100vw",
        scale: 1
    },
    out: {
        opacity: 1,
        x: 0,
        scale: 1
    }
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1
};

