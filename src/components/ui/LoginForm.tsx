'use client';
import React, { useState } from 'react';
import { Label } from './label';
import { Input } from './input';
import { cn } from '@/lib/utils';
import { GoogleLogo } from '@phosphor-icons/react';
import { Button } from '../ui/button';
import { TypewriterEffect } from './typewriter-effect';

const headerText = [
	{ text: 'Make' },
	{ text: 'it' },
	{ text: 'possible' },
	{ text: 'with' },
	{ text: 'BLINK.', className: 'text-primary dark:text-dark-primary' },
];

export function LoginForm() {
	const [formData, setFormData] = useState<string>('test');
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Form submitted');
	};

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData(event.target.value);
	};

	return (
		<div className='max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input isolate bg-white backdrop-blur-lg shadow-lg ring-1 ring-black/5'>
			<TypewriterEffect
				words={headerText}
				className='lg:text-lg md:text-md sm:text-sm justify-center text-secondary dark:text-dark-secondary'
			/>

			<form
				className='my-8'
				onSubmit={handleSubmit}>
				<div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
					<LabelInputContainer>
						<Label htmlFor='firstname'>Username</Label>
						<Input
							id='Username'
							placeholder='acltech'
							type='text'
							error={false}
							errorMessage={'invalid username'}
						/>
					</LabelInputContainer>
					{/* <LabelInputContainer>
						<Label htmlFor='lastname'>Last name</Label>
						<Input
							id='lastname'
							placeholder='Cruz'
							type='text'
							error={false}
							errorMessage={'invalid last name'}
						/>
					</LabelInputContainer> */}
				</div>
				<LabelInputContainer className='mb-4'>
					<Label htmlFor='email'>Email Address</Label>
					<Input
						id='email'
						placeholder='blink@acltech.com'
						type='email'
						error={false}
						errorMessage={'invalid email'}
					/>
				</LabelInputContainer>
				<LabelInputContainer className='mb-4'>
					<Label htmlFor='password'>Password</Label>
					<Input
						value={formData}
						id='password'
						placeholder='••••••••'
						type='password'
						error={false}
						onChange={onChange}
						errorMessage={'invalid password'}
					/>
				</LabelInputContainer>

				<Button
					className='w-full'
					loading={false}
					size='lg'
					bottomGradient={true}
					variant={'secondary-gradient'}>
					Login &rarr;
					<BottomGradient />
				</Button>

				<div className='bg-gradient-to-r from-transparent via-dark-200 dark:via-dark-500 to-transparent my-8 h-[1px] w-full' />

				<div className='flex flex-col space-y-4'>
					<Button
						className='w-full gap-2 hover:bg-transparent'
						loading={false}
						size='lg'
						bottomGradient={true}
						variant={'outline'}>
						<GoogleLogo className='h-4 w-4 text-dark-500 dark:text-dark-100' />
						<span className='text-dark-500 dark:text-dark-100 text-sm'>Google</span>
					</Button>
				</div>
			</form>
		</div>
	);
}

const BottomGradient = () => {
	return (
		<>
			<span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-primary to-transparent' />
			<span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-secondary to-transparent' />
		</>
	);
};

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
	return <div className={cn('flex flex-col space-y-2 w-full', className)}>{children}</div>;
};
