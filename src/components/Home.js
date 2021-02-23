import { motion, } from 'framer-motion'
import React from 'react'
import {PageTransition, PageVariants} from '../animation'
import Typical from 'react-typical'

export default function Home() {
    return (
        <>
        <div className="banniere">
      <div style={{width: "100%", display: "flex", alignItems: 'center', flexDirection: "column"}}>
        <div className="container">
      <motion.h1 initial="out" animate="in" exit="out" variants={PageVariants} className="title">Développeur Front-END</motion.h1>
</div>
        </div>
      </div>
        <div style={{width: "100%", display: "flex", alignItems: 'center', flexDirection: "column"}}>
        <motion.div className="container"  initial="out" animate="in" exit="out" variants={PageVariants} transition={PageTransition} >
            <h1>Bonjour je suis cory anthony</h1>
            <p>
                Développeur auto didacte investi et passioné par la programmation je suis à la recherche d'une alternance dans laquelle je pourrais continuer a me former d'avantage en tant que développeur front-end
            </p>
        </motion.div>
        </div>
        </>
    )
}
