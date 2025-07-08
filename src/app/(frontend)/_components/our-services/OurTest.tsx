"use client";
import useMediaQuery from "@/utils/useMediaQuery";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GoArrowDown } from "react-icons/go";
import ServiceCard from "./ServiceCard";

const details = [
	{
		id: 1,
		title: "Online Branding & PR Management",
		subtitle: "Make More Sales!",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
		services: [
			"Online Branding Strategy",
			"Social Media Optimization",
			"Digital Creative Development",
			"Social Media Adset Management",
			"Google Adsset Management",
			"Influencer Marketing",
		],
	},
	{
		id: 2,
		title: "Google Rank Booster",
		subtitle: "Reach the Right Audience",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
		services: [
			"On-Page SEO",
			"Keyword Analysis",
			"Blog Writing",
			"SEO Audit",
			"Local Search Optimization",
			"Global Search Optimization",
		],
	},
	{
		id: 3,
		title: "Lead Generation",
		subtitle: "Get Potential Prospects",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
		services: [
			"Targeted Data Scrapping",
			"Appointment Setting",
			"Targeted Email Campaigns",
			"Targeted Affiliate Campaigns",
			"Competitor Analysis",
			"Market Research",
			"Global Search Optimization",
		],
	},
	{
		id: 4,
		title: "Web Design & Development",
		subtitle: "Make a great impression",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
		services: [
			"Targeted Data Scrapping",
			"Appointment Setting",
			"Targeted Email Campaigns",
			"Targeted Affiliate Campaigns",
			"Competitor Analysis",
			"Market Research",
			"Global Search Optimization",
		],
	},
	{
		id: 5,
		title: "E-commerce Store Management",
		subtitle: "Optimize your store for higher sales",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
		services: [
			"Product Listing",
			"Multichannel Software Management",
			"EBC (A+ Content) & Brand Store Create",
			"Ecommerce PPC/AMS Campaigns",
			"Ecommerce Customer Service",
		],
	},
];

const OurServices = () => {
	const containerRef = useRef(null);
	const isMobile = useMediaQuery("(max-width: 764px)");
	const isLaptop = useMediaQuery("(max-width: 1480px)");

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end 120%"],
	});

	// Ekta card animation duration (adjust korte paren)
	const cardCount = details.length;
	const cardProgress = 1 / cardCount;

	return (
		// <div ref={containerRef} className='bg-black pt-40 h-[300vh]'>
		// 	<div className='container mx-auto flex '>
		// 		<div className='flex-1 flex items-center overflow-hidden'>
		<div className='bg-secondary pt-32 md:pt-40 relative'>
			<div className='rounded-full p-2 md:p-3 absolute -top-[35px] md:-top-[60px] left-[50%] -translate-x-[50%] bg-white'>
				<div className='bg-primary w-[60px] sm:w-[80px] md:w-[104px] aspect-square rounded-full text-white flex items-center justify-center'>
					<GoArrowDown size={35} />
				</div>
			</div>

			<div ref={containerRef} className='container mx-auto lg:h-[600vh]'>
				<div className='sticky top-[10%] 2xl:top-[20%] h-full lg:max-h-[650px] * cardCount bg-gray-100 overflow-hidden'>
					<div className='w-full flex items-center gap-5 justify-center '>
						<div className='flex flex-col items-center justify-center w-full mb-[19px] max-sm:mx-3'>
							<div className='h-[250px] md:h-[350px] 2xl:h-[495px] w-full border-2 border-white p-5 sm:p-10'>
								<h6 className='uppercase font-bold text-[14px] text-primary'>
									Our Services
								</h6>
								<h2 className='font-secondary text-3xl lg:text-4xl 2xl:text-[40px] font-bold text-accent'>
									Choose the finest <br /> marketing{" "}
									<span className='text-primary'>strategy</span>
								</h2>
							</div>

							{/* Lines */}
							<div className='space-y-6 2xl:space-y-9 mt-6 2xl:mt-9 w-full'>
								<div className='w-full border-t-2 border-dashed border-white'></div>
								<div className='w-full border-t-2 border-solid border-white'></div>
								<div className='w-full border-t-2 border-dashed border-white'></div>
								<div className='w-full border-t-2 border-solid border-white'></div>
							</div>
						</div>

						{/* Right vertical bar */}
						<div className='max-lg:hidden bg-primary h-[455px] 2xl:h-[668px] w-[16px] max-2xl:mb-[18px]'></div>
					</div>

					<div className='flex flex-col gap-5 lg:hidden'>
						{details?.map((service, i) => {
							return (
								<ServiceCard key={i} {...service} i={i} length={cardCount} />
							);
						})}
					</div>
					<div className='max-lg:hidden'>
						{details?.map((service, i) => {
							const start = i * cardProgress;
							const end = start + cardProgress;

							const x = useTransform(
								scrollYProgress,
								[start, end],
								isLaptop ? ["100%", `${i * 6}%`] : ["100%", `${i * 9}%`],
							);

							return (
								<ServiceCard
									key={i}
									{...service}
									i={i}
									x={x}
									length={cardCount}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurServices;
///// 4,27, 2025

import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({
	id,
	title,
	subtitle,
	description,
	services,
	i,
	x,
	length,
}) => {
	const isMobile = useMediaQuery("(max-width: 764px)");

	return (
		<motion.div
			style={{ x }}
			className='relative lg:absolute top-0 left-0 h-full max-sm:min-h-[455px] sm:h-[455px] 2xl:h-[650px] flex bg-primary text-accent shadow-md w-full border border-white/50'
		>
			<div className='p-4 md:p-5 2xl:p-10 px-4 sm:px-6 2xl:px-12 flex flex-col justify-between items-center border-r'>
				<span className='text-3xl 2xl:text-[40px] font-semibold'>{i + 1}</span>
				<p className='[writing-mode:vertical-rl] rotate-180 text-lg 2xl:text-[20px] font-[900] tracking-wider uppercase'>
					{title}
				</p>
			</div>
			<div className='p-4 md:p-6 2xl:p-10 max-w-3xl'>
				<h6 className='font-light text-accent/90'>{subtitle}</h6>
				<h2 className='text-lg 2xl:text-2xl font-bold uppercase tracking-wide'>
					{title}
				</h2>
				<p
					className={`${
						length === i + 1 && !isMobile && "w-[90%]"
					} text-accent/90 mt-3 text-sm md:text-base`}
				>
					{description}
				</p>
				<ul className='mt-5 2xl:mt-10 space-y-1 2xl:space-y-3 text-accent/90 '>
					{services?.map((service, i) => (
						<li
							key={i}
							className='flex items-center gap-2 2xl:gap-3 text-sm md:text-base'
						>
							<BsArrowRight size={20} /> {service}
						</li>
					))}
				</ul>
			</div>
		</motion.div>
	);
};

export default ServiceCard;

