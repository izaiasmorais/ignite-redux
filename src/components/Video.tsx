import ReactPlayer from "react-player";
import { useAppDispatch } from "react-redux";
import { next, userCurrentLesson } from "../store/slicers/player";

export function Video() {
	const dispatch = useAppDispatch();

	const { currentLesson } = userCurrentLesson();

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
				url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
			/>
		</div>
	);
}
