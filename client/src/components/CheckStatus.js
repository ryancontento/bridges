
import React from "react";

function CheckStatus (props) {
const [data, setData, data2, setData2] = React.useState(null);

  React.useEffect((props) => {
    fetch("http://localhost:4000/capefear",)
      .then((res) => res.json())
      .then((data) => setData(props.data.message));
  }, []);

  React.useEffect((props) => {
    fetch("http://localhost:4000/isabella",)
      .then((res) => res.json())
      .then((data2) => setData2(data2.message));
  }, []);

  return (
    <div>
      <h2>Cape Fear Memorial:</h2>
        <div>{props.data}</div>
      <h2>Isabel Holmes:</h2>
        <div>{!data2 ? "Loading Isabel Holmes..." : data2}</div>
    </div>
  );
}



export default CheckStatus;

