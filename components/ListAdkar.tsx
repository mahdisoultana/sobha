import { useEffect } from 'react';
import { useAdrak } from '../state/store';
import CardDikrButton from './CardDikrButton';

function ListAdkar() {
  const { adkar, setEditMode } = useAdrak();
  const adkarLength = adkar.length;
  useEffect(() => {
    if (adkarLength == 0) setEditMode(false);
  }, [adkarLength]);
  return (
    <article className="w-full  p-4 m-auto max-w-xl  flex items-center justify-center flex-col relative z-1 mt-[70px]">
      {adkar.length > 0 ? (
        adkar.map((item) => (
          <CardDikrButton key={item.id} id={item.id} text={item.text} />
        ))
      ) : (
        <p className="text-xl text-white tracking-wider leading-10 p-4 text-center">
          ليوجد اذكار، قوم بزيادت اذكراك الخاصة
        </p>
      )}
    </article>
  );
}

export default ListAdkar;
