"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import SectionHeader from "@/components/common/SectionHeader";

// import image1 from "/assets/images/image1.jpg";
// import image2 from "/assets/images/image2.jpg";
// import image3 from "/assets/images/image3.jpg";
// import image4 from "/assets/images/image4.jpg";
// import image5 from "/assets/images/image5.jpg";
// import image6 from "/assets/images/image6.jpg";

const projects = [
	{
		id: 1,
		title: "Izdihaar website design",
		category: "Case study",
		imageUrl: "/assets/images/image1.jpg",
		description: "",
	},
	{
		id: 2,
		title: "Izdihaar website design",
		category: "Case study",
		imageUrl: "/assets/images/image2.jpg",
		description: "",
	},
	{
		id: 3,
		title: "Izdihaar website design",
		category: "Case study",
		imageUrl: "/assets/images/image3.jpg",
		description: "",
	},
	{
		id: 4,
		title: "TechVista mobile app",
		category: "Case study",
		imageUrl: "/assets/images/image4.jpg",
		description: "",
	},
	{
		id: 5,
		title: "ZenSys branding",
		category: "Case study",
		imageUrl: "/assets/images/image5.jpg",
		description: "",
	},
	{
		id: 6,
		title: "InnovateTech campaign",
		category: "Case study",
		imageUrl: "/assets/images/image6.jpg",
		description: "",
	},
];

const SuccessStories = () => {
	const targetRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start start", "end end"],
	});

	// Calculate total horizontal scroll width
	// const x = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);
	// card count = 6, so scroll -500% or -600% depending on card width
	const x = useTransform(
		scrollYProgress,
		[0, 1],
		["0%", `-${(projects.length - 1) * 12}%`],
	);

	return (
		<section ref={targetRef} className='h-[300vh] bg-secondary pb-10'>
			{/* Sticky Fullscreen Container */}
			<div className='sticky top-0 min-h-screen flex flex-col justify-start'>
				{/* Header */}
				{/* <div className='pt-20 text-center z-20'>
					<h6 className='uppercase font-bold text-[14px] text-primary'>
						PORTFOLIO
					</h6>
					<h2 className='font-secondary text-[40px] font-bold text-accent'>
						Our Success <span className='text-primary'>Stories</span>
					</h2>
					<p className='max-w-2xl w-full mx-auto text-accent text-[22px] py-5'>
						Delivering Innovative Marketing Solutions, Digital Campaigns, and
						Engaging Content to Drive Business Growth and Success.
					</p>
				</div> */}
				<SectionHeader
					subtitle={"PORTFOLIO"}
					title={
						<>
							Our Success <span className='text-primary'>Stories</span>
						</>
					}
					titleColor={"text-accent"}
					description={
						"Delivering Innovative Marketing Solutions, Digital Campaigns, and Engaging Content to Drive Business Growth and Success."
					}
					childClassName={"pt-20"}
				/>

				{/* Horizontal Card Row */}
				<div className='relative flex-1 flex items-center overflow-hidden'>
					<motion.div style={{ x }} className='flex gap-6 px-[10vw]'>
						{projects.map(project => (
							<ProjectCard key={project.id} project={project} />
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default SuccessStories;
