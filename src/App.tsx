import { SplashCursor } from "@/components/SplashCursor";
import { TopMenu } from "@/components/TopMenu";
import { LanguageProvider } from "@/context/LanguageContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Home } from "@/pages/Home";

export function App() {
	const activeSection = useActiveSection();

	return (
		<LanguageProvider>
			<div
				id="app-shell"
				className="relative bg-white selection:bg-black dark:bg-black dark:selection:bg-white min-h-screen font-sans text-black selection:text-white dark:selection:text-black dark:text-white transition-colors duration-300"
			>
				<SplashCursor />
				<div id="app-content" className="z-10 relative">
					<TopMenu activeSection={activeSection} />
					<Home />
				</div>
			</div>
		</LanguageProvider>
	);
}
