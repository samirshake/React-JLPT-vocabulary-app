import { action, thunk } from 'easy-peasy';
import { fetchWords } from '../api/wordsApi';

const wordsModel = {
  data: [],
  loading: false,
  error: null,

  setData: action((state, payload) => {
    state.data = payload;
  }),
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
  setError: action((state, payload) => {
    state.error = payload;
  }),

  fetchWordsByLevel: thunk(async (actions, level) => {
    actions.setLoading(true);
    try {
      const words = await fetchWords(level);
      actions.setData(words.words);
      actions.setLoading(false);
    } catch (err) {
      actions.setError(err);
      actions.setLoading(false);
    }
  })
};

export default wordsModel;
