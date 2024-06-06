'use client';

import Image from 'next/image';
import React from 'react';
import { WobbleCard } from '../wobble-card';

export function SummaryReportTemplate() {
	const summaryReport = '2024 Sales';
	const summarySales = '₱245,000';
	const summarySalesMonth = '+₱25,000';
	return (
		<WobbleCard
			containerClassName='h-full bg-secondary min-h-full'
			className=''>
			<div className='max-w-xs'>
				<h2 className='text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-confetti-400'>
					{summaryReport}
				</h2>
				<p className='mt-4 text-left text-base/6 text-neutral-200 text-confetti-50'>{summarySales}</p>
				<p className='mt-4 text-left text-sm/6 text-neutral-200 text-confetti-50'>{summarySalesMonth}</p>
			</div>
		</WobbleCard>
	);
}
