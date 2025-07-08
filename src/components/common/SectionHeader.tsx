const SectionHeader = ({
	subtitle,
	title,
	titleColor,
	description,
	className,
	childClassName,
}: any) => {
	return (
		<div className={`max-w-4xl mx-auto ${className || ""}`}>
			{/* Section Header */}
			<div className={`${childClassName || ""} text-center z-20`}>
				{subtitle && (
					<h6 className='uppercase font-bold text-[14px] text-primary'>
						{subtitle}
					</h6>
				)}
				{title && (
					<h2
						className={`font-secondary leading-[1.2] sm:leading-9 md:leading-[46px] 2xl:leading-[55px] text-3xl lg:text-4xl 2xl:text-[40px] font-bold ${
							titleColor || "text-accent"
						}`}
					>
						{title}
					</h2>
				)}
				{description && (
					<p className='max-w-2xl w-full mx-auto text-accent text-lg md:text-[22px] py-5'>
						{description}
					</p>
				)}
			</div>
		</div>
	);
};

export default SectionHeader;

{
	/* STRATEGIES WE FOLLOW */
}
{
	/* Our approach to <br /> meet{" "}
					<span className='text-primary'>Stories</span> */
}
{
	/* Our premium digital experiences are crafted at the core of Texas, USA.
					Being a dynamic team, we bridge the gap between brands and customers
					with creatively designed solutions. */
}
