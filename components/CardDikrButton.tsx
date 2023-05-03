import { motion } from 'framer-motion';
import { MdOutlineRemoveCircle } from 'react-icons/md';
import { useAdrak } from '../state/store';
function CardDikrButton({ text, id }: { text: string; id: string }) {
  const setSelected = useAdrak((s) => s.setSelected);
  const setAdkar = useAdrak((s) => s.setAdkar);
  const editMode = useAdrak((s) => s.editMode);
  console.log(editMode);
  return (
    <motion.button
      animate={
        editMode
          ? {
              rotate: [0.5, -0.5],
              transition: {
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 0.02,
              },
            }
          : { rotate: 0 }
      }
      className={`z-[11] mb-5 w-full focus-within:opacity-90  relative   rounded   text-xl flex items-center justify-center p-2  ${
        editMode
          ? '  text-gray-900  bg-red-50 hover:bg-white '
          : 'hover:opacity-80 text-gray-900 bg-gray-100'
      } `}
      onClick={() => {
        setSelected(id);
      }}
    >
      {editMode && (
        <span
          className="block w-[40px] h-[40px]  absolute left-4 justify-center flex items-center "
          onClick={() =>
            setAdkar((adkar) => adkar.filter((dikr) => dikr.id !== id))
          }
        >
          <MdOutlineRemoveCircle className=" group-focus-within:text-white group-focus-visible:text-white group-active:text-white group-hover:text-white text-red-500 absolute right-2 text-4xl" />
        </span>
      )}

      {text}
    </motion.button>
  );
}

export default CardDikrButton;
