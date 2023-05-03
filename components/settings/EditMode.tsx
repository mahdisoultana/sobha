import { useAdrak } from '../../state/store';

function EditMode() {
  const { editMode, setEditMode } = useAdrak();

  return (
    <>
      {editMode && (
        <div
          onClick={() => setEditMode(false)}
          className="absolute top-0 left-0 w-full h-full bg-blue-800/10 z-10"
        />
      )}
    </>
  );
}

export default EditMode;
