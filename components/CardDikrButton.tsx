import { useMotionValue } from 'framer-motion';
import { useAdrak } from '../state/store';

function CardDikrButton({ text, id }: { text: string; id: string }) {
  const setSelected = useAdrak((s) => s.setSelected);
  const y = useMotionValue(0);
  return (
    // <Reorder.Item value={id} id={id} style={{ y }}>
    <button
      className="mb-5 w-full focus-within:opacity-90   hover:opacity-80 rounded  text-gray-900 text-2xl flex items-center justify-center p-2 bg-gray-100"
      onClick={() => {
        setSelected(id);
      }}
    >
      {text}
    </button>
    // </Reorder.Item>
  );
}

export default CardDikrButton;
