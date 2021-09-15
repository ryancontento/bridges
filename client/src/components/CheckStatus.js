
import React from "react";

function CheckStatus (props) {
const [capeFearData, setCapeFearData] = React.useState(null);
const [isabelData, setIsabelData] = React.useState(null);

React.useEffect(() => {
  const fetchCapeFearData = async () => {   
    const res = await fetch("http://localhost:4000/capefear")
    setCapeFearData(res.json()) 

  fetchCapeFearData()
  }, []);

React.useEffect(() => {
  const fetchIsabelData = async () => {   
    const res = await fetch("http://localhost:4000/isabella")
    setIsabelData(res.json()) 

  fetchIsabelData()
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

