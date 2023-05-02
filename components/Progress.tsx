import { useAdrak, useCounter } from '../state/store';

function Progress() {
  const count = useCounter((s) => s.count);
  const dikrNiya = useAdrak((s) => s.dikrNiya);
  // TODO we need to add and populate Goal Counter

  return (
    <div className="absolute bottom-0 left-0 w-full h-[14px] bg-gray-100/20  group hover:bg-gray-100/30 focus:bg-gray-100/30 focus-within:bg-gray/30-100">
      <span
        className="block h-full bg-green-500/70 group-hover:bg-green-500 group-focus:bg-green-500 group-focus-within:bg-green-500"
        style={{ width: (count / (dikrNiya ? +dikrNiya : 100)) * 100 + '%' }}
      />
      <small className="absolute bottom-[115%] left-1 text-white/80 group-hover:text-white group-focus:text-white group-focus-within:text-white">
        0
      </small>
      {/*  */}
      <small className="absolute bottom-[115%] right-1 text-white/80 group-hover:text-white group-focus:text-white group-focus-within:text-white">
        {dikrNiya}
      </small>
    </div>
  );
}

export default Progress;
