import { gsap } from "gsap";
import { CustomBounce } from "gsap/CustomBounce";
import { CustomEase } from "gsap/CustomEase";
import { useCallback } from "react";

gsap.registerPlugin(CustomEase, CustomBounce);

CustomBounce.create("buttonBounce", { strength: 0.4, squash: 0 });

export function useAnimations() {
	const bounce = useCallback((element: HTMLElement) => {
		gsap.fromTo(
			element,
			{ scale: 0.8 },
			{ scale: 1, duration: 0.4, ease: "buttonBounce" },
		);
	}, []);

	return { bounce };
}
