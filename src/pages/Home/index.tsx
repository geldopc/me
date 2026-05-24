import { About } from "@/pages/Home/sections/About";
import { Backgrounds } from "@/pages/Home/sections/Background";
import { Footer } from "@/pages/Home/sections/Footer";
import { Hero } from "@/pages/Home/sections/Hero";
import { Projects } from "@/pages/Home/sections/Projects";

export function Home() {
	return (
		<main className="mx-auto px-4 max-w-6xl">
			<div data-section="hero">
				<Hero />
			</div>
			<div data-section="background">
				<Backgrounds />
			</div>
			<div data-section="projects">
				<Projects />
			</div>
			<div data-section="about">
				<About />
			</div>
			<Footer />
		</main>
	);
}
