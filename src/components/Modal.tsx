import { Link } from "react-router-dom";
import { motion,AnimatePresence } from "framer-motion";
type modalProp = {
    showModal:Boolean,
    setShowModal:(e:Boolean)=>void
}
const backdropVariant={
    visible:{
        opacity:1
    },
    hidden:{
        opacity:0
    }
}
const modalVariant={
    hidden:{
        y:'-100vh',
        opacity:0
    },
    visible:{
        y:200,
        opacity:1,
        transition:{
            delay:0.5
        }
    }
}
export const Modal=({showModal,setShowModal}:modalProp)=>{

    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div className="backdrop"
                variants={backdropVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
                >
                    <motion.div className="modal"
                        variants={modalVariant}

                    >
                        <p>Want to make another order?</p>
                        <Link to='/home'>
                            <motion.button onClick={()=>{setShowModal(false)}}
                            whileHover={{scale:1.1}}
                            >
                                Place Another Order
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}