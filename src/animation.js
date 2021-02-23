export const PageVariants = {
    initial: {
      opacity: 0,
      // scale: 0.5,
       y: "-100%",

    },
    in: {
      opacity: 1,
      // scale: 1,
       y: 0,
    },
    out: {
      opacity: 0,
      // scale: 0.5,
       y: "100%",
    }
  }
  
  export const PageTransition = {
    type: "spring",
    ease: "",
    stiffness: 100,
    duration: 5
  }