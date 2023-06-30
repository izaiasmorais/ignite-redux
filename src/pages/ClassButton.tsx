import { Video } from "lucide-react";

export function ClassButton() {
	return (
		<button className="flex items-center gap-3 text-sm text-zinc-400">
			<Video className="w-4 h-4 text-zinc-500" />
			<span>Fundamentos do Redux</span>
			<span className="ml-auto font-mono text-sx text-zinc-500">9:03</span>
		</button>
	);
}
