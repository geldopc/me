import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";
import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef } from "react";
import "./ScrambledText.css";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

interface ScrambledTextProps {
	id: string;
	children: ReactNode;
	className?: string;
	style?: CSSProperties;
	radius?: number;
	duration?: number;
	speed?: number;
	scrambleChars?: string;
}

export function ScrambledText({
	id,
	children,
	className = "",
	style = {},
	radius = 100,
	duration = 1.2,
	speed = 0.5,
	scrambleChars = ".:",
}: ScrambledTextProps) {
	const rootRef = useRef<HTMLDivElement | null>(null);
	const charsRef = useRef<Element[]>([]);

	useEffect(() => {
		if (!rootRef.current) {
			return;
		}

		const paragraphElement = rootRef.current.querySelector("p");
		if (!paragraphElement) {
			return;
		}

		const split = SplitText.create(paragraphElement, {
			type: "chars",
			charsClass: "char",
		});
		charsRef.current = split.chars;

		charsRef.current.forEach((character) => {
			if (!(character instanceof HTMLElement)) {
				return;
			}

			const { width } = character.getBoundingClientRect();

			gsap.set(character, {
				display: "inline-block",
				width,
				minWidth: width,
				attr: { "data-content": character.innerHTML },
			});
		});

		function handleMove(event: PointerEvent) {
			charsRef.current.forEach((character) => {
				if (!(character instanceof HTMLElement)) {
					return;
				}

				const { left, top, width, height } = character.getBoundingClientRect();
				const dx = event.clientX - (left + width / 2);
				const dy = event.clientY - (top + height / 2);
				const distance = Math.hypot(dx, dy);

				if (distance < radius) {
					gsap.to(character, {
						overwrite: true,
						duration: duration * (1 - distance / radius),
						scrambleText: {
							text: character.dataset.content || "",
							chars: scrambleChars,
							speed,
						},
						ease: "none",
					});
				}
			});
		}

		const element = rootRef.current;
		element.addEventListener("pointermove", handleMove);

		return function cleanupScrambledText() {
			element.removeEventListener("pointermove", handleMove);
			split.revert();
		};
	}, [duration, radius, scrambleChars, speed]);

	return (
		<div
			id={id}
			ref={rootRef}
			className={`scrambled-text-block ${className}`.trim()}
			style={style}
		>
			<p id={`${id}-content`}>{children}</p>
		</div>
	);
}
