// src/redux/features/userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    username: string;
    loggedIn: boolean;
}

const initialState: UserState = {
    username: '',
    loggedIn: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.loggedIn = true;
            state.username = action.payload;
        },
        logout: (state) => {
            state.loggedIn = false;
            state.username = '';
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
