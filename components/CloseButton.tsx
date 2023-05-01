import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { useAdrak, useCounter } from '../state/store';
function CloseButton() {
  const resetDikr = useAdrak((s) => s.resetDikr);

  const resetCounter = useCounter((s) => s.resetCounter);

  return (
    <motion.button
      initial={{ x: ' 100%', opacity: 0 }}
      animate={{
        x: '0%',
        opacity: 1,
        transition: { delay: 0.4, type: 'linear' },
      }}
      className="absolute top-0 right-0 w-12 h-12 bg-red-500  flex items-center justify-center text-gray-900"
      onClick={() => {
        resetDikr();
        resetCounter();
      }}
    >
      <IoClose size={50} />
    </motion.button>
  );
}

export default CloseButton;
