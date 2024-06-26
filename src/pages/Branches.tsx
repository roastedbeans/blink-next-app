'use client';
import React, { useEffect, useState } from 'react';
import { useLoading } from '@/context/LoadingContext';

const Branches = () => {
	const [hasLoaded, setHasLoaded] = useState<boolean>(false);
	const { loading, setLoading } = useLoading();

	useEffect(() => {
		if (!loading && !hasLoaded) {
			const startLoading = async () => {
				setLoading(true);
				// Simulate an async operation
				setTimeout(() => {
					setLoading(false);
					setHasLoaded(true);
				}, 2000);
			};

			startLoading();
		}
	}, [loading]);

	return (
		<div className='flex w-full min-h-screen h-full items-center justify-center text-center bg-gradient-to-tr from-background-secondary to-background dark:from-dark-background-secondary dark:to-dark-background relative md:p-8 p-4'>
			test
		</div>
	);
};

export default Branches;
