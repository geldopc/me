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
				const distance = Math.abs(rect.top - 100); // 100px do topo da viewport

				// Se esta seção é mais próxima do ponto de detecção (100px do topo)
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
		// Chamar uma vez na montagem para definir a seção inicial
		setTimeout(handleScroll, 0);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return activeSection;
}
