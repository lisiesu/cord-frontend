import data from "./data.json";
import Bar from "./Bar";

function Chart() {
  const maxValue = Object.values(data).reduce(function (prev, key) {
    return prev + key;
  });

  const sorted = Object.entries(data).sort(([, a], [, b]) => b - a);

  return (
    <div className="outter">
      <div className="inner">
        <div className="box">
          {sorted.map(([key, value]) => (
            <Bar
              name={key}
              maxValue={maxValue}
              value={value}
              percentage={((100 * value) / maxValue).toFixed(1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chart;
