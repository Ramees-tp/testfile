import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    socket: null,
    isConnected: false,
}

const socketSlice = createSlice({
    name: 'socket',
    initialState,
    reducers: {
        setSocket(state, action) {
            state.socket = action.payload;
            state.isConnected = true
        },
        disconnectSocket(state){
            state.socket.disconnect();
            state.socket = null;
            state.isConnected = false;
        },
    },
});

export const { setSocket, disconnectSocket} = socketSlice.actions;
export const selectSocket = (state) => state.socket.socket;
export default socketSlice.reducer;