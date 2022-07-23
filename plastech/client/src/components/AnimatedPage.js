import { motion } from 'framer-motion';

const transition = {
  // type: "tween",
  // ease: "anticipate",
  duration: 0.1
}

const animations = {
  initial: {opacity: 0, x:100},
  in: {opacity: 1, x: 0},
  out: {opacity: 0, x:-100},
  transition: {transition}
}

function AnimatedPage(props) {
  return(
    <motion.div
      variants={animations}
      initial="initial"
      animate="in"
      exit="out"
      transition="transition"
    >
      {props.children}
    </motion.div>
  );
};

export default AnimatedPage;