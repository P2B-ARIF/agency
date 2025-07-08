"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function SmoothLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		const lenis = new Lenis({
			lerp: 0.05,
			smooth: true,
			direction: "vertical",
		});
		const update = (time: any) => {
			lenis.raf(time);
			requestAnimationFrame(update);
		};
		requestAnimationFrame(update);
		return () => {
			lenis.destroy();
		};
	}, []);

	return <div>{children}</div>;
}
