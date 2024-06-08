'use client';
import React from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { BentoGridCharts, BentoGridItemCharts } from '@/components/ui/bento-grid-charts';
import LineChartTemplate from '@/components/ui/charts/LineChart';
import { BarChartTemplate } from '@/components/ui/charts/BarChart';
import { DonutChartTemplate } from '@/components/ui/charts/DonutChart';
import { AreaChartTemplate } from '@/components/ui/charts/AreaChart';
import { PieChartTemplate } from '@/components/ui/charts/PieChart';
import { SummaryReportTemplate } from '@/components/ui/charts/SummaryReport';

const Charts = () => {
	return (
		<div className='flex w-full min-h-screen h-full items-center justify-center text-center bg-gradient-to-tr from-background-secondary to-background relative md:p-8 p-4'>
			{/* <BackgroundBeams /> */}
			<BentoGridCharts className='max-w-4xl w-full md:auto-rows-[20rem] z-10'>
				{items.map((item, i) => (
					<BentoGridItemCharts
						key={i}
						figure={item.figure}
						card={item.card}
						className={item.className}
					/>
				))}
			</BentoGridCharts>
		</div>
	);
};

const LineChart = () => (
	<div className='p-2 items-center justify-center flex flex-col flex-1 w-full h-full min-h-[7rem] rounded-xl border-2 border-border bg-white dark:bg-black'>
		<LineChartTemplate />
	</div>
);

const BarChart = () => (
	<div className='p-2 items-center justify-center flex flex-col flex-1 w-full h-full min-h-[7rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border-2 border-border dark:border-white/[0.2] bg-white dark:bg-black'>
		<BarChartTemplate />
	</div>
);

const DonutChart = () => (
	<div className='p-2 items-center justify-center flex flex-col flex-1 w-full h-full min-h-[7rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border-2 border-border dark:border-white/[0.2] bg-white dark:bg-black'>
		<DonutChartTemplate />
	</div>
);
const PieChart = () => (
	<div className='p-2 items-center justify-center flex flex-col flex-1 w-full h-full min-h-[7rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border-2 border-border dark:border-white/[0.2] bg-white dark:bg-black'>
		<PieChartTemplate />
	</div>
);

const AreaChart = () => (
	<div className='p-2 items-center justify-center flex flex-col flex-1 w-full h-full min-h-[7rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border-2 border-border dark:border-white/[0.2] bg-white dark:bg-black'>
		<AreaChartTemplate />
	</div>
);

const SummaryReport = () => (
	<div className='items-center justify-center flex flex-col flex-1 w-full h-full min-h-[7rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2]'>
		<SummaryReportTemplate />
	</div>
);

const Skeleton = () => (
	<div className='flex flex-col flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border-2 border-border dark:border-white/[0.2] bg-white dark:bg-black'></div>
);

const items = [
	{
		figure: <LineChart />,
		className: 'md:col-span-2 h-full',
	},
	{
		figure: <DonutChart />,
		className: 'md:col-span-1 h-full',
	},
	{
		figure: <PieChart />,
		className: 'md:col-span-1 h-full',
	},
	{
		figure: <BarChart />,
		className: 'md:col-span-2 h-full',
	},
	{
		figure: <AreaChart />,
		className: 'md:col-span-2 h-full',
	},
	{
		card: <SummaryReport />,
		className: 'md:col-span-1 p-0 m-0 space-y-0 h-full',
	},
];

export default Charts;
