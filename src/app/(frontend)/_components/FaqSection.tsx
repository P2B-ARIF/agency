"use client";

import SectionHeader from "@/components/common/SectionHeader";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
	const [openItem, setOpenItem] = useState(null > 2);

	const faqItems = [
		{
			question: "What services does SkillersZone offer?",
			answer:
				"SkillersZone offers a range of digital services including web development, mobile app development, UI/UX design, digital marketing, and system integration solutions tailored to your business needs.",
		},
		{
			question: "Is SkillersZone suitable for startups and small businesses?",
			answer:
				"Yes, SkillersZone works with businesses of all sizes. We offer scalable solutions that can be tailored to meet the specific needs and budgets of startups and small businesses while allowing room for growth.",
		},
		{
			question: "What is the process of working with SkillersZone?",
			answer:
				"At SkillersZone, our process is simple and results-driven. We begin with a detailed consultation to understand your needs, followed by strategic planning to craft the best solution. Our team then implements and optimizes the solution, ensuring seamless execution.",
		},
		{
			question:
				"Can you help with software development and system integration?",
			answer:
				"Yes, we specialize in custom software development and system integration. Our team of experienced developers can create tailored solutions that integrate seamlessly with your existing systems and workflows.",
		},
		{
			question:
				"What makes SkillersZone different from other digital service providers?",
			answer:
				"SkillersZone stands out through our client-centric approach, technical expertise, and commitment to delivering measurable results. We focus on building long-term partnerships rather than one-off projects.",
		},
	];

	const toggleItem = index => {
		setOpenItem(openItem === index ? null : index);
	};

	return (
		<div className='max-w-5xl mx-auto px-3 lg:px-5 py-16'>
			{/* <div className='text-center mb-12 flex flex-col items-center'>
				<motion.h6
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='text-primary font-medium'
				>
					FAQ
				</motion.h6>

				<motion.h2
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className='font-secondary text-[40px] font-bold text-black w-[673px] text-center mt-2'
				>
					Frequently asked <br />{" "}
					<span className='text-primary'>questions</span>
				</motion.h2> */}
			{/* <motion.h2
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className='text-4xl md:text-5xl font-bold mt-2'
				>
					Frequently asked
					<br />
					<span className='text-primary'>questions</span>
				</motion.h2> */}
			{/* </div> */}

			<SectionHeader
				subtitle={"FAQ"}
				title={
					<>
						Frequently asked
						<br />
						<span className='text-primary'>questions</span>
					</>
				}
				titleColor={"text-secondary"}
			/>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.4 }}
				className='space-y-0 mt-12'
			>
				{faqItems.map((item, index) => (
					<motion.div
						key={index}
						className='border-b border-gray-200'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
					>
						<motion.div
							className='py-6 flex justify-between items-center cursor-pointer'
							onClick={() => toggleItem(index)}
							whileHover={{ x: 5 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<h3 className='max-w-[86%] max-sm:leading-6 text-lg md:text-xl lg:text-2xl font-medium text-secondary'>
								{item.question}
							</h3>
							<motion.button
								className={`flex items-center justify-center aspect-square w-10 h-10 rounded-full border ${
									openItem === index
										? "bg-primary border-primary text-white"
										: "border-gray-300 text-gray-400"
								}`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								transition={{ type: "spring", stiffness: 400, damping: 17 }}
							>
								<motion.div
									animate={{ rotate: openItem === index ? 180 : 0 }}
									transition={{ duration: 0.3, type: "spring" }}
								>
									<ChevronDown className='w-5 h-5' />
								</motion.div>
							</motion.button>
						</motion.div>
						<AnimatePresence>
							{openItem === index && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: "auto", opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.3, ease: "easeInOut" }}
									className='overflow-hidden'
								>
									<motion.p
										className='pb-6 text-gray-700 text-base md:text-lg leading-relaxed'
										initial={{ y: -10, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ duration: 0.3, delay: 0.1 }}
									>
										{item.answer}
									</motion.p>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
