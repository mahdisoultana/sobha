import { Variants, motion } from 'framer-motion';
import Link from 'next/link';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
const variantC: Variants = {
  animate: { opacity: 1 },
  initial: { opacity: 0 },
  exit: { opacity: 0 },
};

function AddButton({ toggle }: { toggle: React.DispatchWithoutAction }) {
  return (
    <Link href="/addAdkar">
      <motion.li
        onClick={toggle}
        variants={variantC}
        initial="initial"
        animate="animate"
        exit="exit"
        className="rounded-tl-lg rounded-tr-lg w-full h-[40px] flex items-center justify-center hover:bg-blue-500 focus-within:bg-blue-500 focus:bg-blue-500 hover:text-white focus-within:text-white focus:text-white bg-blue-100 p-2  group cursor-pointer "
      >
        <HiOutlineViewGridAdd className="group-focus-within:text-white group-focus-visible:text-white group-active:text-white group-hover:text-white text-blue-500 absolute right-2 text-2xl" />
        إضافة
      </motion.li>
    </Link>
  );
}

export default AddButton;
