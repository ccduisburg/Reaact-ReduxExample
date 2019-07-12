import { createStore } from 'redux';
import { rootReducer } from './rootReducer';
//bağlanma işlemini redux'ın özel fonksiyonları(combineReducers, createStore vs.) halledecek.
export const store = createStore(
  rootReducer
);