import CardDikrButton from '../components/CardDikrButton';
import NiyatDikr from '../components/NiyatDikr';
import OverLay from '../components/OverLay';
import { useAdrak } from '../state/store';

export default function Home() {
  const { adkar } = useAdrak();

  return (
    <div className="min-h-screen bg-gray-900 rtl:text-right">
      <article className="w-full min-h-[80vh] p-4 m-auto max-w-xl  flex items-center justify-center flex-col">
        {adkar.map((item, i) => (
          <CardDikrButton key={item.id} id={item.id} text={item.text} />
        ))}
      </article>
      <NiyatDikr />
      <OverLay />
    </div>
  );
}
