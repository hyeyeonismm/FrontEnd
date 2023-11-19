import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ApexChart from 'react-apexcharts';
import { Grid, Img, Button } from '../index';

function StockChart() {
	const url = 'https://www.shinhansec.com/siw/main/front/view.do';
	const onClickButton = () => {
		window.open(url);
	};
	const series = [
		{
			name: 'candle',
			data: [
				{
					x: new Date(2023, 8, 15),
					y: [6629.81, 6650.5, 6623.04, 6633.33],
				},
				{
					x: new Date(2023, 8, 15),
					y: [6632.01, 6643.59, 6620, 6630.11],
				},
				{
					x: new Date(2023, 8, 15),
					y: [6630.71, 6648.95, 6623.34, 6635.65],
				},
				{
					x: new Date(2023, 8, 15),
					y: [6635.65, 6651, 6629.67, 6638.24],
				},
				{
					x: new Date(2023, 8, 15),
					y: [6638.24, 6640, 6620, 6624.47],
				},
				{
					x: new Date(2023, 8, 15),
					y: [6624.53, 6636.03, 6621.68, 6624.31],
				},
				{
					x: new Date(2023, 8, 15),
					y: [6624.61, 6632.2, 6617, 6626.02],
				},
				{
					x: new Date(2023, 8, 15),
					y: [6627, 6627.62, 6584.22, 6603.02],
				},
				{
					x: new Date(2023, 8, 15),
					y: [6605, 6608.03, 6598.95, 6604.01],
				},
				{
					x: new Date(2023, 8, 15),
					y: [6604.5, 6614.4, 6602.26, 6608.02],
				},
				{
					x: new Date(2023, 8, 15),
					y: [6608.02, 6610.68, 6601.99, 6608.91],
				},
				{
					x: new Date(2023, 8, 15),
					y: [6608.91, 6618.99, 6608.01, 6612],
				},
				{
					x: new Date(2023, 8, 15),
					y: [6612, 6615.13, 6605.09, 6612],
				},
			],
		},
	];

	const options = {
		chart: {
			height: 350,
			type: 'candlestick',
		},
		title: {
			text: '차트',
			align: 'left',
		},
		annotations: {
			xaxis: [
				{
					x: 'Oct 06 14:00',
					borderColor: '#00E396',
					label: {
						borderColor: '#00E396',
						style: {
							fontSize: '12px',
							color: '#fff',
							background: '#00E396',
						},
						orientation: 'horizontal',
						offsetY: 7,
						text: 'Annotation Test',
					},
				},
			],
		},
		tooltip: {
			enabled: true,
		},
		xaxis: {
			type: 'category',
		},
		yaxis: {
			tooltip: {
				enabled: true,
			},
		},
	};

	return (
		<>
			<Grid theme='chart'>
				<ApexChart options={options} series={series} type='candlestick' height={350} />
			</Grid>
			<Grid theme='shinhanLink'>
				<Button theme='shinhanLinkBtn' children='주주되러 가기' onClick={onClickButton} />
			</Grid>
		</>
	);
}
export default StockChart;
