import { DonutChart, EventProps } from '@tremor/react';
import React from 'react';
import { codGrayColors, confettiColors } from './chartColors';

const sales = [
	{
		name: 'New York',
		sales: 980,
	},
	{
		name: 'London',
		sales: 456,
	},
	{
		name: 'Hong Kong',
		sales: 390,
	},
	{
		name: 'San Francisco',
		sales: 240,
	},
	{
		name: 'Singapore',
		sales: 190,
	},
];

const valueFormatter = (number: number) => `$ ${Intl.NumberFormat('us').format(number).toString()}`;

export function DonutChartTemplate() {
	const [value, setValue] = React.useState<EventProps>(null);
	console.log(value);
	return (
		<DonutChart
			data={sales}
			category='sales'
			variant='donut'
			index='name'
			valueFormatter={valueFormatter}
			colors={codGrayColors}
			onValueChange={(v) => setValue(v)}
		/>
	);
}
