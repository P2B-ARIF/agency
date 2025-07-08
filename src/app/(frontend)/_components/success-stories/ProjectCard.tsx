import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
const ProjectCard = ({ project }: any) => {
	return (
		<motion.div
			className='w-[400px] 2xl:w-[450px] flex-shrink-0 bg-gray overflow-hidden p-5 md:p-8 text-accent'
			initial={{ opacity: 0.6 }}
			whileInView={{ opacity: 1 }}
			whileHover={{ y: -10 }}
			transition={{ duration: 0.3 }}
		>
			<div className='pb-5 flex justify-between items-center'>
				<h3 className='font-medium'>{project.title}</h3>
				<div className='flex items-center text-sm text-gray-400'>
					<span>{project.category}</span>
					<div className='ml-1 w-6 h-6 rounded-full bg-white text-black flex items-center justify-center -rotate-45'>
						<ArrowRight size={14} />
					</div>
				</div>
			</div>
			<div className='w-full h-[300px] 2xl:h-[45vh] bg-white'>
				<Image
					src={project.imageUrl || "/placeholder.svg"}
					alt={project.title}
					width={400}
					height={500}
					className='w-full h-full object-cover'
				/>
			</div>
		</motion.div>
	);
};

export default ProjectCard;
