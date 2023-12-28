import { useEffect } from 'react';
import ListAdkar from '../components/ListAdkar';
import NiyatDikr from '../components/NiyatDikr';
import OverLay from '../components/OverLay';
import EditMode from '../components/settings/EditMode';
import SettingButton from '../components/settings/SettingButton';
import { useAdrak } from '../state/store';
export default function Home() {
  const editMode = useAdrak((s) => s.editMode);
  const setAdkar = useAdrak((s) => s.setAdkar);
  useEffect(() => {
    let value = getLocalStorageItem('adkar');
    if (value) {
      setAdkar(value);
      console.log('Value:', value);
    }
  }, []);
  return (
    <section className="w-full overflow-hidden">
      <ListAdkar />
      <EditMode />
      <SettingButton />
      {!editMode && (
        <>
          <NiyatDikr />
          <OverLay />
        </>
      )}
    </section>
  );
}

function getLocalStorageItem(key: string, defaultValue = null) {
  try {
    // Retrieve the item from localStorage
    const item = localStorage.getItem(key);

    // Check if the item exists and is not null
    if (item !== null) {
      // Parse the item as JSON, return the parsed object
      // Assuming the stored value is a JSON string
      return JSON.parse(item);
    } else {
      // Return the default value if the item doesn't exist
      return defaultValue;
    }
  } catch (error) {
    // Log an error and return the default value in case of any exceptions
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
}
