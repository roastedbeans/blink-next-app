// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useMotionTemplate, useMotionValue, motion, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Eye, EyeClosed, WarningCircle } from '@phosphor-icons/react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, placeholder, error, errorMessage, value, icon, disabled, ...props }, ref) => {
		const radius = 100; // change this to increase the rdaius of the hover effect
		const [visible, setVisible] = React.useState(false);
		const [showPassword, setShowPassword] = React.useState(false);

		let mouseX = useMotionValue(0);
		let mouseY = useMotionValue(0);

		function handleMouseMove({ currentTarget, clientX, clientY }: any) {
			let { left, top } = currentTarget.getBoundingClientRect();

			mouseX.set(clientX - left);
			mouseY.set(clientY - top);
		}

		return (
			<div className='space-y-0'>
				<motion.div
					style={{
						background: useMotionTemplate`
					radial-gradient(
						${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
						${error ? 'var(--destructive)' : disabled ? 'var(--border-disabled)' : 'var(--border)'} ,
						transparent 80%
					)
      `,
					}}
					onMouseMove={handleMouseMove}
					onMouseEnter={() => setVisible(true)}
					onMouseLeave={() => setVisible(false)}
					className='p-[2px] rounded-lg transition duration-300 group/input relative flex w-full items-center justify-start'>
					<span className={cn(`px-3 absolute text-xl text-textColor-subtle w-fit`, className)}>{icon}</span>
					<input
						value={value}
						type={type}
						placeholder={placeholder}
						disabled={disabled}
						className={cn(
							`flex h-10 w-full bg-white dark:bg-dark-background text-textColor dark:text-dark-textColor border shadow-input rounded-md py-2 text-sm  file:border-0 file:bg-transparent 
						file:text-sm file:font-medium placeholder:text-textColor-placeholder dark:placeholder:text-dark-textColor-placeholder focus-visible:outline-none focus-visible:ring-[1.5px] 
						 disabled:cursor-not-allowed disabled:bg-muted focus-visible:border-transparent dark:shadow-sm]
						group-hover/input:shadow-none transition duration-400
						${
							error
								? 'border-destructive focus-visible:ring-destructive dark:focus-visible:ring-dark-destructive pr-10'
								: 'border-border focus-visible:ring-ring dark:focus-visible:ring-dark-ring pr-3'
						}
						${icon ? 'pl-10' : 'pl-3'} `,
							className
						)}
						ref={ref}
						{...props}
					/>
					{type == 'password' && (
						<div className='absolute top-2.5 right-4'>
							<button
								onMouseMove={handleMouseMove}
								onMouseEnter={() => setVisible(showPassword)}
								onMouseLeave={() => setVisible(false)}
								className='relative text-textColor flex gap-2 items-center justify-center'
								onClick={() => setShowPassword(!showPassword)}>
								<AnimatePresence>
									{showPassword && value && (
										<motion.div
											initial={{ opacity: 0, y: 20, x: 30, scale: 0 }}
											animate={{
												opacity: 1,
												y: 0,
												x: 0,
												scale: 1,
												transition: {
													type: 'spring',
													stiffness: 260,
													damping: 10,
												},
											}}
											exit={{ opacity: 0, y: -20, x: 30, scale: 0 }}
											className='flex text-xs flex-col items-end justify-end text-end rounded-md bg-white border border-border z-50 shadow-xl px-2 py-1 absolute top-5 right-3'>
											<div className='text-textColor-emphasis relative z-30 text-sm text-nowrap'>{value}</div>
										</motion.div>
									)}
								</AnimatePresence>
								<EyeClosed
									size={24}
									className={`${
										showPassword ? 'scale-y-0' : 'scale-y-100'
									} transition-all text-textColor-subtle absolute`}
								/>
								<Eye
									size={24}
									className={`${showPassword ? 'scale-y-100' : 'scale-y-0'} transition-all text-textColor-emphasis`}
								/>
							</button>
						</div>
					)}

					{error && (
						<motion.span
							initial={{ opacity: 0, y: 10, x: 0, scale: 0 }}
							animate={{
								opacity: 1,
								y: 0,
								x: 0,
								scale: 1,
								transition: {
									type: 'spring',
									stiffness: 260,
									damping: 10,
								},
							}}
							exit={{ opacity: 0, y: 10, x: 0, scale: 0 }}
							className={cn(`px-3 absolute text-xl text-destructive w-fit right-0`, className)}>
							<WarningCircle weight='fill' />
						</motion.span>
					)}
				</motion.div>
				{error && (
					<span className=' text-dark-destructive italic text-xs lowercase items-center flex gap-1'>
						{errorMessage}
					</span>
				)}
			</div>
		);
	}
);
Input.displayName = 'Input';

export { Input };
