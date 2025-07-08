"use client";

import Image from "next/image";
// import { IoMdPlay } from "react-icons/io";
import styles from "./styles.module.css";

// import demo from "@/assets/videos/company-video.mp4";

const AnimationCard = ({ index, src, isMuted, handleVideoClick, videoRef }) => {
	return (
		<div className={`${styles.imageContainer} pointer-events-auto`}>
			{/* <Image src={demoImage} fill alt='image' placeholder='blur' /> */}
			{index === 0 ? (
				<>
					<div
						className={`flex items-center justify-center ${
							index === 4 ? "h-[36vh]" : index === 5 ? "h-[28vh]" : "h-[32vh]"
						} w-[32.5vw] relative`}
					>
						<video
							ref={videoRef}
							autoPlay
							muted={isMuted}
							loop
							controls={false}
							className='w-full h-full object-cover pointer-events-auto'
							onClick={handleVideoClick}
						>
							<source src={src} type='video/mp4' />
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
					{/* <div
						className={`flex items-center justify-center ${
							index === 4 ? "h-[36vh]" : index === 5 ? "h-[28vh]" : "h-[32vh]"
						} w-[32.5vw] bg-grayLight text-2xl font-bold`}
					>
						{index + 1}
					</div> */}
				</>
			) : (
				<>
					<div
						className={`flex items-center justify-center ${
							index === 4 ? "h-[36vh]" : index === 5 ? "h-[28vh]" : "h-[32vh]"
						} w-[32.5vw]  text-2xl font-bold`}
					>
						{/* {index + 1} */}

						<Image
							src={src}
							alt='image'
							width={550}
							height={550}
							className={`w-full h-full object-cover hover:scale-[99%] pointer-events-auto transition-all duration-300 ease-in-out`}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default AnimationCard;
