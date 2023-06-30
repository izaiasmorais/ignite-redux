import ReactPlayer from "react-player";

export function Video() {
	return (
		<div className="bg-zinc-950 w-full aspect-video">
			<ReactPlayer
				width="100%"
				height="100%"
				controls
				url="https://youtu.be/oPOKpSFqy-I"
			/>
		</div>
	);
}
