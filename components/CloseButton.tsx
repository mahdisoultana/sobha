import { motion } from 'framer-motion';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';
import { useAdrak, useCounter } from '../state/store';
function CloseButton({ link = null }: { link?: null | string }) {
  const resetDikr = useAdrak((s) => s.resetDikr);
  const dikrNiya = useAdrak((s) => s.dikrNiya);
  const { count } = useCounter();
  const dikrNiyaNum = dikrNiya ? +dikrNiya : 0;
  const resetCounter = useCounter((s) => s.resetCounter);
  const ButtonJSX = (
    <motion.button
      layoutId="closeButton"
      className="absolute top-0 right-0 w-12 h-12 bg-red-500  flex items-center justify-center text-gray-900"
      onClick={() => {
        resetDikr();
        resetCounter();
      }}
    >
      <IoClose size={50} />
    </motion.button>
  );
  return link ? (
    <Link href={link}>
      <>{ButtonJSX}</>
    </Link>
  ) : (
    ButtonJSX
  );
}

export default CloseButton;
