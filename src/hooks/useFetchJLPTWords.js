import { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

const useFetchJLPTWords = (level) => {
  const { data, loading, error } = useStoreState(state => state.words);
  const fetchWordsByLevel = useStoreActions(actions => actions.words.fetchWordsByLevel);

  useEffect(() => {
    if (level) {
      fetchWordsByLevel(level);
    }
  }, [level, fetchWordsByLevel]);

  return { data, loading, error };
};

export default useFetchJLPTWords;
