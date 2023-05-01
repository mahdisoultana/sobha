import { motion } from 'framer-motion';
import { useCounter } from '../state/store';
function Counter() {
  const count = useCounter((s) => s.count);
  return (
    <motion.div
      key={count}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, y: 10 }}
      className=" text-8xl font-light text-white"
    >
      {count}
    </motion.div>
  );
}

export default Counter;
