import React from 'react';
import ReactApexChart from 'react-apexcharts';

class DetailWaste extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'Marine Sprite',
        data: [44]
      }, {
        name: 'Striking Calf',
        data: [53]
      }, {
        name: 'Tank Picture',
        data: [12]
      }, {
        name: 'Bucket Slope',
        data: [9]
      }, {
        name: 'Reborn Kid',
        data: [25]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 100,
          stacked: true,
          stackType: '100%'
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: 30,
          },
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        xaxis: {
          categories: [1],
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
          position: 'bottom',
          horizontalAlign: 'left',
          offsetX: 10
        }
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart 
        options={this.state.options} series={this.state.series} type="bar" height={350} 
        style={{
        }}/>
      </div>
    );
  }
}

export default DetailWaste;
