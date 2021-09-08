import React from 'react';
import BarChartIcon from '@material-ui/icons/BarChart';
import s from './BarChart.module.scss';




function BarChart() {
  return (

    <button className={s.barChart}>
      <BarChartIcon fontSize="medium" />
    </button>

  );
}

export default BarChart;


