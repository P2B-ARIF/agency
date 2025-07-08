"use client";
import SectionHeader from "@/components/common/SectionHeader";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const steps = [
	{
		number: 1,
		title: "Research and strategy development",
		description:
			"We start by understanding business objectives, target audience, and unique challenges. We create a strong foundation for a successful project through research and planning.",
	},
	{
		number: 2,
		title: "Data-driven strategic planning for enhanced returns",
		description:
			"Our team develops a customized action plan, combining data-driven insights with creative strategies. This involves setting KPIs and creating a clear roadmap for maximized returns.",
	},
	{
		number: 3,
		title: "Streamlined design and execution for digital channels",
		description:
			"We bring your vision to life through creative designs and robust development. Our developers collaborate to establish a seamless, user-friendly experience across all platforms.",
	},
	{
		number: 4,
		title: "Agile implementation and continuous optimization",
		description:
			"We ensure smooth project rollout with agile methodologies and refine continuously based on analytics, feedback, and evolving goals.",
	},
	{
		number: 5,
		title: "Measuring success & long-term growth",
		description:
			"With KPIs and analytics in place, we measure success and optimize strategies for long-term growth and ROI improvement.",
	},
];

export default function TimelineSteps() {
	return (
		<div className='bg-secondary text-white min-h-screen pt-16 xl:pt-0 px-4 md:px-8 overflow-hidden'>
			<div className='max-w-4xl mx-auto'>
				<SectionHeader
					subtitle={"STRATEGIES WE FOLLOW"}
					title={
						<>
							Our approach to <br /> meet{" "}
							<span className='text-primary'>Stories</span>
						</>
					}
					description={
						"Our premium digital experiences are crafted at the core of Texas, USA. Being a dynamic team, we bridge the gap between brands and customers with creatively designed solutions."
					}
					childClassName={"pt-20 2xl:pt-0"}
				/>
				{/* offset: ["start 30%", "end start"] */}
				{/* offset: ["80% 50%", "90% 20%"], */}

				{/* Timeline Cards */}
				<ul className='mt-16 sm:mt-20 md:mt-24 relative'>
					{steps.map((step, index) => {
						// ========== Timeline Line Refs ===============
						const lineRef = useRef(null);
						const [view, setView] = useState(0);

						const { scrollYProgress: lineScroll } = useScroll({
							target: lineRef,
							offset: ["start 50%", "start 20%"],
						});

						const percent = useTransform(lineScroll, [0, 1], [0, 100]);

						useEffect(() => {
							const unsubscribe = percent.on("change", v => {
								setView(Math.round(v));
							});
							return () => unsubscribe();
						}, [percent]);

						// ========== Card Visibility Ref (for 80% upward) ==========
						const cardRef = useRef(null);
						const { scrollYProgress: cardScroll } = useScroll({
							target: cardRef,
							offset: ["start end", "start 20%"], // 👈 Top of card reaches 80% from top
						});

						const cardOpacity = useTransform(cardScroll, [0, 0.6], [0, 1]);
						const cardTranslateY = useTransform(cardScroll, [0, 1], [100, 0]);

						return (
							<motion.li
								ref={cardRef}
								key={index}
								className={`space-y-4 w-[90%] max-md:ml-10 max-lg:ml-20 lg:w-[381px] h-[344px] relative lg:${
									index % 2 === 1 ? "ml-auto" : "mr-auto"
								} ${index % 2 === 1 ? "ml-auto" : "mr-auto"}`}
							>
								{/* Content Block */}
								<motion.div
									style={{
										opacity: cardOpacity,
										y: cardTranslateY,
									}}
								>
									<span className='text-sm text-primary uppercase'>
										STEP {step.number}
									</span>
									<h3 className='text-[22px] font-semibold'>{step.title}</h3>
									<p className='text-[17px] text-grayLight mt-5'>
										{step.description}
									</p>
								</motion.div>

								{/* Timeline Dot and Line */}
								<div
									className={`flex flex-col items-center justify-center absolute top-6 mt-6 ${
										index % 2 === 1 ? " -left-[77px]" : "-right-[77px]"
									} max-lg:-left-[7%] max-lg:right-[110%] max-md:-left-[15%] max-md:right-[100%]`}
								>
									<motion.div
										style={{
											opacity: cardOpacity,
										}}
										className='w-5 h-5 bg-accent rounded-full mb-6'
									></motion.div>

									{index !== steps.length - 1 && (
										<div
											ref={lineRef}
											className='w-[4px] h-[280px] bg-gray rounded-full relative overflow-hidden'
										>
											<motion.div
												style={{ height: `${view * 3}px` }}
												className='absolute left-0 top-0 w-full rounded-full bg-primary'
											/>
										</div>
									)}
								</div>
							</motion.li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
