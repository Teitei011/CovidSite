import getData from "./processData";
import ReactFusioncharts from "react-fusioncharts";
import Brasil from "./Brasil.json"

const plotGraph = () => {
let data = Brasil.casosNovos;




  const dataSource = {
    chart: {
      xaxisname: "Data",
      yaxisname: "Casos",
      theme: "candy"
    },
    data
  }

  return (
  <ReactFusioncharts
    type="column2d"
    width="100%"
    height="100%"
    dataFormat="JSON"
    dataSource={data}
  />);
}
export default plotGraph;