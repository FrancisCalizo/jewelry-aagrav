import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import faker from 'faker';
import styled from 'styled-components';
import { darken } from 'polished';
import { TagCloud } from 'react-tagcloud';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['October', 'Novemeber', 'Decemeber'];

const cloudData = [
  { value: '#jewelry', count: 10 },
  { value: '#fineart', count: 18 },
  { value: '#bespoke', count: 20 },
  { value: '#gold', count: 18 },
  { value: '#jewel', count: 28 },
  { value: '#custom', count: 25 },
  { value: '#silver', count: 33 },
  { value: '#pendant', count: 20 },
  { value: '#sapphire', count: 22 },
  { value: '#ruby', count: 7 },
  { value: '#diamond', count: 25 },
  { value: '#intricate', count: 15 },
  { value: '#vvs', count: 17 },
  { value: '#handmade', count: 30 },
  { value: '#metal', count: 11 },

  { value: '#jewelry', count: 10 },
  { value: '#fineart', count: 18 },
  { value: '#gold', count: 18 },
  { value: '#jewel', count: 28 },
  { value: '#custom', count: 25 },
  { value: '#silver', count: 33 },
  { value: '#pendant', count: 20 },
  { value: '#sapphire', count: 22 },
];

export default function Charts() {
  return (
    <MainContainer>
      <div>
        <h2 className="chart-title">Marketing Spend</h2>
        <Bar
          options={{
            responsive: true,
            plugins: { legend: { display: false }, title: { display: false } },
            scales: {
              y: {
                min: 400,
                max: 600,
              },
            },
          }}
          data={{
            labels,
            datasets: [
              {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: 400, max: 600 })),
                backgroundColor: 'rgba(104, 211, 144,0.5)',
              },
            ],
          }}
        />
      </div>

      <div>
        <h2 className="chart-title">Total Crawls</h2>
        <Line
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top' as const,
              },
              title: { display: false },
            },
          }}
          data={{
            labels: labels,
            datasets: [
              {
                label: 'Facebook',
                data: [100, 1000, 1300],
                borderColor: 'rgba(53, 162, 235, 0.5)',
                backgroundColor: 'rgba(53, 162, 235, 0.8)',
              },
              {
                label: 'Google',
                data: [200, 700, 1700],
                backgroundColor: 'rgba(255,62,48, 0.3)',
                borderColor: 'rgba(255,62,48, 0.7)',
              },
            ],
          }}
        />
      </div>
      <div>
        <h2 className="chart-title">Average Time on Funnel (in seconds)</h2>
        <Bar
          options={{
            responsive: true,
            plugins: { legend: { display: false }, title: { display: false } },
            scales: {
              y: {
                min: 0,
                max: 60,
              },
            },
          }}
          data={{
            labels,
            datasets: [
              {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: 5, max: 60 })),
                backgroundColor: 'rgb(255,114,33, .5)',
              },
            ],
          }}
        />
      </div>

      <div>
        <h2 className="chart-title">Hashtags</h2>
        <CloudContainer>
          <TagCloud tags={cloudData} minSize={1} maxSize={5} renderer={customRenderer} />
        </CloudContainer>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-gap: 2rem 1rem;
  grid-template-columns: repeat(2, 1fr);
  /* TODO: Having issue with making the charts responsive. 
  Look into both react-chartjs and chart.js github issues 
  to resolve. Resize works on width expansion, but not shrink */
  /* grid-auto-flow: column; */
  /* grid-auto-columns: 50%; */

  .chart-title {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

const CloudContainer = styled.div`
  border: 1px solid ${darken(0.2, 'gainsboro')};
  padding: 4rem 3rem;
  border-radius: 10px;
`;

const customRenderer = (tag: any, size: any, color: any) => (
  <span
    key={tag.value}
    style={{
      animation: 'blinker 3s linear infinite',
      animationDelay: `${Math.random() * 4}s`,
      fontSize: `${size / 2}em`,
      border: `2px solid ${color}`,
      margin: '3px',
      padding: '3px',
      display: 'inline-block',
      color: 'black',
    }}
  >
    {tag.value}
  </span>
);
