<template>
  <div id="chart">
    <apexchart
      type="line"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [
        {
          name: 'Website Blog',
          type: 'column',
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
          color: '#FFAA05'
        },
        {
          name: 'Social Media',
          type: 'line',
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
          color: '#00FF66'
        }
      ],
      chartOptions: {
        chart: {
          foreColor: '#ffffff',
          height: 350,
          type: 'line',
          background: '#494949'
        },
        stroke: {
          width: [0, 4]
        },
        title: {
          text: 'Traffic Sources'
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        labels: [
          'Jan 2023',
          'Feb 2023',
          'Mar 2023',
          'Apr 2023',
          'May 2023',
          'Jun 2023',
          'Jul 2023',
          'Aug 2023',
          'Sep 2023',
          'Oct 2023',
          'Nov 2023',
          'Dec 2023'
        ],
        xaxis: {
          type: 'datetime'
        },
        yaxis: [
          {
            title: {
              text: 'Website Blog'
            }
          },
          {
            opposite: true,
            title: {
              text: 'Social Media'
            }
          }
        ],
        legend: {
          labels: {
            colors: '#FFFFFF' // change the legend color here
          }
        }
      }
    }
  }
}
</script>
