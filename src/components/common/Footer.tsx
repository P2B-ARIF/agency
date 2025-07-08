// import texture from "@/assets/elements/blur-element.png";
// import logo from "@/assets/logo.png";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className='bg-secondary pt-20'>
			{/* schedule a call */}
			<div className='sm:mx-5'>
				<div className='lg:max-w-4xl lg:mx-auto bg-gray flex flex-col items-center p-6 sm:p-8 md:p-10 text-center'>
					<h2 className='font-secondary text-3xl sm:text-4xl md:text-[40px] font-bold text-accent max-w-xl'>
						Wanna get a <br /> free{" "}
						<span className='text-primary'>consultation today?</span>
					</h2>

					<h5 className='my-4 sm:my-6 text-base sm:text-lg text-accent'>
						Get your own 30-minute video consultation absolutely for free!
					</h5>

					<button className='py-2 sm:py-3 border text-sm sm:text-lg border-accent shadow px-6 sm:px-8 bg-transparent text-accent'>
						Schedule a Call
					</button>
				</div>
			</div>

			{/* footer section */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 container mx-auto mt-16 text-accent px-4'>
				<div className='lg:col-span-4'>
					<Image src={"/assets/logo.png"} alt='logo' width={240} height={200} />
				</div>
				<div className='lg:col-span-2'>
					<h2 className='text-lg sm:text-xl font-bold'>Who We Are</h2>
					<ul className='space-y-2 lg:space-y-4 mt-2 sm:mt-3'>
						<li>About Us</li>
						<li>Works</li>
						<li>Blog</li>
						<li>Contact Us</li>
					</ul>
				</div>
				<div className='lg:col-span-3'>
					<h2 className='text-lg sm:text-xl font-bold'>Services</h2>
					<ul className='space-y-2 sm:space-y-4 mt-2 sm:mt-3'>
						<li>Online Branding & PR Management</li>
						<li>Google Rank Booster</li>
						<li>Lead Generation</li>
						<li>Web Design & Development</li>
						<li>E-commerce Store Management</li>
					</ul>
				</div>
				<div className='lg:col-span-3'>
					<h2 className='text-lg sm:text-xl font-bold'>Join a Newsletter</h2>
					<div className='space-y-3 mt-3'>
						<div className='flex flex-col gap-2.5'>
							<label htmlFor='email'>Your Email</label>
							<input
								type='email'
								id='email'
								name='email'
								placeholder='Enter your email'
								className='bg-gray text-gray-200 px-4 py-3 text-sm'
							/>
						</div>

						<div className='flex items-start gap-2 pb-3'>
							<input
								type='checkbox'
								name='agree'
								id='agree'
								className='mt-1 bg-gray text-gray-200'
							/>
							<label htmlFor='agree' className='text-sm'>
								by signing up, you agree to receive mail.
							</label>
						</div>
						<button className='py-3 border border-accent shadow px-8 bg-primary text-accent'>
							Subscribe
						</button>
					</div>
				</div>
			</div>

			<hr className='border-accent/50 my-8 container mx-auto px-4' />

			{/* footer section address */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-8 2xl:gap-32 container mx-auto mt-8 text-accent px-4'>
				<div className='lg:col-span-3'>
					<h2 className='text-lg sm:text-xl font-bold'>Primary Location</h2>
					<ul className='space-y-2 sm:space-y-4 mt-2 sm:mt-3'>
						<li className='text-sm text-grayLight'>
							701 Tillery Street Unit 12-1669 Austin, Texas 78702, United States
						</li>
						<li>+12792783322</li>
					</ul>
				</div>
				<div className='lg:col-span-3'>
					<h2 className='text-lg sm:text-xl font-bold'>Bangladesh Office</h2>
					<ul className='space-y-2 sm:space-y-4 mt-2 sm:mt-3'>
						<li className='text-sm text-grayLight'>
							Floor:6th, House: B/158, Road: 22, Mohakhali DOHS, Dhaka 1206,
							Bangladesh
						</li>
						<li>+880 1958229655</li>
					</ul>
				</div>
				<div className='lg:col-span-2'>
					<h2 className='text-lg sm:text-xl font-bold'>Mail Us </h2>
					<ul className='space-y-2 mt-3'>
						<li className='text-sm text-grayLight'>hello@skillerszone.com</li>
					</ul>
				</div>
				<div className='lg:col-span-2'>
					<h2 className='text-lg sm:text-xl font-bold'>Follow Us </h2>
					<ul className='mt-3 flex items-center gap-4'>
						<Link href='https://www.facebook.com/skillerszone/'>
							<Facebook size={20} />
						</Link>
						<Link href='https://www.instagram.com/skillerszone/'>
							<Instagram size={20} />
						</Link>
						<Link href='https://twitter.com/skillerszone'>
							<Twitter size={20} />
						</Link>
					</ul>
				</div>
			</div>

			{/* footer company logo */}
			<div className='relative mt-5 md:mt-16 container mx-auto'>
				<h1 className='uppercase font-secondary text-[48px] sm:text-[80px] md:text-[100px] lg:text-[140px] 2xl:text-[190px] text-primary text-center'>
					SKILLERSZONE
				</h1>
				<Image
					src={"/assets/elements/blur-element.png"}
					alt='texture'
					className='absolute top-0 left-0 h-full object-contain w-full'
					width={1000}
					height={1000}
				/>
			</div>
		</footer>
	);
};

export default Footer;
