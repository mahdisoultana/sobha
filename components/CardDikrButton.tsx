import { useAdrak } from '../state/store';

function CardDikrButton({ text, id }: { text: string; id: string }) {
  const setSelected = useAdrak((s) => s.setSelected);
  return (
    <button
      className="mb-5 w-full focus-within:opacity-90   hover:opacity-80 rounded  text-gray-900 text-2xl flex items-center justify-center p-2 bg-gray-100"
      onClick={() => {
        setSelected(id);
      }}
    >
      {text}
    </button>
  );
}

export default CardDikrButton;
