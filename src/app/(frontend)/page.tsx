import SmoothLayout from "@/layouts/SmoothLayout";
import React from "react";
import PortfolioVideoAnimation from "./_components/portfolio-video-animation/PortfolioVideoAnimation";
import OurServices from "./_components/our-services/OurServices";
import SuccessStories from "./_components/success-stories/SuccessStories";
import Testimonials from "./_components/testimonials-section/Testimonials";
import FAQSection from "./_components/FaqSection";
import OurAchievements from "./_components/OurAchievements";
import TimelineSteps from "./_components/StrategiesTimeline";

const page = () => {
	return (
		<main>
			<SmoothLayout>
				<PortfolioVideoAnimation />
				<OurServices />
				<SuccessStories />
				<Testimonials />
				<FAQSection />
				<OurAchievements />
				<TimelineSteps />
			</SmoothLayout>
		</main>
	);
};

export default page;
