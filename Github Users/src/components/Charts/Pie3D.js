import React from 'react';
import FusionCharts from 'fusioncharts';
// import ReactDOM from 'react-dom';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);



const ChartComponent = ({data}) => {
  const chartConfigs = {
  type: 'pie3d',
  width: 400,
  height: 400,
  dataFormat: 'json',
  dataSource: {
       chart: {
        caption: "Languages",
        decimals:0,
        pieRadius:'45%',
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