import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { CircleNotch } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'relative group/btn inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-outline focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				//primary button variants
				default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
				destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
				outline: 'border border-primary bg-transparent text-primary shadow-sm hover:bg-primary/10 ',
				gradient:
					'bg-gradient-to-b hover:bg-primary from-primary/80 to-primary text-primary-foreground shadow-sm backdrop-blur-md',
				ghost: 'hover:bg-primary/10 text-primary hover:text-primary backdrop-blur-md',
				link: 'text-primary underline-offset-4 hover:underline',

				//secondary button variants
				'secondary-default': 'bg-secondary text-secondary-foreground shadow hover:bg-secondary/90',
				'secondary-destructive': 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
				'secondary-outline': 'border border-secondary bg-transparent text-secondary shadow-sm hover:bg-secondary/10',
				'secondary-gradient':
					'bg-gradient-to-b hover:bg-secondary from-secondary/80 to-secondary text-secondary-foreground shadow-sm backdrop-blur-md',
				'secondary-ghost': 'hover:bg-secondary/10 text-secondary backdrop-blur-md',
				'secondary-link': 'text-secondary underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-9 px-4 py-2',
				sm: 'h-8 rounded-md px-3 text-xs',
				lg: 'h-10 rounded-md px-8',
				icon: 'h-9 w-9',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	loading: boolean;
	bottomGradient?: boolean;
	children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, children, loading, variant, size, bottomGradient = false, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<>
				<Comp
					disabled={loading}
					className={cn(buttonVariants({ variant, size, className }))}
					ref={ref}
					{...props}>
					{loading ? (
						<div className='relative w-fit flex items-center justify-center'>
							<CircleNotch
								size={14}
								className=' animate-spin absolute'
							/>
							<span className='invisible'>{children}</span>
						</div>
					) : (
						children
					)}
					{bottomGradient && <BottomGradient variant={variant} />}
				</Comp>
			</>
		);
	}
);
Button.displayName = 'Button';

const BottomGradient = (variant: VariantProps<typeof buttonVariants>) => {
	console.log(variant);
	let color = 'via-primary';
	if (variant?.variant?.split('-')[0] === 'secondary') {
		color = 'via-secondary';
	}
	return (
		<>
			<span
				className={`group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent ${color} to-transparent`}
			/>
			<span
				className={`group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent ${color} to-transparent`}
			/>
		</>
	);
};

export { Button, buttonVariants };
