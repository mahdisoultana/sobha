import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
const variant: Variants = {
  animate: { scaleY: 1, transition: { duration: 0.5, delayChildren: 0.5 } },
  initial: { scaleY: 0 },
  exit: { scaleY: 0, transition: { duration: 0.6, delayChildren: -0.1 } },
};
interface SlideProps extends React.ComponentPropsWithoutRef<'div'> {
  className?: string;
  children: ReactNode;
}
function Slide({ children, className = 'bg-gray-900', ...rest }: SlideProps) {
  return (
    <div {...rest}>
      <motion.div
        variants={variant}
        initial="initial"
        animate="animate"
        exit="exit"
        className={`fixed origin-bottom top-0 left-0  h-screen w-full ${className} z-[100]`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1 } }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Slide;
