import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useAdrak } from '../state/store';
import CloseButton from './CloseButton';
import Slide from './animate/Slide';
function NiyatDikr() {
  const getDikr = useAdrak((s) => s.getDikr);
  const setDikrNiya = useAdrak((s) => s.setDikrNiya);
  const [dikrS, setDikrS] = useState('33');
  const dikr = getDikr();
  return (
    <AnimatePresence>
      {dikr && (
        <Slide className=" text-center bg-gray-800 flex items-center justify-center flex-col p-4 text-white">
          <CloseButton />
          <div className="flex items-center justify-center flex-col p-4 space-y-20">
            <p className="">
              <span className="block text-xl"> نية قول</span>
              {dikr ? (
                <span className="block text-3xl mt-6">{dikr.text}</span>
              ) : null}
            </p>
            <input
              type="number"
              className="text-3xl text-center w-[140px] h-[50px] text-black"
              placeholder="33"
              value={dikrS}
              onChange={(e) => setDikrS(e.target.value)}
            />
            <button
              disabled={!dikrS}
              className="disabled:opacity-10 disabled:cursor-not-allowed text-2xl bg-blue-500 shadow py-2 rounded  text-white flex items-center justify-center w-[280px] grow-1"
              onClick={() => setDikrNiya(dikrS)}
            >
              {' '}
              بدأ
            </button>
          </div>
        </Slide>
      )}
    </AnimatePresence>
  );
}

export default NiyatDikr;
