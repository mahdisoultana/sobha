import { useCallback, useEffect, useState } from 'react';

function useTime({
  time = 1,
  autoStart = false,
}: {
  time: number;
  autoStart?: boolean;
}) {
  const [isExpire, setIsExpire] = useState(true);

  const run = useCallback(() => {
    let timer: any;

    clearTimeout(timer);
    setIsExpire(false);

    timer = setTimeout(() => {
      setIsExpire(true);

      clearTimeout(timer);
    }, time * 1000);
  }, []);

  useEffect(() => {
    if (autoStart) {
      run();
    }
  }, []);

  return { isExpire, run };
}

export default useTime;
