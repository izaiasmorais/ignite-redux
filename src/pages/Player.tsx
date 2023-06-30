import { MessageCircle } from "lucide-react";
import ReactPlayer from "react-player";
import { ClassModule } from "./ClassModule";
import { Header } from "../components/Header";

export function Player() {
	return (
		<div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
			<div className="flex w-[1100px] flex-col gap-6">
				<div className="flex items-center justify-between">
					<Header />

					<button
						className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium
					hover:bg-violet-600 transition-colors"
					>
						<MessageCircle className="w-4 h-4" /> Deixar feedback
					</button>
				</div>

				<main
					className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900
				shadow pr-80"
				>
					<div className="flex-1">
						<div className="bg-zinc-950 w-full aspect-video">
							<ReactPlayer
								width="100%"
								height="100%"
								controls
								url="https://youtu.be/oPOKpSFqy-I"
							/>
						</div>
					</div>

					<aside
						className="w-80 absolute top-0 bottom-0 right-0 overflow-y-scroll border-l
					border-zinc-800 bg-zinc-900 scrollbar-thin scrollbar-track-zinc-950
					scrollbar-thumb-violet-500 divide-y-2 divide-zinc"
					>
						<ClassModule />
						<ClassModule />
						<ClassModule />
					</aside>
				</main>
			</div>
		</div>
	);
}
