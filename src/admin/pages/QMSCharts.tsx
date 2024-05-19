import React, { FC, useEffect, useRef } from "react";
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels'; // Import the datalabels plugin

const QMSCharts: FC = () => {
  const qmschart1 = useRef<HTMLCanvasElement>(null);
  const qmschart2 = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (qmschart1.current) {
      const qmsbar1 = qmschart1.current.getContext('2d');

      if (qmsbar1) {
        const myChart3 = new Chart(qmsbar1, {
          type: 'bar',
          data: {
            labels: ['PLAN', 'DO', 'CHECK', 'ACT'],
            datasets: [
              {
                label: 'AY 2019-2020',
                data: [4.67, 4.57, 4.54, 4.68],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
              },
              {
                label: 'AY 2020-2021',
                data: [4.57, 4.42, 4.42, 4.60],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
              },
              {
                label: 'AY 2021-2022',
                data: [4.57, 4.37, 4.31, 4.68],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
              },
              {
                label: 'AY 2022-2023',
                data: [4.60, 4.35, 4.39, 4.56],
                backgroundColor: 'rgba(255, 205, 86, 0.6)',
                borderColor: 'rgba(255, 205, 86, 1)',
                borderWidth: 1
              }
            ]
          },
          options: {
            indexAxis: 'y',
            elements: {
              bar: {
                borderWidth: 2
              }
            },
            scales: {
              x: {
                beginAtZero: true
              }
            },
            plugins: {
              datalabels: {
                anchor: 'end',
                align: 'end',
                formatter: (value: any) => value.toFixed(2), // Format the value to display two decimal places
                color: 'black',
                font: {
                  weight: 'bold'
                }
              }
            }
          }
        });

        return () => {
          myChart3.destroy();
        };
      }
    }
  }, []);

  useEffect(() => {
    if (qmschart2.current) {
      const qmsbar2 = qmschart2.current.getContext('2d');

      if (qmsbar2) {
        const myChart3 = new Chart(qmsbar2, {
          type: 'bar',
          data: {
            labels: ['PLAN', 'DO', 'CHECK', 'ACT'],
            datasets: [
              {
                label: 'Administrative Units',
                data: [4.67, 4.57, 4.54, 4.68],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
              },
              {
                label: 'Academic Units',
                data: [4.57, 4.42, 4.42, 4.60],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
              },
              {
                label: 'Internal Quality Auditors',
                data: [4.57, 4.37, 4.31, 4.68],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
              },
            ]
          },
          options: {
            indexAxis: 'y',
            elements: {
              bar: {
                borderWidth: 2
              }
            },
            scales: {
              x: {
                beginAtZero: true
              }
            },
            plugins: {
              datalabels: {
                anchor: 'end',
                align: 'end',
                formatter: (value: any) => value.toFixed(2), // Format the value to display two decimal places
                color: 'black',
                font: {
                  weight: 'bold'
                }
              }
            }
          }
        });

        return () => {
          myChart3.destroy();
        };
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-3xl font-bold mb-4">Quality Management System Evaluation Analytics</h1>
      <div className="table-container mt-2">
        <table className="table-auto border border-collapse border-black-500">
          <thead>
            <tr className="bg-yellow-500">
              <th className="px-4 py-2">Rating Range</th>
              <th className="px-4 py-2">Verbal Interpretation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2  bg-gray-50">5.00 – 4.20</td>
              <td className="border px-4 py-2">Very adequate</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 bg-gray-50">4.199 – 3.40</td>
              <td className="border px-4 py-2 bg-gray-50">Better than adequate</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 bg-gray-50">3.399 – 2.60</td>
              <td className="border px-4 py-2 bg-gray-50">Adequate</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 bg-gray-50">2.599 – 1.80</td>
              <td className="border px-4 py-2">Inadequate but can be adequate with minor improvement</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 bg-gray-50">1.799 – 1.00</td>
              <td className="border px-4 py-2 bg-gray-50">Very inadequate</td>
            </tr>
          </tbody>
        </table>
      </div><br></br>

      <div className="bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6" style={{ width: '800px', height: '400px' }}>
        <canvas ref={qmschart1}></canvas>
      </div>

      <div className="flex flex-col items-center mt-8">
      {/* <h1 className="text-3xl font-bold mb-4">Quality Management System Evaluation Analytics</h1> */}
      <div className="bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6" style={{ width: '800px', height: '400px' }}>
        <canvas ref={qmschart2}></canvas>
      </div>
      </div>
    </div>
  );
};

export default QMSCharts;
