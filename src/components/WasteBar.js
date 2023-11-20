import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const WasteBar = ({ data }) => {
  const [chartData, setChartData] = useState([]);
  const getCategoryColor = (category) => {
    switch (category) {
      case "식비":
        return '#FFE24A';
      case "패션/쇼핑":
        return '#AEB1FF';
      case "의료/건강":
        return '#4EC68C';
      case "전기/전자":
        return '#7392FF';
      case "생활":
        return '#FFB1B1';
      case "문화/여가":
        return '#B8B8B8';
      case "교통":
        return '#88BDE7';
      case "여행/숙박":
        return '#FF7979';
      case "교육":
        return '#FFA943';
      case "금융":
        return '#8ED56C';
      default:
        return '#000000'; 
    }
  };

  useEffect(() => {
    // 정렬
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
