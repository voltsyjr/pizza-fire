import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import {Routes, Route,useLocation} from 'react-router-dom';
import { Base } from './components/Base';
import { Topping } from './components/Topping';
import { Order } from './components/Order';
import { motion,AnimatePresence } from 'framer-motion';
import { Modal } from './components/Modal';

export type PizzaProp={
  Base:string,
  Toppings:string[]
}
function App() {
  // const [pizza,setPizza]=useState<PizzaProp>({} as PizzaProp);
  const [pizza,setPizza]=useState<PizzaProp>({ Base: "", Toppings: [] });
  const [showModal,setShowModal]=useState<Boolean>(false);
  const location=useLocation();
  const addBase=(Base:string)=>{
    setPizza({
      ...pizza,
      Base
    })
    console.log(pizza.Base)
  }
  const addTopping=(topping:string)=>{
    let newToppings:string[];
    if(!pizza.Toppings.includes(topping)){
      newToppings=[...pizza.Toppings, topping]
    }else{
      newToppings=pizza.Toppings.filter(item=>item!==topping);
    }
    setPizza({
      ...pizza,
      Toppings:newToppings
    })
    console.log(pizza.Toppings)
  }
  return (
    <div> 
      
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence exitBeforeEnter onExitComplete={()=>{setShowModal(false)}}>
        <Routes location={location} key={location.key}>
          <Route path='/' element={<Home   />}></Route>
          <Route path='/home' element={<Home  />}></Route>
          <Route path='/base' element={<Base pizza={pizza} clickHandler={addBase} />}></Route>
          <Route path='/topping' element={<Topping pizza={pizza} clickHandler={addTopping} />}></Route>
          <Route path='/order' element={<Order pizza={pizza} setShowModal={setShowModal}/>}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
