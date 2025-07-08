"use client";

// import demo from "@/assets/videos/company-video.mp4";
import { useRef, useState } from "react";

const VideoCard = () => {
	const videoRef = useRef(null);
	const [isMuted, setIsMuted] = useState(true);

	const handleVideoClick = () => {
		if (videoRef.current) {
			videoRef.current.muted = !isMuted;
			setIsMuted(prev => !prev);
		}
	};

	return (
		<div className='lg:hidden'>
			<div
				className={`flex items-center justify-center h-[35vh] w-full relative`}
			>
				<video
					autoPlay
					muted={isMuted}
					loop
					controls={false}
					className='w-full h-full object-cover pointer-events-auto'
					onClick={handleVideoClick}
				>
					<source src={"/assets/videos/company-video.mp4"} type='video/mp4' />
					<track
						src='/path/to/captions.vtt'
						kind='subtitles'
						srcLang='en'
						label='English'
					/>
					Your browser does not support the video tag.
				</video>
				{/* middle play button */}
				{/* <button
					// onClick={handleVideoClick}
					className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary w-[50px] aspect-square rounded-full flex items-center justify-center z-50 text-white shadow-md cursor-pointer hover:bg-primary-dark transition-colors pointer-events-auto'
					style={{ transform: "translate(-50%, -50%)" }}
				>
					<IoMdPlay size={12} />
				</button> */}
			</div>
		</div>
	);
};

export default VideoCard;
