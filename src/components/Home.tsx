import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader } from "./Loader";
const buttonVariants={
    visible:{
        // x:-20 
        x:[0,-20,20,-20,20,0], //this is key frames and each value in array represnent key frame and each keyframe is executed by on by one
        transition:{
            delay:1
        }
    },
    hover:{
        // scale:1.1 
        // scale:[1,1.1,1,1.1,1,1.1,1],  //this is key frames
        scale:1.1,
        textShadow:"0px 0px 7px rgb(255,255,255)",
        boxShadow:"0px 0px 8px rgb(255,255,255)",
        transition:{
            duration:0.3,
            // yoyo:10     //this run that scale 10 times repeatedly 1.1,1,1.1,1,1.1 and so on 10 times
            yoyo:Infinity     //this run that scale 10 times repeatedly 1.1,1,1.1,1,1.1 and so on 10 times
        }
    }
}
const containerVariants={
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{
            delay:0.5,duration:1.5
        }
    },
    exit:{
        x:'-100vw',
        transition:{
            ease:'easeInOut'
        }
    }
}
export const Home=()=>{
    return(
        <>
            <motion.div className="homepage"
            // initial={{opacity:0}}
            // animate={{opacity:1}}
            // transition={{delay:0.5,duration:1.5}}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
                <motion.h1
                 animate={{}}
                 >Welcome to Pizza Fire</motion.h1>
                <div className="bttun">
                    <Link to='/base'><motion.button
                    //  whileHover={{scale:1.1,
                    //     textShadow:"0px 0px 7px rgb(255,255,255)",
                    //     boxShadow:"0px 0px 8px rgb(255,255,255)"
                    // }}
                    variants={buttonVariants}
                    animate="visible"
                    whileHover="hover"
                     >Order Your Pizza</motion.button>
                    </Link>
                    <Loader />
                </div>
            </motion.div>
        </>
    )
}