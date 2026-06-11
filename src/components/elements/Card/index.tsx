import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type * as React from "react";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

const cardVariants = cva(
	"bg-card shadow-sm border border-border rounded-3xl text-card-foreground transition-colors",
	{
		variants: {
			variant: {
				default: "",
				subtle: "bg-muted/50",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

const Card = forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<"div"> &
		VariantProps<typeof cardVariants> & {
			asChild?: boolean;
		}
>(({ className, variant, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot.Root : "div";

	return (
		<Comp
			ref={ref}
			className={cn(cardVariants({ variant, className }))}
			{...props}
		/>
	);
});
Card.displayName = "Card";

function CardHeader({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn("space-y-1.5 px-6 py-6 border-border border-b", className)}
			{...props}
		/>
	);
}

function CardTitle({
	className,
	...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h3
			className={cn("font-semibold text-xl tracking-tight", className)}
			{...props}
		/>
	);
}

function CardDescription({
	className,
	...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p className={cn("text-muted-foreground text-sm", className)} {...props} />
	);
}

function CardContent({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={cn("p-6", className)} {...props} />;
}

function CardFooter({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={cn("px-6 pt-0 pb-6", className)} {...props} />;
}

export {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	cardVariants,
};
