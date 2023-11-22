import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { categoryImages, getCategoryColor } from '../Card/constants';

const WasteBar = ({ data }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const sortedData = data.consumption.sort((a, b) => b.categoryPrice - a.categoryPrice);
  
    const formattedData = sortedData.map(item => ({
      name: item.category,
      data: [item.categoryPrice],
    }));
  
    setChartData(formattedData);
  }, [data]);

  const options = {
    chart: {
      type: 'bar',
      stacked: true,
      stackType: '100%',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: 40,
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff'],
    },
    xaxis: {
      labels: { show: false },
    },
    yaxis: { show: false },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + '원';
        },
      },
    },
    fill: {
      opacity: 0.8,
      colors: chartData.map(item => getCategoryColor(item.name)),
    },
    legend: { show: false },
  };

  return (
    <div id="chart" style={{ margin: '0 auto', borderRadius: '20px' }}>
      <ReactApexChart options={options} series={chartData} type="bar" height={70} style={{ marginRight: '20px' }} />
    </div>
  );
};

export default WasteBar;
