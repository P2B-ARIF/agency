import React from "react";
import { MdPlayArrow } from "react-icons/md";

const Header = () => {
	const title = "Transforming Ideas Into Digital Realities";
	const description =
		"We are a team of passionate individuals who strive to create innovative solutions that make a difference.";

	return (
		<section className="bg-[url('/images/bg.png')] bg-cover bg-center w-full pt-5">
			<div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-screen items-center mt-40 sm:mt-52 md:mt-18 lg:mt-16 max-md:px-5'>
				<div className='space-y-5 max-md:w-[85%]'>
					<h1 className='text-3xl md:text-5xl font-bold md:leading-[4rem] text-secondary'>
						{/* Transforming Ideas Into{" "}
						<span className='text-primary'>Digital</span> Realities */}

						{title?.split(" ").map((t, i) =>
							t.toLowerCase() === "digital" ? (
								<span key={i} className='text-primary'>
									{t}{" "}
								</span>
							) : (
								<span key={i}>{t} </span>
							),
						)}
					</h1>
					<p className='text-base md:text-lg text-gray tracking-wide w-[90%]'>
						{description}
					</p>
					<div className='flex items-center gap-3 md:gap-5'>
						<button className='bg-black text-white_c px-7 md:px-8 py-3 md:py-4 rounded-full text-sm'>
							Get Started
						</button>
						<div className='flex items-center gap-3 md:gap-5 cursor-pointer'>
							<div className='bg-primary p-2 rounded-full'>
								<MdPlayArrow size={30} className='text-white' />
							</div>
							<span className='border-dotted border-b-2 font-medium text-gray'>
								How It Works
							</span>
						</div>
					</div>

					<div className='flex items-center gap-3 relative z-[1]'>
						<div className='flex -space-x-2'>
							<img
								className='w-10 h-10 rounded-full border-2 border-white'
								src='https://bit.ly/ryan-florence'
								alt='Ryan Florence'
							/>
							<img
								className='w-10 h-10 rounded-full border-2 border-white'
								src='https://bit.ly/sage-adebayo'
								alt='Segun Adebayo'
							/>
							<img
								className='w-10 h-10 rounded-full border-2 border-white'
								src='https://bit.ly/kent-c-dodds'
								alt='Kent Dodds'
							/>
							<div className='w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium'>
								+12
							</div>
						</div>
						<div className='leading-5 text-sm font-medium text-gray'>
							<span>Satisfied Clients</span> <br />
							<span>15k+ In Globe</span>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-10 mx-auto relative px-5 md:p-10 mt-5'>
					<div>
						<div className='w-[220px] md:w-[306px] h-[150px] md:h-[220px] relative mx-auto'>
							<img
								src={`/assets/images/image3.jpg`}
								alt=''
								className='w-full h-full object-cover -rotate-[3.95deg]'
							/>

							{/* icons start */}

							<img
								src={"/elements/shape5.png"}
								alt=''
								className='absolute -top-5 -right-1 -rotate-[3.95deg] w-[52px] md:w-[62px] h-[42] md:h-[52px]'
							/>

							<img
								src={"/icons/whatsapp.png"}
								alt=''
								className='p-1 bg-white w-[30px] md:w-[40px] aspect-square absolute rounded-full -top-5 left-[20%]'
							/>

							<img
								src={"/icons/youtube.png"}
								alt=''
								className='p-2 bg-white w-[30px] md:w-[40px] aspect-square absolute rounded-full top-[20%] -left-[30%] shadow'
							/>

							<div className='bg-white rounded-full p-2 flex items-center justify-center w-[39px] md:w-[49px] aspect-square absolute top-[0%] -right-[40%] shadow'>
								<img src={"/icons/zoom.png"} alt='' className='' />
							</div>

							<div className='bg-white rounded-full p-2 flex items-center justify-center w-[30px] md:w-[40px] aspect-square absolute top-[35%] -right-[7%]'>
								<img src={"/icons/instagram.png"} alt='' className='' />
							</div>

							{/* icons end */}
						</div>
					</div>
					<div className='flex gap-5 md:gap-10'>
						<div className='w-[154px] md:w-[193px] h-[188px] md:h-[235px] relative'>
							<img
								src={`/assets/images/image1.jpg`}
								alt=''
								className='w-full h-full object-cover -rotate-[6.24deg]'
							/>
							<img
								src={"/element/shape5.png"}
								alt=''
								className='absolute -bottom-5 -left-1 rotate-180 w-[52px] md:w-[62px] h-[42px] md:h-[52px]'
							/>

							<div className='bg-white rounded-full p-2 flex items-center justify-center w-[30px] md:w-[39px] aspect-square absolute top-[35%] -left-[13%]'>
								<img src={"/icons/facebook.png"} alt='' className='' />
							</div>
						</div>
						<div className='w-[180px] md:w-[238px] h-[184px] md:h-[230px] relative'>
							<img
								src={`/assets/images/image1.jpg`}
								// src={`${baseURL}/${images?.[1]}`}
								alt=''
								className='w-full h-full object-cover rotate-[4.43deg]'
							/>
							<img
								src={"/element/shape5.png"}
								alt=''
								className='absolute -bottom-7 -right-0 rotate-[127deg] w-[52px] md:w-[62px] h-[42px] md:h-[52px]'
							/>

							<div className='bg-white rounded-full p-[6px] flex items-center justify-center w-[30px] md:w-[39px] aspect-square absolute bottom-[25%] -right-[10%]'>
								<img src={"/icons/gmail.png"} alt='' className='' />
							</div>
						</div>
					</div>

					{/* Logo, Slug, Icons Start */}

					<div className='bg-primary p-1 px-3 gap-2 flex items-center rounded-[10.35px] w-[217px] absolute -bottom-2 md:bottom-2 left-[50%] -translate-x-[50%]'>
						<div>
							<img src={"/icons/shape1.png"} alt='' className='h-[50px]' />
						</div>
						<div className='text-white space-y-1'>
							<h3 className='text-2xl leading-6'>150k+</h3>
							<h6 className='text-sm'>Project Completed</h6>
						</div>
					</div>

					<div className='flex items-center justify-between w-full absolute top-[20%] md:top-[26%] left-0 px-5 md:px-10'>
						<img
							src={"/element/shape6.png"}
							alt=''
							className='h-[100px] md:h-[126px] -rotate-[158.12deg]'
						/>
						<img
							src={"/element/shape6.png"}
							alt=''
							className='h-[90px] md:h-[106px] rotate-[10.61deg]'
						/>
					</div>

					{/* Logo, Slug, Icons end */}
				</div>
			</div>
		</section>
	);
};

export default Header;
