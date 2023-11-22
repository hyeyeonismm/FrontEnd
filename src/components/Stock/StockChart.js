import React, { useState, useEffect } from 'react';
import ApexChart from 'react-apexcharts';
import { Grid, Button } from '../index';
import indiInstance from '../../api/indi';

function StockChart({ formattedDate, formattedPastDate, stockCode }) {
	const [series, setSeries] = useState([]);
	useEffect(() => {
		console.log(stockCode);
		const fetchCharts = async () => {
			try {
				const requestData = {
					st_date: formattedPastDate,
					end_date: formattedDate,
				};

				const response = await indiInstance.post(`/stock/ohlc/${stockCode}`, requestData);
				if (response.data) {
					console.log(response);
					const transformedData = response.data.result
						.map((item) => {
							return {
								x: item.date,
								y: [item.open, item.high, item.low, item.close].map(Number),
							};
						})
						.reverse();

					setSeries([{ name: '주식 가격', data: transformedData }]);
				} else {
					console.log(response);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchCharts();
	}, [formattedDate, formattedPastDate, stockCode]);

	const options = {
		chart: {
			height: 350,
			type: 'candlestick',
			zoom: {
				enabled: true,
				type: 'x',
			},
			scrollbar: {
				enabled: true,
				show: true,
				autoScaleYaxis: true,
			},
		},
		title: {
			text: '차트',
			align: 'left',
		},

		xaxis: {
			type: 'category',
			labels: {
				formatter: function (value, timestamp, index) {
					if (typeof value === 'string') {
						// 각 월의 첫 번째 데이터 포인트에만 라벨을 표시
						// 예: "2201" (2022년 1월), "2202" (2022년 2월) 등
						if (index % 12 == 0) {
							// 가정: 데이터가 매월 하나씩 있음
							return value.slice(2, 4) + '년' + value.slice(4, 6) + '월';
						}
					}
					return '';
				},
			},
			range: 70,
		},
		yaxis: {
			tooltip: {
				enabled: true,
			},
		},
		tooltip: {
			enabled: true,
		},
	};
	const url = 'https://www.shinhansec.com/siw/main/front/view.do';
	const onClickButton = () => {
		window.open(url);
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
