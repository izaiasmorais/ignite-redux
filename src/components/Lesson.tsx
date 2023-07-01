import { Video } from "lucide-react";

interface LessonProps {
	title: string;
	duration: string;
	onPlay(): { payload: any; type: "player/play" };
}

export function Lesson({ duration, title, onPlay }: LessonProps) {
	return (
		<button
			onClick={onPlay}
			className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-300
		transition-colors"
		>
			<Video className="w-4 h-4 text-zinc-500" />
			<span>{title}</span>
			<span className="ml-auto font-mono text-sx text-zinc-500">
				{duration}
			</span>
		</button>
	);
}
