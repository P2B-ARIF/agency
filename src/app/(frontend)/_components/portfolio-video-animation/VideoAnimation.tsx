"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AnimationCard from "./AnimationCard";
import styles from "./styles.module.css";

// import image1 from "/assets/images/image1.jpg";
// import image2 from "/assets/images/image2.jpg";
// import image3 from "/assets/images/image3.jpg";
// import image4 from "/assets/images/image4.jpg";
// import image5 from "/assets/images/image5.jpg";
// import image6 from "/assets/images/image6.jpg";
// import image7 from "/assets/images/image7.jpg";
// import image8 from "/assets/images/image8.jpg";
// import demo from "@/assets/videos/company-video.mp4";

const VideoAnimation = () => {
	const videoRef = useRef(null);
	const [isMuted, setIsMuted] = useState(true);
	const [isOpacity, setIsOpacity] = useState(0);

	const [isLaptop, setIsLaptop] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsLaptop(window.innerWidth <= 1400);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleVideoClick = () => {
		if (videoRef.current) {
			videoRef.current.muted = !isMuted; // এখন muted value toggle হবে
			setIsMuted(prev => !prev);
			setIsOpacity(100);
		}
	};

	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});

	// video play button opacity
	const opacity = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0, 0, 1, 1]);

	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 3.5]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 3.5]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 3.5]);
	const scale7 = useTransform(scrollYProgress, [0, 1], [1, 3.5]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 3.5]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 3.5]);
	const scale10 = useTransform(scrollYProgress, [0, 1], [1, 3.5]);
	const scale11 = useTransform(scrollYProgress, [0, 1], [1, 3.5]);
	const scale12 = useTransform(scrollYProgress, [0, 1], [1, 3.5]);

	// slide bottom to -150top
	const translateY4 = useTransform(
		scrollYProgress,
		[0, 1],
		isLaptop ? [0, -80] : [0, -150],
	);
	const translateX4 = useTransform(scrollYProgress, [0.5, 1], [0, -25]);

	const translateY8 = useTransform(
		scrollYProgress,
		[0, 1],
		isLaptop ? [0, -90] : [0, -130],
	);
	const translateY9 = useTransform(
		scrollYProgress,
		[0, 1],
		isLaptop ? [0, -90] : [0, -150],
	);

	// quick box bottom to top
	const translateY5 = useTransform(scrollYProgress, [0, 1], [0, -1000]);
	const translateY6 = useTransform(scrollYProgress, [0, 1], [0, -1000]);
	const translateY7 = useTransform(scrollYProgress, [0, 1], [0, -1000]);

	// quick box top to bottom
	const translateY10 = useTransform(scrollYProgress, [0, 1], [0, 1000]);
	const translateY11 = useTransform(scrollYProgress, [0, 1], [0, 1000]);
	const translateY12 = useTransform(scrollYProgress, [0, 1], [0, 1000]);

	const pictures = [
		{
			src: "/assets/videos/company-video.mp4",
			scale: scale4,
			y: translateY4,
			x: translateX4,
		},
		{ src: "/assets/images/image1.jpg", scale: scale5, y: translateY5 },
		{ src: "/assets/images/image2.jpg", scale: scale6, y: translateY6 },
		{ src: "/assets/images/image3.jpg", scale: scale7, y: translateY7 },
		{ src: "/assets/images/image4.jpg", scale: scale8, y: translateY8 },
		{ src: "/assets/images/image5.jpg", scale: scale9, y: translateY9 },
		{ src: "/assets/images/image6.jpg", scale: scale10, y: translateY10 },
		{ src: "/assets/images/image7.jpg", scale: scale11, y: translateY11 },
		{ src: "/assets/images/image8.jpg", scale: scale12, y: translateY12 },
	];

	return (
		<div ref={container} className={`${styles.container} max-sm:hidden`}>
			<div className={`${styles.sticky}`}>
				{pictures.map(({ src, scale, y, x }, index) => (
					<motion.div
						style={{ scale, y, x }}
						key={index}
						className={`${styles.el} pointer-events-none`}
					>
						<AnimationCard
							key={index}
							index={index}
							src={src}
							isMuted={isMuted}
							videoRef={videoRef}
							handleVideoClick={handleVideoClick}
						/>
					</motion.div>
				))}

				{/* <motion.button
					onClick={handleVideoClick}
					className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary w-[100px] aspect-square rounded-full flex items-center justify-center z-50 text-white shadow-md cursor-pointer hover:bg-primary-dark transition-colors pointer-events-auto'
					style={{
						transform: "translate(-50%, -50%)",
						opacity: isOpacity === 100 ? 1 : opacity,
					}}
				>
					<IoMdPlay size={20} />
				</motion.button> */}
			</div>
		</div>
	);
};

export default VideoAnimation;
