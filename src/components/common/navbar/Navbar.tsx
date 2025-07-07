"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Home, User, LayoutGrid, FileText, Handshake } from "lucide-react";

const navLinks = [
	{ id: 1, href: "/", label: "Home", icon: Home },
	{ id: 2, href: "/about-me", label: "About Me", icon: User },
	// { id: 4, href: "/works", label: "Works", icon: LayoutGrid },
	{
		id: 3,
		href: "/projects-gallery",
		label: "Projects Gallery",
		icon: FileText,
	},
	{ id: 5, href: "/blogs", label: "Blogs", icon: Handshake },
];

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isHidden, setIsHidden] = useState(false);
	const pathname = usePathname();

	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", latest => {
		const previous: any = scrollY.getPrevious();

		// navbar background toggle
		setIsScrolled(latest > 80);

		// hide on scroll down, show on scroll up
		if (latest > previous && latest > 100) {
			setIsHidden(true); // scroll down → hide
		} else {
			setIsHidden(false); // scroll up → show
		}
	});

	return (
		<div className='z-50'>
			{/* ✅ Desktop Navbar */}
			<div
				className={`fixed top-0 z-50 left-0 w-full transition-all duration-300 ease-in-out ${
					isHidden ? "-translate-y-full" : "translate-y-0"
				} ${
					isScrolled
						? "bg-primary/80 backdrop-blur-md shadow-md"
						: "bg-transparent"
				} hidden md:block`}
			>
				<div className='flex items-center justify-between container mx-auto px-5 py-6 md:px-0'>
					<Link href='/' className='font-semibold uppercase text-2xl'>
						<Image
							src='/favicon.png'
							alt='logo'
							className='w-[40px] md:w-[50px] aspect-square object-contain'
							width={50}
							height={50}
						/>
					</Link>
					<div className='flex items-center gap-5'>
						<div className='flex items-center gap-10'>
							{navLinks.map(list => (
								<Link key={list.id} href={list.href}>
									{list.label}
								</Link>
							))}
						</div>

						<div className='ml-10 relative rounded-lg bg-conic/[from_var(--border-angle)] from-primary via-blue-400 to-primary p-px animate-rotate-border'>
							<div className='absolute inset-0 opacity-60 transition-all bg-gradient-to-r from-blue-400 via-blue-400 to-blue-700 rounded-lg blur-md filter'></div>
							<Link
								href='/contact'
								className='relative flex items-center gap-2 px-4 py-2 bg-dark text-accent rounded-lg'
							>
								Get In Touch
								<svg
									aria-hidden='true'
									viewBox='0 0 10 10'
									height='10'
									width='10'
									fill='none'
									className='mt-0.5 hover:ml-2 transition-all duration-300 ease-linear -mr-1 stroke-white stroke-2'
								>
									<path
										d='M0 5h7'
										className='transition opacity-0 group-hover:opacity-100'
									/>
									<path
										d='M1 1l4 4-4 4'
										className='transition group-hover:translate-x-[3px]'
									/>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* ✅ Mobile Bottom Navbar */}
			<div
				className={`fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md px-10 py-3 rounded-full bg-gradient-to-r from-primary/70 to-secondary/70 backdrop-blur-lg border border-gray-700 shadow-lg z-50 md:hidden transition-all duration-300 ${
					isHidden
						? "translate-y-[100px] opacity-0"
						: "translate-y-0 opacity-100"
				}`}
			>
				<nav className='flex gap-6 items-center justify-between'>
					{navLinks.map(({ href, icon: Icon }) => {
						const isActive = pathname === href;
						return (
							<Link
								key={href}
								href={href}
								className={`flex flex-col items-center gap-1 text-xs p-2 transition-all duration-300 ease-in-out ${
									isActive
										? "text-white scale-110 bg-secondary/50 rounded-full border border-accent/20"
										: "text-gray-300 hover:text-white"
								}`}
							>
								<Icon className='w-5 h-5' />
							</Link>
						);
					})}
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
