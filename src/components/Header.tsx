import logo from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPieChart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const svgVariant={
  hidden:{
    opacity:0,
    rotateZ:-180
  },
  visible:{
    opacity:1,
    rotateZ:0,
    transition:{duration:0.7}
  }
}
export const Header = ()=>{
    return (<>
    <header className="header">
      <motion.div variants={svgVariant} initial="hidden" animate="visible"
       drag
       dragConstraints={{left:0,top:0,right:0,bottom:0}}
       dragElastic={0.7}
      //  higher number easily dragable
       >
        {/* <Link to='/home'> */} 
        {/* can;t use link when use drag */}
          <FontAwesomeIcon icon={faPieChart} className='homeicon' />
          {/* </Link> */}
      </motion.div>
        <motion.div className='headerContent'
         initial={{y:-250}}
        animate={{y:-10}}
        transition={{delay:0.4,type:'spring',stiffness:120}} //stiffness set sprin stiffness
        >
          <h2>Pizza Fire</h2>
        </motion.div>
        </header>
    </>)
}