'use client';
import { LineChart, EventProps } from '@tremor/react';
import { useState } from 'react';
import { codGrayColors, confettiColors } from './chartColors';

const chartdata = [
	{
		date: 'Jan 23',
		2022: 45,
		2023: 78,
	},
	{
		date: 'Feb 23',
		2022: 52,
		2023: 71,
	},
	{
		date: 'Mar 23',
		2022: 48,
		2023: 80,
	},
	{
		date: 'Apr 23',
		2022: 61,
		2023: 65,
	},
	{
		date: 'May 23',
		2022: 55,
		2023: 58,
	},
	{
		date: 'Jun 23',
		2022: 67,
		2023: 62,
	},
	{
		date: 'Jul 23',
		2022: 60,
		2023: 54,
	},
	{
		date: 'Aug 23',
		2022: 72,
		2023: 49,
	},
	{
		date: 'Sep 23',
		2022: 65,
		2023: 52,
	},
	{
		date: 'Oct 23',
		2022: 68,
		2023: null,
	},
	{
		date: 'Nov 23',
		2022: 74,
		2023: null,
	},
	{
		date: 'Dec 23',
		2022: 71,
		2023: null,
	},
];

function LineChartTemplate() {
	const [value, setValue] = useState<EventProps>(null);

	console.log(value);
	return (
		<>
			<h3 className='text-md font-medium text-dark-500 dark:text-dark-tremor-content-strong'>Sample Data</h3>
			<LineChart
				className='mt-4 h-72'
				data={chartdata}
				showGridLines
				index='date'
				categories={['2022', '2023']}
				colors={codGrayColors}
				yAxisWidth={30}
				onValueChange={(v) => setValue(v)}
				connectNulls={true}
			/>
		</>
	);
}

export default LineChartTemplate;
