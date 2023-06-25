import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
	name: "todo",
	initialState: ["POO task", "Work on Nebula", "Study Zustand"],
	reducers: {
		add: (state, action) => {
			state.push(action.payload);
		},
	},
});

export const store = configureStore({
	reducer: {
		todo: todoSlice.reducer,
	},
});

export const { add } = todoSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
