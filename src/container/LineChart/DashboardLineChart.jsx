import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Avgust', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: '«Властелин колец» — Джон Р. Р. Толкин',
                data: [655, 246, 419, 348, 783, 654, 172, 623, 228, 743, 636, 596],
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            },
            {
                label: '«Гордость и предубеждение» — Джейн Остин',
                data: [396, 137, 266, 162, 433, 294, 550, 728, 686, 768, 228,765],
                fill: false,
                backgroundColor: 'rgb(102, 0, 51)',
                borderColor: 'rgba(102, 0, 51, 0.2)',
            },
            {
                label: '«Тёмные начала» — Филип Пулман',
                data: [443, 611, 318, 619, 638, 508, 598, 445, 206, 421, 406, 698],
                fill: false,
                backgroundColor: 'rgb(102, 102, 255)',
                borderColor: 'rgba(102, 102, 255, 0.2)',
            },
            {
                label: '«Автостопом по галактике» — Дуглас Адамс',
                data: [118, 178, 302, 595, 540, 639, 636, 194, 719, 568, 260, 116],
                fill: false,
                backgroundColor: 'rgb(255, 0, 127)',
                borderColor: 'rgba(2555, 0, 127, 0.2)',
            },
            {
                label: '«Тёмные начала» — Филип Пулман',
                data: [310, 311, 733, 356, 106, 336, 667, 202, 755, 603, 475, 100],
                fill: false,
                backgroundColor: 'rgb(0, 255, 128)',
                borderColor: 'rgba(0, 255, 128, 0.2)',
            },
            {
                label: '«Автостопом по галактике» — Дуглас Адамс',
                data: [156, 686, 799, 567,398, 181, 373, 504, 240, 454, 507, 236],
                fill: false,
                backgroundColor: 'rgb(255, 102, 102)',
                borderColor: 'rgba(255, 102, 102, 0.2)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Количество',
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default LineChart;
