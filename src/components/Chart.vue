<template>
  <div>
    <apexchart
      ref="chart"
      type="line"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  props: {
    seriesData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      series: [],
      noData: {
        text: 'Loading...'
      },
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
          text: 'Vendas por mês'
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
              text: 'Dados em barra'
            }
          },
          {
            opposite: true,
            title: {
              text: 'Dados em linha'
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
  },
  watch: {
    seriesData(newVal) {
      if (newVal) {
        this.updateChart(newVal)
      }
    }
  },
  methods: {
    updateChart(chartData) {
      var newData = chartData

      this.$refs.chart.updateSeries([
        {
          name: 'Dados em barra',
          type: 'column',
          data: newData,
          color: '#FFAA05'
        },
        {
          name: 'Dados em linha',
          type: 'line',
          data: newData,
          color: '#00FF66'
        }
      ])
    }
  }
}
</script>
