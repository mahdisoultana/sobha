import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useReducer } from 'react';
import { FcSettings } from 'react-icons/fc';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { MdOutlineRemoveCircle } from 'react-icons/md';
const variantC: Variants = {
  animate: { opacity: 1 },
  initial: { opacity: 0 },
  exit: { opacity: 0 },
};
function SettingButton() {
  const [isOpen, toggle] = useReducer((s) => !s, false);
  return (
    <div className=" absolute top-4 right-4">
      <button className="text-4xl " onClick={toggle}>
        <FcSettings />
      </button>
      <AnimatePresence>
        {isOpen && (
          <ul className=" absolute top-0 right-[110%]  w-[200px] text-lg rounded-lg overflow-hidden">
            <motion.li
              variants={variantC}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full h-[40px] flex items-center justify-center hover:bg-blue-500 focus-within:bg-blue-500 focus:bg-blue-500 hover:text-white focus-within:text-white focus:text-white bg-blue-100 p-2 border-b border-b-gray-800 group"
            >
              <HiOutlineViewGridAdd className="group-focus-within:text-white group-focus-visible:text-white group-active:text-white group-hover:text-white text-blue-500 absolute right-2 text-2xl" />
              إضافة
            </motion.li>
            <motion.li
              variants={variantC}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full h-[40px] flex items-center justify-center hover:text-white focus-within:text-white focus:text-white hover:bg-blue-500 focus-within:bg-blue-500 focus:bg-blue-500 bg-blue-100 p-2 group "
            >
              حذف
              <MdOutlineRemoveCircle className="group-focus-within:text-white group-focus-visible:text-white group-active:text-white group-hover:text-white text-red-500 absolute right-2 text-2xl" />
            </motion.li>
          </ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SettingButton;
