'use client';
import React from 'react';
import { TypewriterEffect } from './typewriter-effect';
import { usePathname } from 'next/navigation';

const Header = () => {
	const pathName = usePathname();

	console.log(pathName);
	const headerText = [{ text: pathName || '', className: 'text-secondary dark:text-dark-secondary' }];

	return (
		<div className='flex w-full md:p-8 p-4 bg-transparent absolute z-40'>
			<TypewriterEffect
				words={headerText}
				className='lg:text-lg md:text-md sm:text-sm justify-center text-secondary dark:text-dark-secondary'
				cursorClassName='bg-secondary dark:bg-dark-secondary'
			/>
		</div>
	);
};

export default Header;
