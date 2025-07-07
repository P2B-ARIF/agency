"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function SmoothLayout({ children }) {
	useEffect(() => {
		const lenis = new Lenis({
			lerp: 0.05,
			smooth: true,
			direction: "vertical",
		});
		const update = time => {
			lenis.raf(time);
			requestAnimationFrame(update);
		};
		requestAnimationFrame(update);

		// optional: lenis event listener (যদি future-এ দরকার হয়)
		// lenis.on('scroll', (e) => {
		// 	console.log(e);
		// });

		return () => {
			lenis.destroy();
		};
	}, []);

	return <div>{children}</div>;
}
