import ListAdkar from '../components/ListAdkar';
import NiyatDikr from '../components/NiyatDikr';
import OverLay from '../components/OverLay';
import EditMode from '../components/settings/EditMode';
import SettingButton from '../components/settings/SettingButton';
import { useAdrak } from '../state/store';
export default function Home() {
  const editMode = useAdrak((s) => s.editMode);
  return (
    <>
      <ListAdkar />
      <EditMode />
      <SettingButton />
      {!editMode && (
        <>
          <NiyatDikr />
          <OverLay />
        </>
      )}
    </>
  );
}
