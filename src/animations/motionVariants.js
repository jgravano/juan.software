import { motion } from 'framer-motion';


export const textVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition:{
    duration: 0.25,
    delay: 1,
  }
};

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
  transition: { duration: 0.6 },
};
