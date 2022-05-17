import React,{ useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'


interface CalorieCounterProps{
  userCal?:number | null;
}

const options2 : ApexOptions = {
  series: [70],
  chart: {
    type: 'radialBar'
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '80%'
      }
    }
  },
  labels: ['Cricket']
}


const CalorieCounter = ({ userCal }:CalorieCounterProps) => {

  return (

    <div>
      {userCal === null ?
        <div>
          <p>No Calorie Set</p>
          <p>Set Calories</p>
        </div>
        :


        <div id="chart">
          <ReactApexChart 
            options={options2} 
            series={options2.series} 
            type='radialBar' 
            height={200} />
        </div>
      }
      
        
    </div>

  )
}

export default CalorieCounter

