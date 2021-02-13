import react from 'react'
import style from './chart.module.css'
import {Bar} from 'react-chartjs-2';
const card = (props) => {
    return (
        <div className={style.chart}>
        <Bar
  data={{
    labels: ['Infected', 'Recovered', 'Deaths'],
    datasets: [
      {
        label: 'total number of people',
        data: [props.infectedCount,props.recoveredCount, props.deathCount],
        backgroundColor: [
          'aqua',
          'green',
          'red',
        ],
        borderColor: [
          'aqua',
          'green',
          'red',
        ],
        borderWidth: 1,
      },
    ],
  }}
  height={400}
  width={600}
  options={{
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    legend: {
      labels: {
        fontSize: 10,
      },
    },
  }}
/>
</div>
    )
}

export default card;