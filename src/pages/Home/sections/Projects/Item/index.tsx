import { ArrowUpRightIcon, GithubLogoIcon } from "@phosphor-icons/react";
import { Badge } from "@/components/elements/Badge";
import { Button } from "@/components/elements/Button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/elements/Card";
import type { Project } from "@/i18n";

export interface ItemProps {
	project: Project;
	description: string;
	liveCta: string;
	sourceCta: string;
}

export function Item({ project, description, liveCta, sourceCta }: ItemProps) {
	return (
		<Card
			id={`project-${project.id}`}
			className="hover:border-black/30 dark:hover:border-white/30"
		>
			<CardHeader className="border-none pb-0">
				<CardTitle className="font-space-grotesk text-2xl">
					{project.name}
				</CardTitle>
				<CardDescription className="text-black/70 dark:text-white/70 text-base leading-relaxed">
					{description}
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6 pt-6">
				<div className="flex flex-wrap gap-2">
					{project.tech.map((tech) => (
						<Badge
							key={tech}
							variant="outline"
							className="bg-transparent border-black/10 dark:border-white/10 text-black/60 dark:text-white/60"
						>
							{tech}
						</Badge>
					))}
				</div>
				<div className="flex flex-wrap gap-3">
					<Button asChild size="lg">
						<a href={project.url} target="_blank" rel="noopener noreferrer">
							<ArrowUpRightIcon />
							{liveCta}
						</a>
					</Button>
					{project.repo && (
						<Button asChild variant="outline" size="lg">
							<a href={project.repo} target="_blank" rel="noopener noreferrer">
								<GithubLogoIcon />
								{sourceCta}
							</a>
						</Button>
					)}
				</div>
			</CardContent>
		</Card>
	);
}
