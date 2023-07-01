import ReactPlayer from "react-player";
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { next } from "../store/slicers/player";

export function Video() {
	const dispatch = useDispatch();

	const lesson = useAppSelector((state) => {
		const { currentLessonIndex, currentModuleIndex } = state.player;

		const currentLesson =
			state.player.course.modules[currentModuleIndex].lessons[
				currentLessonIndex
			];

		return currentLesson;
	});

	function handlePlayNext() {
		dispatch(next());
	}

	return (
		<div className="bg-zinc-950 w-full aspect-video">
			<ReactPlayer
				width="100%"
				height="100%"
				onEnded={handlePlayNext}
				// playing
				controls
				url={`https://www.youtube.com/watch?v=${lesson.id}`}
			/>
		</div>
	);
}
