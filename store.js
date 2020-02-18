import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
const storage = AsyncStorage;
//reducers
import favoritesReducer from './src/reducers/favorites';
//persist config
const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: []
}
const favoritesPersistConfig = {
  key: 'favorites',
  storage,
  blacklist: [],
}

//combine reducers
const rootReducer = combineReducers({
  favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
});

// create store and persist reducers
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };