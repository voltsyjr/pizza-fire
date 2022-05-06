import { PizzaProp } from "../App"
import { motion } from "framer-motion"
import {useEffect} from 'react'

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
            // delay:0.5,
            mass:0.4,
            damping:8,
            when:"beforeChildren",       //animate children after parent animation
            staggerChildren:0.4          // time difference between childrens
        }
    },
    exit:{
        x:'-100vw',
        transition:{
            ease:'easeInOut'
        }
    }
}
const childVariant={
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1
    }
}
type orderProp={
    pizza:PizzaProp,
    setShowModal:(e:Boolean)=>void
}
export const Order = ({pizza,setShowModal}:orderProp)=>{
    useEffect(()=>{
        setTimeout(()=>{
            setShowModal(true);
        },5000)
    },[])
    return (
        <>
            <motion.div className="Container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
                <div>

                    <h2>Thank you for your order :)</h2>
                    <motion.p variants={childVariant}>You ordered a {pizza.Base} pizza with:</motion.p>
                    <motion.ul variants={childVariant}>
                        {pizza.Toppings.map(topping=>(
                            <li>{topping}</li>
                        ))}
                    </motion.ul>
                </div>
            </motion.div>
        </>
    )
}