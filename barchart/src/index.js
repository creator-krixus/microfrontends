import * as echarts from "echarts"

const myChart = echarts.init(document.getElementById('barchart-dev'));

// Specify the configuration items and data for the chart
const options = {
    title: {
        text: 'Started Example'
    },
    tooltip: {},
    legend: {
        data: ['sales']
    },
    xAxis: {
        data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
    },
    yAxis: {},
    series: [
        {
            name: 'sales',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }
    ]
};
myChart.setOption(options);