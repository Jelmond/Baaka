import { configureStore } from '@reduxjs/toolkit';
import storeReducer from './IsAuthenticatedAction'



export default configureStore({
  reducer: {
      store: storeReducer
  },
})