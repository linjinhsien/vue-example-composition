<template>
    <h3>Bar Chart</h3>
    <Bar id="chart1" :options="barOptions" :data="barData"></Bar>

    <h3>HorizontalBar Chart</h3>
    <Bar id="chart2" :options="horizontalOptions" :data="horizontalData"></Bar>

    <h3>Line Chart</h3>
    <Line id="chart3" :options="lineOptions" :data="lineData"></Line>

    <h3>Doughnut Chart</h3>
    <Doughnut id="chart4" :options="doughnutOptions" :data="doughnutData"></Doughnut>
</template>
    
<script setup>
    import ChartjsRegistry from '../../plugins/chartjs-registry.js'
    import { Bar, Line, Doughnut } from 'vue-chartjs'
    import {ref} from 'vue'

    const barOptions = ref({
        responsive: true,
    })
    const barData = ref({
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Orange', 'Purple'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: "#4BC0C0",
            borderColor: "#4BC0C0",
        }]
    })

    const horizontalOptions = ref({
        responsive: true,
        indexAxis: 'y',
    })
    const horizontalData = ref({
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Orange', 'Purple'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: "#4BC0C0",
            borderColor: "#4BC0C0",
            axis: 'y',
        }]
    })

    const lineOptions = ref({
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    })
    const lineData = ref({
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Orange', 'Purple'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            lineTension: 0,
            backgroundColor: "#4BC0C0",
            borderColor: "#4BC0C0",
        }]
    })

    const doughnutOptions = ref({
        responsive: true,
        maintainAspectRatio: true,
    })
    const doughnutData = ref({
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Orange', 'Purple'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['#ff3300', '#0066ff', '#ffff00', '#4BC0C0', '#ff6633', '#8000ff'],
            hoverOffset: 4,
        }]
    })

</script>

<style>
    
</style>