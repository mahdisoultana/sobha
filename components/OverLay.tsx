import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useEffect } from 'react';
import Confetti from 'react-confetti';
import { IoClose } from 'react-icons/io5';
import { useAdrak, useCounter } from '../state/store';
import Slide from './animate/Slide';
import CloseButton from './CloseButton';
import Counter from './Counter';
import useTime from './hooks/useTime';
import Progress from './Progress';
import RePlayButton from './RePlayButton';
import Text from './Text';
const variant: Variants = {
  animate: { scaleY: 1, transition: { duration: 0.5, delayChildren: 0.5 } },
  initial: { scaleY: 0 },
  exit: { scaleY: 0, transition: { duration: 0.6, delayChildren: -0.1 } },
};
const variantC: Variants = {
  animate: { opacity: 1 },
  initial: { opacity: 0 },
  exit: { opacity: 0 },
};
function OverLay() {
  const { dikrNiya, selected } = useAdrak();

  const { increment, count } = useCounter();
  const { isExpire, run } = useTime({ time: 3 });
  const dikrNiyaNum = dikrNiya ? +dikrNiya : 0;
  useEffect(() => {
    if (count == dikrNiyaNum) {
      run();
    }
  }, [count]);
  return (
    <AnimatePresence>
      {selected && dikrNiyaNum && (
        <Slide
          // onClick={increment} -> TS error increment accept void | number 🐱‍🐉
          onClick={() => {
            if (count < dikrNiyaNum) {
              increment();
            }
          }}
        >
          <CloseButton />
          {count == +dikrNiyaNum && !isExpire && (
            <Confetti width={window.innerWidth} height={window.innerHeight} />
          )}
          <motion.div
            layout
            variants={variantC}
            className="p-2 h-screen flex items-center justify-center flex-col opacity-100 select-none"
          >
            <Progress />
            <Counter />
            <Text />
            <div className="flex items-center justify-center space-x-4">
              {count == +dikrNiyaNum && <RePlayButton />}
              {count == +dikrNiyaNum && <CloseBtn2 />}
            </div>
          </motion.div>
        </Slide>
      )}
    </AnimatePresence>
  );
}

function CloseBtn2() {
  const resetDikr = useAdrak((s) => s.resetDikr);
  const resetCounter = useCounter((s) => s.resetCounter);
  return (
    <motion.button
      layoutId="closeButton"
      onClick={() => {
        resetDikr();
        resetCounter();
      }}
      className="  select-auto pointer-events-auto w-[65px] h-[65px] rounded-full  text-white   z-[1000] flex items-center justify-center mt-[40px] bg-red-500"
    >
      <IoClose size={50} />
    </motion.button>
  );
}

export default OverLay;
