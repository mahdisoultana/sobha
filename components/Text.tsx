import { motion } from 'framer-motion';
import { useAdrak } from '../state/store';
function Text() {
  const { getDikr } = useAdrak();
  let dikr = getDikr();

  return (
    dikr && (
      <motion.p layout className="text-5xl text-white mt-20">
        {dikr.text}
      </motion.p>
    )
  );
}

export default Text;
