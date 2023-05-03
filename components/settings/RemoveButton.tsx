import { Variants, motion } from 'framer-motion';
import { MdOutlineRemoveCircle } from 'react-icons/md';
import { useAdrak } from '../../state/store';
const variantC: Variants = {
  animate: { opacity: 1 },
  initial: { opacity: 0 },
  exit: { opacity: 0 },
};
function RemoveButton({ toggle }: { toggle: React.DispatchWithoutAction }) {
  const setEditMode = useAdrak((s) => s.setEditMode);
  const adkar = useAdrak((s) => s.adkar);
  return (
    <>
      {adkar.length > 0 && (
        <motion.li
          onClick={() => {
            setEditMode((prevMode) => !prevMode);
            toggle();
          }}
          variants={variantC}
          initial="initial"
          animate="animate"
          exit="exit"
          className="rounded-bl-lg rounded-br-lg w-full h-[40px] flex items-center justify-center hover:text-white focus-within:text-white focus:text-white hover:bg-blue-500 focus-within:bg-blue-500 focus:bg-blue-500 bg-blue-100 p-2 group
          border-t border-t-gray-900  cursor-pointer "
        >
          حذف
          <MdOutlineRemoveCircle className="group-focus-within:text-white group-focus-visible:text-white group-active:text-white group-hover:text-white text-red-500 absolute right-2 text-2xl" />
        </motion.li>
      )}
    </>
  );
}

export default RemoveButton;
