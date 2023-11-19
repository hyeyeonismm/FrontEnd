import React from 'react';
import ReactApexChart from 'react-apexcharts';

class WasteBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        { name: '식비', data: [10] },
        { name: '패션/쇼핑', data: [10] },
        { name: '의료/건강', data: [10] },
        { name: '전기/전자', data: [10] },
        { name: '금융', data: [10] },
        { name: '생활', data: [10] },
        { name: '문화/여가', data: [10] },
        { name: '교통', data: [10] },
        { name: '교육', data: [20] },
      ],
      options: {
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
              return val + '%';
            },
          },
        },
        fill: {
          opacity: 0.8,
          colors: ['#FFE24A', '#AEB1FF', '#4EC68C', '#7392FF', '#FFB1B1', '#B8B8B8', '#88BDE7', '#FF7979', '#FFA943'],
        },
        legend: { show: false },
      },
    };
  }

  render() {
    return (
      <div id="chart" style={{ margin: '0 auto', borderRadius: '20px' }}>
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={70} style={{ marginRight: '20px' }} />
      </div>
    );
  }
}

export default WasteBar;
