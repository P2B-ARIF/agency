import useMediaQuery from "@/utils/useMediaQuery";
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
			className='relative lg:absolute top-0 left-0 h-full max-sm:min-h-[455px] sm:h-[455px] 2xl:h-[86vh] flex bg-primary text-accent shadow-md w-full border border-white/50'
		>
			<div className='p-4 md:p-5 2xl:p-10 px-4 sm:px-6 flex flex-col justify-between items-center border-r'>
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
