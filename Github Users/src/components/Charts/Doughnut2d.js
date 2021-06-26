import React from 'react';
import FusionCharts from 'fusioncharts';
// import ReactDOM from 'react-dom';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);



const ChartComponent = ({data}) => {
  const chartConfigs = {
  type: 'doughnut2d',
  width: 400,
  height: 400,
  dataFormat: 'json',
  dataSource: {
       chart: {
        caption: "Stars per Languages",
        decimals:0,
        doughnutRadius:'45%',
        showPercentValues:0,
        theme:'candy',
        },
      data,
   },
};
    return <ReactFC {...chartConfigs} />;
}

// ReactDOM.render(
//   <Chart />,
//   document.getElementById('root'),
// );

export default ChartComponent;