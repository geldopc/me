import {
	EnvelopeOpenIcon,
	GithubLogoIcon,
	LinkedinLogoIcon,
} from "@phosphor-icons/react";
import { useLanguage } from "@/hooks/useLanguage";

export function Contact() {
	const { strings } = useLanguage();

	const contacts = [
		{
			id: "email",
			label: strings.contact.email,
			href: "mailto:geldopc@gmail.com",
			icon: EnvelopeOpenIcon,
		},
		{
			id: "linkedin",
			label: strings.contact.linkedin,
			href: "https://linkedin.com/in/geldopc",
			icon: LinkedinLogoIcon,
		},
		{
			id: "github",
			label: strings.contact.github,
			href: "https://github.com/geldopc",
			icon: GithubLogoIcon,
		},
	];

	return (
		<section
			id="contact"
			className="mx-auto px-6 py-24 border-black/10 dark:border-white/10 border-t max-w-7xl"
		>
			<div className="space-y-8">
				<div className="space-y-4">
					<h2 className="font-space-grotesk font-bold text-3xl">
						{strings.contact.title}
					</h2>
					<p className="max-w-2xl text-black/60 dark:text-white/60 text-lg">
						{strings.contact.description}
					</p>
				</div>

				<div className="flex flex-wrap gap-4">
					{contacts.map((contact) => {
						const Icon = contact.icon;
						return (
							<a
								key={contact.id}
								href={contact.href}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 px-4 py-2 border border-black/20 dark:border-white/20 rounded-md transition-colors"
							>
								<Icon size={20} />
								<span className="font-medium text-sm">{contact.label}</span>
							</a>
						);
					})}
				</div>
			</div>
		</section>
	);
}
