import { configureStore } from "@reduxjs/toolkit";
import { player } from "./slicers/player";
import { useSelector, useAppDispatch, TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
	reducer: {
		player,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch: () => AppDispatch = useAppDispatch;
