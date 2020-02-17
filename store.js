import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
const storage = AsyncStorage;
//reducers
import cardDataReducer from './src/reducers/cardData';
// import userReducer from './src/reducers/user';
//persist config
const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: []
}
const cardDataPersistConfig = {
  key: 'cardData',
  storage,
  blacklist: [],
}
// const userPersistConfig = {
//   key: 'user',
//   storage,
//   blacklist: [],
// }

//combine reducers
const rootReducer = combineReducers({
  favorites: persistReducer(cardDataPersistConfig, cardDataReducer),
  // user: persistReducer(userPersistConfig, userReducer),
});

// create store and persist reducers
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };