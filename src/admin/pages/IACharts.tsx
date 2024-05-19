import React, { FC, useEffect, useRef } from "react";
import Chart from 'chart.js/auto';

const IACharts: FC = () => {
  const iaChart1 = useRef<HTMLCanvasElement>(null); // Reference to the third chart canvas
  const iaChart2 = useRef<HTMLCanvasElement>(null); // Reference to the third chart canvas
  const iaChart3 = useRef<HTMLCanvasElement>(null); // Reference to the third chart canvas
  const iaChart4 = useRef<HTMLCanvasElement>(null); // Reference to the third chart canvas
  const iaChart5 = useRef<HTMLCanvasElement>(null); // Reference to the third chart canvas

  useEffect(() => {
    if (iaChart1.current) {
      const iab1 = iaChart1.current.getContext('2d');

      if (iab1) {
        const iaBarChart1 = new Chart(iab1, {
          type: 'bar',
          data: {
            labels: ['2018-2019', '2019-2020', '2020-2021', '2021-2022', '2022-2023', '2023-2024' ],
            datasets: [{
              label: '1st Internal Audit Cycle',
              data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 50)), // Generate random data for 24 records
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });

        // Clean up function to destroy chart on component unmount
        return () => {
          iaBarChart1.destroy();
        };
      }
    }
  }, []); // Run effect only once on component mount

  useEffect(() => {
    if (iaChart2.current) {
      const iab2 = iaChart2.current.getContext('2d');

      if (iab2) {
        const iaBarChart2 = new Chart(iab2, {
            type: 'bar',
            data: {
              labels: ['2018-2019', '2019-2020', '2020-2021', '2021-2022', '2022-2023', '2023-2024' ],
              datasets: [{
                label: '2nd Internal Audit Cycle',
                data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 50)), // Generate random data for 24 records
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });

        // Clean up function to destroy chart on component unmount
        return () => {
          iaBarChart2.destroy();
        };
      }
    }
  }, []); // Run effect only once on component mount

  useEffect(() => {
    if (iaChart3.current) {
      const iab3 = iaChart3.current.getContext('2d');

      if (iab3) {
        const iaBarChart3 = new Chart(iab3, {
            type: 'bar',
            data: {
              labels: ['2018-2019', '2019-2020', '2020-2021', '2021-2022', '2022-2023', '2023-2024' ],
              datasets: [{
                label: '3rd Internal Audit Cycle',
                data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 50)), // Generate random data for 24 records
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });

        // Clean up function to destroy chart on component unmount
        return () => {
          iaBarChart3.destroy();
        };
      }
    }
  }, []); // Run effect only once on component mount

  useEffect(() => {
    if (iaChart4.current) {
      const iab4 = iaChart4.current.getContext('2d');

      if (iab4) {
        const iaBarChart4 = new Chart(iab4, {
            type: 'bar',
            data: {
              labels: ['2018-2019', '2019-2020', '2020-2021', '2021-2022', '2022-2023', '2023-2024' ],
              datasets: [{
                label: '4th Internal Audit Cycle',
                data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 50)), // Generate random data for 24 records
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });

        // Clean up function to destroy chart on component unmount
        return () => {
          iaBarChart4.destroy();
        };
      }
    }
  }, []); // Run effect only once on component mount

  useEffect(() => {
    if (iaChart5.current) {
      const iab5 = iaChart5.current.getContext('2d');
  
      if (iab5) {
        const iaLineChart5 = new Chart(iab5, {
          type: 'line',
          data: {
            labels: ['1st Internal Audit Cycle', '2nd Internal Audit Cycle', '3rd Internal Audit Cycle', '4th Internal Audit Cycle', 'Verification'],
            datasets: [{
              label: '2018-2019',
              data: [3.85, 3.90, 3.70, 3.50, 4],
              borderColor: 'magenta',
              tension: 0.1,
              fill: false
            }, {
              label: '2019-2020',
              data: [4, 3.77, 3.85, 3.94, 4],
              borderColor: 'orange',
              tension: 0.1,
              fill: false
            }, {
              label: '2020-2021',
              data: [3.65, 3.96, 3.73, 3.60, 3.80],
              borderColor: 'blue',
              tension: 0.1,
              fill: false
            }, {
              label: '2022-2023',
              data: [3.75, 3.68, 3.90, 3.52, 3.64],
              borderColor: 'pink',
              tension: 0.1,
              fill: false
            }, {
              label: '2023-2024',
              data: [3.30, 3.65, 3.91, 4, 4],
              borderColor: 'yellow',
              tension: 0.1,
              fill: false
            }]
          },
          options: {
            plugins: {
              legend: {
                display: true,
                position: 'bottom',
                labels: {
                  boxWidth: 20,
                  usePointStyle: true
                }
              }
            }
          }
        });
  
        // Clean up function to destroy chart on component unmount
        return () => {
          iaLineChart5.destroy();
        };
      }
    }
  }, []); // Run effect only once on component mount
  

  return (
    <div className="flex flex-col items-center mt-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-4">Internal Auditor's Evaluation Analytics</h1>

      {/* Charts Container */}
      <div className="flex flex-wrap justify-center gap-4">

        {/* First Chart (Bar Chart) */}
        <div className="bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6" style={{ width: '700px', height: '400px' }}>
          <canvas ref={iaChart1}></canvas>
        </div>
        {/* Second Chart (Bar Chart) */}
        <div className="bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6" style={{ width: '700px', height: '400px' }}>
          <canvas ref={iaChart2}></canvas>
        </div>
        {/* Third Chart (Bar Chart) */}
        <div className="bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6" style={{ width: '700px', height: '400px' }}>
          <canvas ref={iaChart3}></canvas>
        </div>
        {/* Fourth Chart (Bar Chart) */}
        <div className="bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6" style={{ width: '700px', height: '400px' }}>
          <canvas ref={iaChart4}></canvas>
        </div>
        <div className="bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6" style={{ width: '750px', height: '400px' }}>
          <canvas ref={iaChart5}></canvas>
        </div>
      </div>
    </div>
  );
};

export default IACharts;
