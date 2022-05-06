import { Link } from "react-router-dom"
import { PizzaProp } from "../App"
import {motion} from 'framer-motion'

type toppingProp={
    pizza:PizzaProp,
    clickHandler:(topping:string)=>void
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
export const Topping=({pizza,clickHandler}:toppingProp)=>{
    const toppings=['mushrooms','peppers','onions','olives','extra cheese','tomatoes']
    return(
        <>
            <motion.div className="Container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
                <div>

                    <h2><em>Step1: Choose Your Toppings</em></h2>
                    <ul>
                        {
                            toppings.map(topping=>{
                                let liClass=pizza.Toppings.includes(topping)?'active':'';
                                return(
                                    <motion.li key={topping} className={liClass+' cur'} onClick={()=>{clickHandler(topping)}}
                                    whileHover={{scale:1.05,color:'rgb(246 189 12)'}}
                                    > <span>&gt;</span> {topping}</motion.li>
                                )
                            })
                        }
                    </ul>
                    
                    {
                        <motion.div
                        initial={{x:'-100vw'}}
                        animate={{x:0}}
                        >
                        <Link to='/Order'>
                            <motion.button className='basebtn' 
                                // whileHover={{scale:1.1,
                                //     // textShadow:"0px 0px 7px rgb(255,255,255)",
                                //     boxShadow:"0px 0px 8px rgb(255,255,255)"
                                // }}
                                variants={buttonVariant}
                                whileHover="hover"
                            >Order</motion.button>
                        </Link>
                    </motion.div>
                    }
                    
                </div>
            </motion.div>
        </>
    )
}