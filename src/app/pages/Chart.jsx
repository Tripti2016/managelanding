import React from 'react'
import BarChartComponent from './BarChartComponent'
import PercentageChart from './Percent'
import DonutChartComponent from '../DonutChart'

export const Chart = () => {
  return (
    <div className='chart'>
        <BarChartComponent />
        <DonutChartComponent />
        <PercentageChart />
    </div>
  )
}
