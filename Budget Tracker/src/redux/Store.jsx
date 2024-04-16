import budgetReducer from './Reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import { configureStore, Tuple } from '@reduxjs/toolkit'

const persistConfig = {
  key : 'root',
  storage : AsyncStorage
}

// const rootReducer = combineReducers({
//   budget: budgetReducer,
// });

const persistedReducer = persistReducer(persistConfig, budgetReducer);

const store = configureStore({
   
  reducer : {
      budget  : persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
      serializableCheck: false,
  }),
})

// const store = configureStore(persistedReducer);

const persistor = persistStore(store);
 
export {persistor};
export default store;