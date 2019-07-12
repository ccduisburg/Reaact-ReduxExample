import { combineReducers } from 'redux';
import { ogrenciReducer } from './reducers/ogrenciReducer';
import { sinifReducer } from './reducers/sinifReducer';
import { dersReducer } from './reducers/dersReducer';
//Tüm reducer'lar rootReducer üzerinden store'a bağlanacak
const allReducers = {
  ogrenciReducer,
  sinifReducer,
  dersReducer
};

export const rootReducer = combineReducers(allReducers);//combinereducer :redux un özel bir fonksiyonu dur. reducer lari ( ogrenciReducer,
//sinifReducer) rootReducer üzerinden store ile bagliyor.
//react-redux'ın Provider kütüphanesi tüm React uygulamasında kullanılacak olan store'u uygulamaya bildiriyor.