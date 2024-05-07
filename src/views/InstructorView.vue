<!-- src/views/InstructorView.vue -->
<template>
    <section class="instructor-dashboard container">
        <div class="row">
            <div class="twelve columns">
                <img alt="Instructor Dashboard" src="@/assets/img/instructor-logo.png" />
            </div>
        </div>
        <div class="row">
            <div class="twelve columns">
                <p>{{ title }}</p>
            </div>
        </div>
        <div class="row">
            <div class="twelve columns">
                <PilotStatistics />
            </div>
        </div>
        <div class="row">
            <div class="twelve columns">
                <PilotChart />
            </div>
        </div>
    </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import { ref, onMounted } from 'vue';
import PilotStatistics from '@/components/PilotStatistics.vue';
import PilotChart from '@/components/PilotChart.vue';

// Reactive data definitions
const title = 'Instructor Dashboard - Overview of Pilot Performance';
const chartData = ref(null);
const chartOptions = ref({
    responsive: true,
    scales: {
        y: {
            beginAtZero: true
        }
    }
});

// Gradient function now can be defined as a regular function
function setGradientColor(canvas, colorStops) {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 450);
    colorStops.forEach(stop => {
        gradient.addColorStop(stop.position, stop.color);
    });
    return gradient;
}

// Data initialization
function initChartData() {
    try {
        const canvas = document.createElement('canvas');
        if (!canvas.getContext) {
            throw new Error('Canvas is not supported on this browser.');
        }
        const goldGradient = setGradientColor(canvas, [
            { position: 0, color: 'rgba(255, 215, 0, 0.9)' },
            { position: 0.5, color: 'rgba(255, 215, 0, 0.25)' },
            { position: 1, color: 'rgba(255, 215, 0, 0)' }
        ]);
        const silverGradient = setGradientColor(canvas, [
            { position: 0, color: 'rgba(192, 192, 192, 0.9)' },
            { position: 0.5, color: 'rgba(192, 192, 192, 0.25)' },
            { position: 1, color: 'rgba(192, 192, 192, 0)' }
        ]);

        chartData.value = {
            labels: ['January', 'February', 'March'],
            datasets: [
                {
                    label: 'Gold Dataset',
                    data: [40, 20, 12],
                    backgroundColor: goldGradient,
                    borderColor: 'rgba(255, 215, 0, 1)',
                    borderWidth: 1,
                    pointBackgroundColor: 'white',
                    pointBorderColor: 'white'
                },
                {
                    label: 'Silver Dataset',
                    data: [30, 15, 10],
                    backgroundColor: silverGradient,
                    borderColor: 'rgba(192, 192, 192, 1)',
                    borderWidth: 1,
                    pointBackgroundColor: 'white',
                    pointBorderColor: 'white'
                }
            ]
        };
    } catch (error) {
        console.error("Failed to initialize chart data:", error);
    }
}


// Ensure the chart data is initialized when the component is mounted
onMounted(() => {
    initChartData();
});
</script>


<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.instructor-dashboard {
    text-align: center;
}
img {
    margin-bottom: 20px;
}
</style>
