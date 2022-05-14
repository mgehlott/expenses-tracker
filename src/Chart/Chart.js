import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = ({ dataPoints }) => {
  const valueData = dataPoints.map((d) => d.value);
  const max = Math.max(...valueData);

  return (
    <div className="chart">
      {dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.id}
          value={datapoint.value}
          label={datapoint.label}
          maxValue={max}
        />
      ))}
    </div>
  );
};

export default Chart;
