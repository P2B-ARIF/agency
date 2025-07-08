"use client";

import useMediaQuery from "@/utils/useMediaQuery";
import VideoAnimation from "./VideoAnimation";
import VideoCard from "./VideoCard";

const PortfolioVideoAnimation = () => {
	// const [isMobile, setIsMobile] = useState(true);
	const isMobile = useMediaQuery("(max-width: 992px)");

	// useEffect(() => {
	// 	const handleResize = () => {
	// 		setIsMobile(window.innerWidth <= 992);
	// 	};
	// 	handleResize();
	// 	window.addEventListener("resize", handleResize);
	// 	return () => window.removeEventListener("resize", handleResize);
	// }, []);

	return <>{isMobile ? <VideoCard /> : <VideoAnimation />}</>;
};

export default PortfolioVideoAnimation;
