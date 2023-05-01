import { useAdrak } from '../state/store';

function Text() {
  const { getDikr } = useAdrak();
  let dikr = getDikr();

  return dikr && <p className="text-5xl text-white mt-20">{dikr.text}</p>;
}

export default Text;
