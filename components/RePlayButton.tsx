import { motion } from 'framer-motion';
import { IoReloadCircleSharp } from 'react-icons/io5';
import { useCounter } from '../state/store';
function RePlayButton() {
  const resetCounter = useCounter((s) => s.resetCounter);
  return (
    <motion.button
      layout
      onClick={() => {
        console.log('click');
        resetCounter();
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 2, 1], opacity: 1 }}
      className="select-auto pointer-events-auto w-[100px] h-[100px] rounded-full  text-white   z-[1000] flex items-center justify-center mt-[40px]"
    >
      <IoReloadCircleSharp className="text-[5rem]" />
    </motion.button>
  );
}

export default RePlayButton;
