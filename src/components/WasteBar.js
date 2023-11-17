import React from 'react';
import ReactApexChart from 'react-apexcharts';

class WasteBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: '식비',
        data: [44]
      }, {
        name: '전자기기',
        data: [53]
      }, {
        name: '여행',
        data: [12]
      }, {
        name: '공부',
        data: [9]
      }, {
        name: '카페',
        data: [25]
      }],
      options: {
        chart: {
          type: 'bar',
          stacked: true,
          stackType: '100%',
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: 40,
          },
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        xaxis: {
          labels: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "K"
            }
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          show: false,
        },
      },
    };
  }

  render() {
    return (
      <div id="chart" style={{ margin: '0 auto' }}>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={70}
          style={{
            marginRight: "20px",
          }}
        />
      </div>
    );
  }
}

export default WasteBar;
