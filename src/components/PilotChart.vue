<template>
    <line-chart
        :chart-data="chartData"
        :options="chartOptions"
        :height="400"
    />
</template>

<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    name: 'LineChart',
    extends: Line,
    mixins: [reactiveProp],
    props: ['chartData', 'options'],
    mounted() {
        this.renderChart(this.chartData, this.options);
    },
    methods: {
        setGradientColor(canvas, colorStops) {
            const ctx = canvas.getContext('2d');
            const gradient = ctx.createLinearGradient(0, 0, 0, 450);
            colorStops.forEach(stop => {
                gradient.addColorStop(stop.position, stop.color);
            });
            return gradient;
        }
    },
    watch: {
        chartData: {
            deep: true,
            handler() {
                if (this.$data._chart) {
                    this.$data._chart.destroy();
                    this.renderChart(this.chartData, this.options);
                }
            }
        }
    }
}
</script>
