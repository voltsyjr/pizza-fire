import {PizzaProp} from '../App';
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
type BaseProp={ 
    pizza:PizzaProp,
    clickHandler:(Base:string)=>void
}
const containerVariants={
    hidden:{
        opacity:0,
        x:'100vw'
    },
    visible:{
        opacity:1,
        x:0,
        transition:{
            type:'spring',
            delay:0.5
        }
    },
    exit:{
        x:'-100vw',
        transition:{
            ease:'easeInOut'
        }
    }
}
const nextVariant ={
    hidden:{
        x:'-100vw'
    },
    visible:{
        x:'0',
        transition:{
            type:'spring',
            stiffness:120
        }
    }
}
const buttonVariant={
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
export const Base=({pizza,clickHandler}:BaseProp)=>{
    // pizza.Base='Classic';
    const bases=['Classic','Thin & Crispy','Thick Crust']
    return (
        <>
            <motion.div className="Container"
            // initial={{x:'100vw'}}
            //     animate={{x:0}}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
                // transition={{type:'spring', delay:0.5}} //because it is included in visible object
            >
                <div>

                    <h2><em>Step1: Choose Your Base</em></h2>
                    <ul>
                        {
                            bases.map(base=>{
                                let liClass=pizza.Base===base?'active':'';
                                return(
                                    <motion.li key={base} className={liClass+' cur'} onClick={()=>{clickHandler(base)}}
                                    whileHover={{scale:1.05,color:'rgb(246 189 12)'}}
                                    > <span>&gt;</span> {base}</motion.li>
                                )
                            })
                        }
                    </ul>
                    
                    {pizza.Base && ( 
                        <motion.div
                        variants={nextVariant}
                        // initial="hidden" //it automatically look for initial="hidden" and animate="visible" because it is used in parent
                        // animate="visible"
                        // initial={{x:'-100vw'}}
                        // animate={{x:0}}
                        // transition={{type:'spring',stiffness:120}}
                        >
                            <Link to='/Topping'><motion.button
                            // whileHover={{scale:1.1,
                            //     // textShadow:"0px 0px 7px rgb(255,255,255)",
                            //     boxShadow:"0px 0px 8px rgb(255,255,255)"
                            // }}
                            variants={buttonVariant}
                            whileHover="hover"
                            className='basebtn' >Next</motion.button></Link>
                        </motion.div>
                    )}
                    
                </div>
            </motion.div>
        </>
    )
}