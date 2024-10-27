'use client'
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from 'chart.js';
import React from 'react'
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend)
function DoughNutChart({ accounts }: DoughnutChartProps) {
    const data = {
        datasets: [
            {
                label: "Banks",
                data: [1250, 4900, 3750],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
            }
        ],
        label: ['Bank 1', 'Bank 2', 'Bank 3']
    }
    return <Doughnut data={data}
        options={{
            cutout: "70%",
            plugins: {
                legend: {
                    display: false
                }
            }
        }}
    />
}

export default DoughNutChart