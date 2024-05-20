import { createStore } from 'easy-peasy';
import wordsModel from './wordsModel';

const storeModel = {
  words: wordsModel
};

const store = createStore(storeModel);

export default store;
