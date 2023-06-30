import { Video } from "lucide-react";

interface LessonProps {
	title: string;
	duration: string;
}

export function Lesson({ duration, title }: LessonProps) {
	return (
		<button
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
