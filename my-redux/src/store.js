import rootReducer from './reducers/index';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer,
  // Optional: Any middleware or enhancers you want to apply
});

export default store;
