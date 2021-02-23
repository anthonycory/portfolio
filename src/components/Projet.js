import React from 'react'
import { motion} from 'framer-motion'
import  {PageVariants} from '../animation'
import Carousel from 'react-elastic-carousel';



function Projet() {

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemproject = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };


  const items = [{id: 1, title: 'item #1'},
  {id: 2, title: 'item #2'},
  {id: 3, title: 'item #3'},
  {id: 4, title: 'item #4'},
  {id: 5, title: 'item #5'}]

    return (
      <>
      <div className="banniere">
      <div style={{width: "100%", display: "flex", alignItems: 'center', flexDirection: "column"}}>
      <div className="container">
          <motion.h1 initial="out" animate="in" exit="out" variants={PageVariants} className="title">PROJETS</motion.h1>
      </div>
      </div>
      </div>
      <motion.div variants={container} initial="hidden" animate="visible" className="container-projet">
      <Carousel 
        itemsToScroll={4} 
        itemsToShow={4}>
            {items.map(item => (
      <motion.div className="card-projet" variants={itemproject}>
        <div className=""style={{backgroundImage: 'url(https://via.placeholder.com/700)', width: 300, height: 300, backgroundSize: "contain" }}></div>
        <h3>Hello</h3>
      </motion.div>
    ))}
      </Carousel>
      </motion.div>
    </>
    )
}

export default Projet;