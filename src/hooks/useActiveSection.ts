import { useEffect, useState } from "react";

export function useActiveSection() {
	const [activeSection, setActiveSection] = useState<string>("");

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll("[data-section]");
			let closestSection = "";
			let closestDistance = Infinity;

			sections.forEach((section) => {
				const rect = section.getBoundingClientRect();
				const distance = Math.abs(rect.top - 100);

				if (distance < closestDistance) {
					closestDistance = distance;
					closestSection = section.getAttribute("data-section") || "";
				}
			});

			if (closestSection) {
				setActiveSection(closestSection);
			}
		};

		window.addEventListener("scroll", handleScroll);
		setTimeout(handleScroll, 0);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return activeSection;
}
