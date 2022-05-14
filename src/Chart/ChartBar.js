import "./ChartBar.css";

const ChartBar = ({ key, value, label, maxValue }) => {
  let fillHeight = "0%";
  if (maxValue > 0) fillHeight = Math.round((value / maxValue) * 100) + "%";
  return (
    <div className="chart-bar">
      <div className="chart-bar-inner">
        <div className="chart-bar-fill" style={{ height: fillHeight }}></div>
      </div>
      <div className="chart-bar-label">{label}</div>
    </div>
  );
};

export default ChartBar;
