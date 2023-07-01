import { describe, it, expect } from "vitest";

import { playerSlice, player as reducer, play } from "./player";

describe("player slice", () => {
	it("should be able to play", () => {
		const initialState = playerSlice.getInitialState();

		const state = reducer(initialState, play([1, 2]));

		expect(state.currentModuleIndex).toEqual(1);
		expect(state.currentLessonIndex).toEqual(2);
	});
});
