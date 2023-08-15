import { MEMBERS_CONFIG } from '@/config/examples';
import { useEffect, useState } from 'react';

export default function useRenderInterval({
  membersConfig,
  renderInterval = 1000,
}: {
  membersConfig: MEMBERS_CONFIG;
  renderInterval?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(() => count + 1);
    }, renderInterval);

    if (count === membersConfig.length - 1) clearInterval(interval);

    return () => clearInterval(interval);
  }, [count, membersConfig.length, renderInterval]);

  return count;
}
