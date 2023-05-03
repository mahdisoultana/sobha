import { AnimatePresence, motion } from 'framer-motion';
import { useReducer } from 'react';
import { FcSettings } from 'react-icons/fc';
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';

function SettingButton() {
  const [isOpen, toggle] = useReducer((s) => !s, false);

  return (
    <>
      <div className=" absolute top-4 right-4 z-[12]">
        <button
          className="text-4xl w-[50px] h-[50px] flex items-center justify-center  cursor-pointer z-10 shadow"
          onClick={toggle}
        >
          <FcSettings className="pointer-events-none" />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              layout
              className=" shadow-lg  absolute top-0 right-[110%]  w-[200px] text-lg rounded-lg overflow-hidden"
            >
              <AddButton toggle={toggle} />
              <RemoveButton toggle={toggle} />
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      {isOpen && (
        <div
          onClick={toggle}
          // bg-transparent for debug the close overlay menu
          className="bg-transparent fixed top-0 left-0 w-full h-screen z-[11]"
        />
      )}
    </>
  );
}

export default SettingButton;
