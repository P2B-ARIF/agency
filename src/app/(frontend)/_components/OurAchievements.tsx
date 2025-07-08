"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const OurAchievements = () => {
	const sectionRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start center", "end center"], // Smooth offset
	});

	// Mobile / Laptop Detection
	const [isMobile, setIsMobile] = useState(false);
	const [isLaptop, setIsLaptop] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
			setIsLaptop(window.innerWidth <= 1350);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// 🎯 VH based smooth translateY setup
	const translateY0 = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		isMobile ? ["0vh", "60vh", "105vh"] : ["0vh", "60vh", "100vh"],
	);

	const translateY1 = useTransform(scrollYProgress, [0, 1], ["0vh", "45vh"]);
	const translateY2 = useTransform(
		scrollYProgress,
		[0, 1],
		isMobile ? ["0vh", "0vh"] : isLaptop ? ["0vh", "20vh"] : ["0vh", "5vh"],
	);

	return (
		<section
			ref={sectionRef}
			className='bg-secondary text-white h-[170vh] flex flex-col items-center justify-between w-full'
		>
			{/* Top Title + First Card */}
			<motion.div
				style={{ translateY: translateY0 }}
				className='w-full overflow-hidden pb-[10vh]'
			>
				<h2 className='font-secondary text-2xl sm:text-4xl lg:text-[40px] font-bold text-accent w-full md:w-[673px] text-center mx-auto'>
					We are vowed to <br /> delivering{" "}
					<span className='text-primary'>visible results</span>
				</h2>
				<div className='bg-[#AAE5FF] py-7 2xl:py-9 text-center text-black font-secondary text-2xl md:text-4xl 2xl:text-6xl font-medium rotate-[2.09deg] w-full mt-[10vh]'>
					85 Innovative team members
				</div>
			</motion.div>

			{/* Second Card */}
			<motion.div
				style={{ translateY: translateY1 }}
				className='w-full overflow-hidden py-10'
			>
				<div className='bg-white text-black py-7 2xl:py-9 text-center font-secondary text-2xl md:text-4xl 2xl:text-6xl font-medium rotate-[-2.24deg] mt-[10vh] w-full'>
					15+ Projects Completed
				</div>
			</motion.div>

			{/* Third Card + Description */}
			<motion.div
				style={{ translateY: translateY2 }}
				className='w-full overflow-hidden py-[5vh] text-center'
			>
				<motion.div className='bg-[#00E2C5] py-7 2xl:py-9 text-center text-black font-secondary text-2xl md:text-4xl 2xl:text-6xl font-medium rotate-[1.88deg] relative z-20'>
					4 Years of experience
				</motion.div>

				{/* Paragraph Description */}
				<motion.p className='text-center text-lg md:text-[22px] text-gray-300  mt-16 xl:my-16 2xl:mb-0 pt-20 max-w-xl mx-auto'>
					Upscale digital experiences. Formed at the heart of Texas, USA, we are
					a task force. We help connect brands with customers through
					innovatively designed frameworks.
				</motion.p>
			</motion.div>
		</section>
	);
};

export default OurAchievements;
