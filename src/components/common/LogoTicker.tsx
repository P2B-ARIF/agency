"use client";

import React, { useRef } from "react";
import logo1 from "@/assets/company-logo/logo-acme.png";
import logo2 from "@/assets/company-logo/logo-apex.png";
import logo3 from "@/assets/company-logo/logo-celestial.png";
import logo4 from "@/assets/company-logo/logo-echo.png";
import logo5 from "@/assets/company-logo/logo-pulse.png";
import logo6 from "@/assets/company-logo/logo-quantum.png";
import { motion, useScroll, useTransform } from "framer-motion";

const LogoTicker = () => {
	return (
		<section className='pt-24 bg-transparent'>
			<div className='container mx-auto'>
				<div className='md:flex items-center gap-5 px-5 md:px-0'>
					<div className='flex-1 md:flex-none max-md:mb-5'>
						<h3>Trusted by top innovative terms</h3>
					</div>
					<div className='flex-1 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
						<motion.div
							animate={{
								x: ["-100%", "0%"],
							}}
							transition={{
								repeat: Infinity,
								repeatType: "loop",
								duration: 20,
								ease: "linear",
							}}
							className='flex flex-none gap-7 md:gap-14'
						>
							{[
								logo1,
								logo2,
								logo3,
								logo4,
								logo5,
								logo6,
								logo3,
								logo4,
								logo5,
							].map((logo, index) => (
								<img
									key={index}
									src={logo.src}
									alt={`Logo ${index}`}
									className='h-5 md:h-6 w-auto'
								/>
							))}
						</motion.div>
						<motion.div
							animate={{
								x: ["-100%", "0%"],
							}}
							transition={{
								repeat: Infinity,
								repeatType: "loop",
								duration: 20,
								ease: "linear",
							}}
							className='flex flex-none gap-7 md:gap-14 ml-14'
						>
							{[
								logo1,
								logo2,
								logo3,
								logo4,
								logo5,
								logo6,
								logo3,
								logo4,
								logo5,
							].map((logo, index) => (
								<img
									key={index}
									src={logo.src}
									alt={`Logo ${index}`}
									className='h-6 w-auto'
								/>
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LogoTicker;
