import { About } from "@/pages/Home/sections/About";
import { Backgrounds } from "@/pages/Home/sections/Background";
import { Footer } from "@/pages/Home/sections/Footer";
import { Projects } from "@/pages/Home/sections/Projects";
import { Skills } from "@/pages/Home/sections/Skills";

export function Home() {
	return (
		<main className="mx-auto px-4 max-w-6xl">
			<div data-section="sobre">
				<About />
			</div>
			<div data-section="background">
				<Backgrounds />
			</div>
			<div data-section="skills">
				<Skills />
			</div>
			<div data-section="projects">
				<Projects />
			</div>
			<Footer />
		</main>
	);
}
