import { cn } from '@/lib/utils';
import React from 'react';

export const BentoGridCharts = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
	return (
		<div className={cn('grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ', className)}>
			{children}
		</div>
	);
};

export const BentoGridItemCharts = ({
	className,
	description,
	figure,
	card,
}: {
	className?: string;
	description?: string | React.ReactNode;
	figure?: React.ReactNode;
	card?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				' p-4 row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-tremor-card dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col',
				className,
				card &&
					'!dark:bg-transparent !dark:border-transparent !bg-transparent !border-transparent !outline-none !shadow-none'
			)}>
			{figure}
			{card}
		</div>
	);
};
