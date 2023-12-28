import { useEffect } from 'react';
import { initAdkar, useAdrak } from '../state/store';
import CardDikrButton from './CardDikrButton';

function ListAdkar() {
  const { adkar, setEditMode, setAdkar } = useAdrak();
  const adkarLength = adkar.length;
  useEffect(() => {
    if (adkarLength == 0) setEditMode(false);
  }, [adkarLength]);
  return (
    <article className="  p-4 m-auto max-w-xl  flex items-center justify-center flex-col relative z-1 mt-[70px]">
      {adkar.length > 0 ? (
        adkar.map((item) => (
          <CardDikrButton key={item.id} id={item.id} text={item.text} />
        ))
      ) : (
        <div className="flex justify-center items-center flex-col">
          <p className="text-xl text-white tracking-wider leading-10 p-4 text-center">
            ليوجد اذكار، قوم بزيادت اذكراك الخاصة
          </p>
          <button
            className="disabled:opacity-10 disabled:cursor-not-allowed text-2xl bg-blue-500 shadow py-2 rounded  text-white flex items-center justify-center w-[280px] grow-1"
            onClick={() => {
              setAdkar(initAdkar);
            }}
          >
            الأذكار الأساسية
          </button>
        </div>
      )}
    </article>
  );
}

export default ListAdkar;
