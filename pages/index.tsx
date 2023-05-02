import CardDikrButton from '../components/CardDikrButton';
import NiyatDikr from '../components/NiyatDikr';
import OverLay from '../components/OverLay';
import SettingButton from '../components/settings/SettingButton';
import { useAdrak } from '../state/store';
export default function Home() {
  const { adkar } = useAdrak();

  return (
    <div className="min-h-screen bg-gray-900 rtl:text-right">
      <SettingButton />
      <article className="w-full min-h-[80vh] p-4 m-auto max-w-xl  flex items-center justify-center flex-col">
        {/* <Reorder.Group axis="y" onReorder={setAdkar} values={adkar}> */}
        {adkar.map((item, i) => (
          <CardDikrButton key={item.id} id={item.id} text={item.text} />
        ))}
        {/* </Reorder.Group> */}
      </article>
      <NiyatDikr />
      <OverLay />
    </div>
  );
}
