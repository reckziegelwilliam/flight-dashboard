<!--|== Template =============================================================================== -->
<template>
    <div class="pilot-statistics">
        <h2>Key Pilot Statistics</h2>
        <ul>
            <li>Total Pilots: {{ totalPilots }}</li>
            <li>Average Flight Hours: {{ averageFlightHours }}</li>
            <li>Max Flight Hours: {{ maxFlightHours }}</li>
        </ul>
    </div>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
// Mock data, replace with actual data fetching logic
const totalPilots = 150;
const averageFlightHours = 320;
const maxFlightHours = 500;
</script>

<!--|== CSS ==================================================================================== -->
<style scoped>
.pilot-statistics {
    text-align: left;
};
ul {
    list-style-type: none;
    padding: 0;
};
li {
    margin-bottom: 10px;
};
</style>