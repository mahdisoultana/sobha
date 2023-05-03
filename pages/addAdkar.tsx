import Link from 'next/link';
import { useState } from 'react';
import { v4 as id } from 'uuid';
import CloseButton from '../components/CloseButton';
import { useAdrak } from '../state/store';
function AddAdkar() {
  const [dikrS, setDikrS] = useState('');
  const addDikr = useAdrak((s) => s.addDikr);
  return (
    <section className=" text-white p-2">
      <CloseButton link="/" />
      <article className="flex items-center justify-center flex-col space-y-20  w-full z-1">
        <p className="">
          <span className="block text-xl mt-6"> أضف أذكار الخاص بك"</span>
        </p>
        <textarea
          className="placeholder-shown:text-xs p-2  text-right w-full  h-[250px] text-black rounded"
          placeholder="استغفر الله ،استغفر الله ،استغفر الله اللهم انت السلام ومنك ...السلام تباركت ياذا الجلال والاكلام"
          value={dikrS}
          onChange={(e) => setDikrS(e.target.value)}
        />
        <Link href="/">
          <button
            disabled={!dikrS}
            className="disabled:opacity-10 disabled:cursor-not-allowed text-2xl bg-blue-500 shadow py-2 rounded  text-white flex items-center justify-center w-[280px] grow-1"
            onClick={() => {
              addDikr({ id: id(), text: dikrS });
            }}
          >
            أضف
          </button>
        </Link>
      </article>
    </section>
  );
}

export default AddAdkar;
