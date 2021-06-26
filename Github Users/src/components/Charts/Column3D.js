import React from 'react';
import FusionCharts from 'fusioncharts';
// import ReactDOM from 'react-dom';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);



const ChartComponent = ({data}) => {
  const chartConfigs = {
  type: 'column3d',
  width: 400,
  height: 400,
  dataFormat: 'json',
  dataSource: {
       chart: {
        caption: "Most Popular",
        yAxis: "Stars",
        xAxis: "Repos",
        xAxisNameFontSize:"16px",
        yAxisNameFontSize:"16px",
        theme: "fusion"
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