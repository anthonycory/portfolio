
import './App.css';
import { Switch, Route, NavLink, useLocation } from "react-router-dom";
import {AnimatePresence, motion} from 'framer-motion'
import React, {useState, useEffect} from 'react'
import Avatar from './assets/loader.png'
import Linkedin from './assets/icon_linkedin.png'
import Github from './assets/icon_github.png'
import Home from './components/Home'
import Projet from './components/Projet'
import anim from './components/anim'
import {PageTransition, PageVariants} from './animation'

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

const item = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1
  }
};


export default function App() {

  const menu = [{
    name: "accueil",
    link: "/",
    exact: true
  }, {
    name: "mes projets",
    link: "/projet",
    exact: null
  },
  {
    name: "contact",
    link: "/contact",
    exact: null
  }
]

  const location = useLocation();

  const [loader, setLoader] = useState(false)
  const [counter, setCounter] = useState(0)

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //       setCounter(counter + 4);
    //       avatar()
    //     }, 100);
    //     if (counter >= 100) {
    //         clearTimeout(timeout)
    //         setLoader(!loader)
    //     }
    //   }, [counter]);

      function avatar() {
        document.getElementById("loader").className = "loader-active";
      }

      if (loader) {
        return (

            <motion.div initial="out" animate="in" exit="out" variants={PageVariants} transition={PageTransition} className="container-loader">
                <p>{counter}%</p>
                <div id="loader" className="loader">
                    <img className="img_load" alt="avatar" src={Avatar}/>
                </div>
                <div className="footer-load">
                Anthony cory - Développeur front-end
                </div>
             </motion.div> 
 
        )
    }else {
  return (
    <React.Fragment>
      <div className="container-header">
        <div className="container-menu">
          {/* <div className="container-avatar">
            <img className="menu-avatar" alt="avatar" src={Avatar}/>
          </div> */}
          <div className="container-social">
          <img className="social-icon" alt="Linkedin" src={Linkedin}/>
          <img className="social-icon" alt="Github" src={Github}/>
          </div>
          <motion.div
          style={{display: "flex"}}
    variants={container}
    initial="hidden"
    animate="visible"
  >
    {menu.map((index) => (
      <motion.li key={index} variants={item} ><NavLink exact={index.exact} className="link" activeClassName='is-active' to={index.link}>{index.name.toUpperCase()}</NavLink></motion.li>
    ))}
  </motion.div>
        </div>
      </div>
      
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                <Route path="/" exact  component={Home}/>
                <Route path="/projet"  component={Projet}/>
                <Route path="/anim" component={anim}/>
            </Switch>
        </AnimatePresence>
        </React.Fragment>
  );
    }
}