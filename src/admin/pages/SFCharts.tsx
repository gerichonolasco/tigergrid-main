import React, { FC, useEffect, useRef } from "react";
import Chart from 'chart.js/auto';

const SFCharts: FC = () => {
  const chartRef1 = useRef<HTMLCanvasElement>(null); 
  const chartRef2 = useRef<HTMLCanvasElement>(null); 
  const chartRef3 = useRef<HTMLCanvasElement>(null); 
  const chartRef4 = useRef<HTMLCanvasElement>(null); 
  const chartRef5 = useRef<HTMLCanvasElement>(null); 
  const chartRef6 = useRef<HTMLCanvasElement>(null); 
  const chartRef7 = useRef<HTMLCanvasElement>(null); 

  useEffect(() => {
    if (chartRef1.current) {
      const ctx1 = chartRef1.current.getContext('2d');

      if (ctx1) {
        const myChart1 = new Chart(ctx1, {
          type: 'line',
          data: {
            labels: ['Mar 2023', 'Apr 2023', 'May 2023', 'June 2023', 'July 2023', 'Aug 2023', 'Sep 2023', 'Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024'],
            datasets: [{
              label: 'No. of Responses per Month (Academic Unit)',
              data: [0, 15, 29, 9, 16, 2, 34, 1, 20, 16, 9, 7],
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
          }
        });

        // Clean up function to destroy chart on component unmount
        return () => {
          myChart1.destroy();
        };
      }
    }
  }, []); // Run effect only once on component mount

  useEffect(() => {
    if (chartRef2.current) {
      const ctx2 = chartRef2.current.getContext('2d');

      if (ctx2) {
        const myChart2 = new Chart(ctx2, {
          type: 'line',
          data: {
            labels: ['Mar 2023', 'Apr 2023', 'May 2023', 'June 2023', 'July 2023', 'Aug 2023', 'Sep 2023', 'Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024'],
            datasets: [{
              label: 'No. of Responses per Month (Admin Unit)',
              data: [7, 10, 25, 8, 20, 5, 30, 3, 15, 12, 6, 4],
              borderColor: 'rgb(255, 99, 132)',
              tension: 0.1
            }]
          }
        });

        // Clean up function to destroy chart on component unmount
        return () => {
          myChart2.destroy();
        };
      }
    }
  }, []); // Run effect only once on component mount

  useEffect(() => {
    if (chartRef3.current) {
      const ctx3 = chartRef3.current.getContext('2d');

      if (ctx3) {
        const myChart3 = new Chart(ctx3, {
          type: 'bar',
          data: {
            labels: ['Nursing', 'Engineering', 'Fine Arts and Design', 'CTHM', 'Pharmacy', 'Graduate School', 'Science', 'SHS', 'Commerce and Business', 'JHS', 'Medicine and Surgery', 'Arts and Letters', 'Accountancy', 'Education', 'CICS', 'Architecture', 'IR', 'Music', 'Education High School', 'Rehabilitation Sciences', 'IPEA', 'Civil Law', 'Graduate School of Law', 'Ecclesiastical'],
            datasets: [{
              label: 'No. of Responses: Academic Units',
              data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 50)), // Generate random data for 24 records
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }]
          },
          options: {
            indexAxis: 'y',
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });

        // Clean up function to destroy chart on component unmount
        return () => {
          myChart3.destroy();
        };
      }
    }
  }, []); // Run effect only once on component mount

  useEffect(() => {
    if (chartRef4.current) {
      const ctx4 = chartRef4.current.getContext('2d');

      if (ctx4) {
        const myChart4 = new Chart(ctx4, {
          type: 'bar',
          data: {
            labels: ['OSG', 'Student Affairs', 'Registrar', 'Community Development', 'EDTech', 'Admissions', 'OVRRI', 'OVRAA', 'Property Custodian', 'CCC', 'CITED', 'OPQM', 'Library', 'FMO', 'OVRF', 'RCSSED', 'Safety and Security', 'HRD', 'Campus Ministry', 'STEPS', 'LESO', 'GRANTS', 'OFED', 'Creative Writing', 'Alumni', 'OIRP', 'Vice Rector', 'Language Center', 'RCNAS', 'RCCAH', 'CTRSE', 'CCCPED', 'CCPET', 'QS/The Ranking', 'Purchasing', 'Publishing', 'Public Affairs', 'Museum', 'Internal Audit', 'OICT', 'Health Service', 'DMST', 'Communications', 'Archives', 'APQAO', 'OVRAA', 'Rector'],
            datasets: [{
              label: 'No. of Responses: Admin Units',
              data: Array.from({ length: 46 }, () => Math.floor(Math.random() * 50)),
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }]
          },
          options: {
            indexAxis: 'y',
            scales: {
              y: {
                beginAtZero: true,
                suggestedMin: 40, 
                suggestedMax: 100 
              }
            }
          }
        });

        // Clean up function to destroy chart on component unmount
        return () => {
          myChart4.destroy();
        };
      }
    }
  }, []); // Run effect only once on component mount

  useEffect(() => {
    if (chartRef5.current) {
      const ctx5 = chartRef5.current.getContext('2d');

      if (ctx5) {
        const myChart5 = new Chart(ctx5, {
          type: 'bar',
          data: {
            labels: ['OSG', 'Student Affairs', 'Registrar', 'Community Development', 'EDTech', 'Admissions', 'OVRRI', 'OVRAA', 'Property Custodian', 'CCC', 'CITED', 'OPQM', 'Library', 'FMO', 'OVRF', 'RCSSED', 'Safety and Security', 'HRD', 'Campus Ministry', 'STEPS', 'LESO', 'GRANTS', 'OFED', 'Creative Writing', 'Alumni', 'OIRP', 'Vice Rector', 'Language Center', 'RCNAS', 'RCCAH', 'CTRSE', 'CCCPED', 'CCPET', 'QS/The Ranking', 'Purchasing', 'Publishing', 'Public Affairs', 'Museum', 'Internal Audit', 'OICT', 'Health Service', 'DMST', 'Communications', 'Archives', 'APQAO', 'OVRAA', 'Rector'],
            datasets: [{
              label: 'Satisfaction Rating: Admin Units',
              data: [4, 4, 4, 3.82, 3.81, 3.61, 3.80, 3.90, 4, 3.85, 3.69, 3.81,3.82, 3.81, 3.61, 3.80, 3.90, 4, 3.85, 3.69, 3.81,3.82, 3.81, 3.61, 3.80, 3.90, 4, 3.85, 3.69, 3.81,3.82, 3.81, 3.61, 3.80, 3.90, 4, 3.85, 3.69, 3.81
                ,3.82, 3.81, 3.61, 3.80, 3.90, 4, 3.85, 3.69, 3.81
              ], // Generate random data for 24 records
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }]
          },
          options: {
            indexAxis: 'y',
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });

        // Clean up function to destroy chart on component unmount
        return () => {
          myChart5.destroy();
        };
      }
    }
  }, []); // Run effect only once on component mount

  useEffect(() => {
    if (chartRef6.current) {
      const ctx6 = chartRef6.current.getContext('2d');

      if (ctx6) {
        const myChart6 = new Chart(ctx6, {
          type: 'bar',
          data: {
            labels: ['Person(s) who attended to the concern was corteous', 'Over-all experience was helpful', 'Person(s) who attended to the concern was competent', 'The service received was excellent', 'Over-all experience was pleasant', 'Information obtained was complete', 'Information obtained was clear',
              'The time it took to complete the transaction was reasonable', 'The time it took to complete the transaction was quick'
            ],
            datasets: [{
              label: 'Satisfaction Rating per Indicator',
              data: [3.82, 3.81, 3.61, 3.80, 3.90, 4, 3.85, 3.69, 3.81],
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }]
          },
          options: {
            indexAxis: 'y',
            scales: {
              y: {
                beginAtZero: true,
                suggestedMin: 40, 
                suggestedMax: 100 
              }
            }
          }
        });

        // Clean up function to destroy chart on component unmount
        return () => {
          myChart6.destroy();
        };
      }
    }
  }, []); // Run effect only once on component mount

  useEffect(() => {
    if (chartRef7.current) {
      const ctx7 = chartRef7.current.getContext('2d');

      if (ctx7) {
        const myChart7 = new Chart(ctx7, {
          type: 'bar',
          data: {
            labels: ['Nursing', 'Engineering', 'Fine Arts and Design', 'CTHM', 'Pharmacy', 'Graduate School', 'Science', 'SHS', 'Commerce and Business', 'JHS', 'Medicine and Surgery', 'Arts and Letters', 'Accountancy', 'Education', 'CICS', 'Architecture', 'IR', 'Music', 'Education High School', 'Rehabilitation Sciences', 'IPEA', 'Civil Law', 'Graduate School of Law', 'Ecclesiastical'],
            datasets: [{
              label: 'Satisfaction Rating: Academic Units',
              data: [3.82, 3.81, 3.61, 3.80, 3.90, 4, 3.85, 3.69, 3.81,3.82, 3.81, 3.61, 3.80, 3.90, 4, 3.85, 3.69, 3.81,3.82, 3.81, 3.61, 3.80, 3.90, 4, 3.85, 3.69, 3.81
                ,3.82, 3.81, 3.61, 3.80, 3.90, 4, 3.85, 3.69, 3.81
              ], // Generate random data for 24 records
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }]
          },
          options: {
            indexAxis: 'y',
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });

        // Clean up function to destroy chart on component unmount
        return () => {
          myChart7.destroy();
        };
      }
    }
  }, []); // Run effect only once on component mount

  return (
    
    <div className="flex flex-col items-center mt-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-4">Stakeholder's Feedback Analytics</h1>
      <div>
      {/* Charts Container */}
      <div className="flex flex-wrap justify-center gap-4">
        {/* First Chart */}
        <div className="bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6" style={{ width: '400px', height: '250px' }}>
          <canvas ref={chartRef1}></canvas>
        </div>

        {/* Second Chart */}
        <div className="bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6" style={{ width: '400px', height: '250px' }}>
          <canvas ref={chartRef2}></canvas>
        </div>

        {/* Third Chart (Bar Chart) */}
        <div className="bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6" style={{ width: '800px', height: '400px' }}>
          <canvas ref={chartRef3}></canvas>
        </div>
        {/* Fourth Chart (Bar Chart) */}
        <div className="bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6" style={{ width: '800px', height: '400px' }}>
          <canvas ref={chartRef4}></canvas>
        </div>
        </div>
        <div className="flex flex-col items-center mt-2">
        <div className="table-container mt-6">
        <table className="table-auto border border-collapse border-black-500">
          <thead>
            <tr className="bg-yellow-500">
              <th className="px-4 py-2">Rating Range</th>
              <th className="px-4 py-2">Verbal Interpretation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2  bg-gray-50">4.00 – 3.50</td>
              <td className="border px-4 py-2 bg-yellow-200">Very Satisfied</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 bg-gray-50">3.499 – 2.50</td>
              <td className="border px-4 py-2 bg-blue-200">Satisfied</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 bg-gray-50">2.499 – 1.50</td>
              <td className="border px-4 py-2 bg-gray-200">Unsatisfied</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 bg-gray-50">1.499 – 1.00</td>
              <td className="border px-4 py-2 bg-red-400">Very Unsatisfied</td>
            </tr>
          </tbody>
        </table>
        </div>
        <div className="bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 mt-6" style={{ width: '800px', height: '400px' }}>
          <canvas ref={chartRef7}></canvas>
        </div>
            <div className="bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 mt-6" style={{ width: '800px', height: '400px' }}>
          <canvas ref={chartRef5}></canvas>
        </div>
        <div className="bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 mt-4" style={{ width: '800px', height: '400px' }}>
          <canvas ref={chartRef6}></canvas>
        </div>
        </div>
        
      </div><br></br>
      </div>
  );
};

export default SFCharts;
