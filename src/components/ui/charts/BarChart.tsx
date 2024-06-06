'use client';
import { BarChart } from '@tremor/react';
import { codGrayColors, confettiColors } from './chartColors';

const chartdata = [
	{
		name: 'Topic 1',
		'Group A': 890,
		'Group B': 338,
		'Group C': 538,
		'Group D': 396,
		'Group E': 138,
		'Group F': 436,
	},
];

const dataFormatter = (number: number) => Intl.NumberFormat('us').format(number).toString();

export function BarChartTemplate() {
	return (
		<BarChart
			className='mt-6'
			data={chartdata}
			index='name'
			categories={['Group A', 'Group B', 'Group C', 'Group D', 'Group E', 'Group F']}
			colors={codGrayColors}
			valueFormatter={dataFormatter}
			yAxisWidth={48}
		/>
	);
}
