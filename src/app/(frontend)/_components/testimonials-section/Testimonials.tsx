"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import SectionHeader from "@/components/common/SectionHeader";

export default function Testimonials() {
	const [width1, setWidth1] = useState(0);
	const [width2, setWidth2] = useState(0);
	const containerRef1 = useRef(null);
	const containerRef2 = useRef(null);

	const testimonials = [
		{
			id: 1,
			text: "Their ongoing support and dedication have helped us scale effortlessly. Whether it's e-commerce store management, branding, or IT solutions, SkillersZone delivers top-tier results.",
			name: "Michael Harrison",
			position: "COO, TechVista Solutions",
		},
		{
			id: 2,
			text: "Exceptional service! Their IT consulting team helped us streamline our business operations, improve efficiency, and implement innovative digital solutions.",
			name: "Sarah Collins",
			position: "CTO, InnovateTech",
		},
		{
			id: 3,
			text: "We've seen massive improvements in both sales and customer engagement since working with SkillersZone. Highly recommended!",
			name: "David Kim",
			position: "CEO, BrightCommerce",
		},
		{
			id: 4,
			text: "SkillersZone's branding and IT support helped us reimagine our digital strategy from the ground up.",
			name: "Emily Stone",
			position: "Marketing Head, ZenSys",
		},
	];

	const doubledTestimonials = [...testimonials, ...testimonials];

	useEffect(() => {
		if (containerRef1.current) {
			setWidth1(containerRef1.current.scrollWidth);
		}
		if (containerRef2.current) {
			setWidth2(containerRef2.current.scrollWidth);
		}
	}, []);

	return (
		<div className='py-16 bg-white overflow-hidden'>
			<SectionHeader
				subtitle={"Testimonials"}
				title={
					<>
						Trusted by <br /> businesses{" "}
						<span className='text-primary'>worldwide</span>
					</>
				}
				titleColor={"text-secondary"}
				className={"mb-12"}
			/>

			{/* First row */}
			<div className='relative overflow-hidden mb-5'>
				<div className='flex mask-gradient' ref={containerRef1}>
					<motion.div
						className='flex gap-4 h-[220px] md:h-[250px]'
						animate={{ x: [-0, -width1 / 2] }}
						transition={{
							x: {
								repeat: Infinity,
								repeatType: "loop",
								duration: 35,
								ease: "linear",
							},
						}}
					>
						{doubledTestimonials.map((testimonial, index) => (
							<TestimonialCard
								key={`row1-${testimonial.id}-${index}`}
								testimonial={testimonial}
							/>
						))}
					</motion.div>
				</div>
			</div>

			{/* Second row */}
			<div className='relative overflow-hidden max-md:hidden'>
				<div className='flex mask-gradient' ref={containerRef2}>
					<motion.div
						className='flex gap-4 h-[250px]'
						animate={{ x: [-0, -width2 / 2] }}
						transition={{
							x: {
								repeat: Infinity,
								repeatType: "loop",
								duration: 25,
								ease: "linear",
							},
						}}
					>
						{[...doubledTestimonials].reverse().map((testimonial, index) => (
							<TestimonialCard
								key={`row2-${testimonial.id}-${index}`}
								testimonial={testimonial}
							/>
						))}
					</motion.div>
				</div>
			</div>
		</div>
	);
}
