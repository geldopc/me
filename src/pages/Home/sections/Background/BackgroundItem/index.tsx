import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { Background } from "..";

interface BackgroundItemProps {
	background: Background;
	isCurrent: boolean;
}

export function BackgroundItem({ background, isCurrent }: BackgroundItemProps) {
	return (
		<Card
			id={`background-item-${background.id}`}
			className={`border-none shadow-none bg-transparent transition-all duration-500 ${
				isCurrent ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"
			}`}
		>
			<CardHeader className="px-0 pt-0 pb-4 border-none">
				<div className="flex flex-col items-start gap-2">
					<CardTitle className="font-space-grotesk font-bold text-black dark:text-white text-2xl">
						{background.title}
					</CardTitle>
					<div className="flex items-center gap-3">
						<CardDescription className="font-medium text-black/60 dark:text-white/60 text-lg">
							{background.company}
						</CardDescription>
						<Badge
							variant="secondary"
							className="bg-black/10 dark:bg-white/15 text-black dark:text-white whitespace-nowrap"
						>
							{background.period}
						</Badge>
					</div>
				</div>
			</CardHeader>
			<CardContent className="space-y-6 px-0 pb-0">
				<p className="text-black/70 dark:text-white/70 text-lg leading-relaxed">
					{background.description}
				</p>
				<div className="flex flex-wrap gap-2">
					{background.skills.map((skill) => (
						<Badge
							key={skill}
							variant="outline"
							className="bg-transparent hover:bg-black/5 dark:hover:bg-white/5 border-black/10 dark:border-white/10 text-black/60 dark:text-white/60 transition-colors"
						>
							{skill}
						</Badge>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
