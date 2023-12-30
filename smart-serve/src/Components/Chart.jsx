import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function VerticalBarChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    // Data for the chart
    const data = {
      labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
      datasets: [
        {
          label: 'Vertical Bar Chart',
          data: [30, 50, 20, 70, 45],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    // Configuration options for the chart
    const options = {
      scales: {
        x: {
          barPercentage: 0.4,
        },
        y: {
          beginAtZero: true,
        },
      },
    };

    // Create the vertical bar chart
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });
  }, []);

  return (
    <div>
      <h2>Vertical Bar Chart</h2>
      <div style={{ width: '80%', margin: '20px auto' }}>
        <canvas ref={chartRef} width="400" height="200"></canvas>
      </div>
    </div>
  );
}

export default VerticalBarChart;
