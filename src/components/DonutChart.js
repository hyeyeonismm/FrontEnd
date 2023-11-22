import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

function DonutChart({ data }) {
	const [series, setSeries] = useState([]);
	const [options, setOptions] = useState({
		chart: {
			type: 'donut',
		},
		labels: [],
		dataLabels: {
			enabled: false,
		},
		legend: {
			show: false,
			position: 'bottom',
			horizontalAlign: 'center',
		},
		tooltip: {
			y: {
				formatter: (value, { seriesIndex }) => {
					return data[seriesIndex].marketCap.toLocaleString('en-US') + '원';
				},
			},
		},

		responsive: [
			{
				breakpoint: 380,
				options: {
					chart: {
						width: '250px',
					},
				},
			},
		],
	});

	useEffect(() => {
		if (data.length > 0) {
			const totalMarketCap = data.reduce((total, stock) => total + stock.marketCap, 0);

			const newSeries = data.map((stock) => (stock.marketCap / totalMarketCap) * 100);
			const newLabels = data.map((stock) => stock.stockName);

			setSeries(newSeries);
			setOptions((prevOptions) => ({
				...prevOptions,
				labels: newLabels,
			}));
			console.log('Series: ', newSeries);
			console.log('Options: ', {
				...options,
				labels: newLabels,
			});
		}
	}, [data]);

	return (
		<div className='chart-wrap' style={{ maxWidth: '600px' }}>
			<Chart options={options} series={series} type='donut' />
			<div style={{ padding: '20px' }}></div>
		</div>
	);
}

export default DonutChart;
