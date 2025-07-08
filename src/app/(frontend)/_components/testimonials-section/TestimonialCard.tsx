export default function TestimonialCard({ testimonial }) {
	return (
		<div className='bg-[#F4F6FA] p-6 shadow-sm max-sm:w-[300px] max-w-[450px] flex-shrink-0 flex flex-col justify-between'>
			<p className='text-gray-700 mb-4 text-sm'>{testimonial.text}</p>
			<div className='flex items-center mt-1 sm:mt-5'>
				<div className='w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-3'>
					{/* Placeholder avatar */}
					<div className='w-full h-full bg-grayLight rounded-full'></div>
				</div>
				<div>
					<h4 className='font-medium text-sm'>{testimonial.name}</h4>
					<p className='text-gray-500 text-xs'>{testimonial.position}</p>
				</div>
			</div>
		</div>
	);
}
