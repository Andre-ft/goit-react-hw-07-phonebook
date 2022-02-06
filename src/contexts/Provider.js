import { useState, useMemo } from 'react';
import Context from './context';

export default function Provider({ children }) {
  const [filter, setFilter] = useState('');
  
  const providerValue = useMemo(() => {
    return { filter, setFilter };
  }, [setFilter, filter]);

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
}
