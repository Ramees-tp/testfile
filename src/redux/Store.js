import { configureStore } from "@reduxjs/toolkit";
import TokenSlice from "./TokenSlice";
import SocketSlice from './SocketSlice'

const store = configureStore({
  reducer: {
    pass: TokenSlice,
    socket: SocketSlice,
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
    serializableCheck: false
  })
});

export default store;
