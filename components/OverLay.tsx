import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useEffect } from 'react';
import Confetti from 'react-confetti';
import { useAdrak, useCounter } from '../state/store';
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
  console.log({ isExpire });
  return (
    <AnimatePresence>
      {selected && dikrNiyaNum && (
        <motion.section
          variants={variant}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="fixed origin-bottom top-0 left-0 bg-gray-900 h-screen w-full "
          //   onClick={increment} -> TS error increment accept void | number 🐱‍🐉
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
            {count == +dikrNiyaNum && <RePlayButton />}
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default OverLay;
