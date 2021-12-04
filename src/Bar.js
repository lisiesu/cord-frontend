function Bar(props) {
    
  const colors = ["#540D6E", " #EE4266", "#FFD23F", "#fca311", " #3BCEAC", " #0EAD69"];

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <p
          style={{
            fontFamily: "Calibri",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          {props.name}
        </p>
        <svg width="650" height="70">
          <g>
            <rect
              x="40"
              rx="10"
              ry="10"
              width={Math.round((props.value / 105) * 100) + "%"}
              height="60"
              class="box-shadow"
              style={{
                fill: colors[Math.floor(Math.random() * colors.length)],
              }}
            />
            <text
              x="60"
              y="35"
              font-family="Calibri"
              font-size="20"
              fill="white"
            >
              {props.value} votes{" "}
            </text>

            {props.percentage > 15 ? (
              <text
                x={Math.round((props.value / 120) * 100) + "%"}
                y="35"
                font-family="Calibri"
                font-size="20"
                fill="white"
              >
                {props.percentage}%
              </text>
            ) : (
              <text
                x={Math.round(props.value + 10) + "%"}
                y="35"
                font-family="Calibri"
                font-size="20"
                fill="black"
              >
                {props.percentage}%
              </text>
            )}
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Bar;
