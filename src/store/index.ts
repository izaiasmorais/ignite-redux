import { configureStore, createSlice } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {

	},
});

export type RootState = ReturnType<typeof store.getState>;
