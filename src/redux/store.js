import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../store/users/usersSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;
