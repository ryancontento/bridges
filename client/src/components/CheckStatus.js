
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
  },[]);


return (
  <div>
    <h2>Cape Fear Memorial:</h2>
      <div>{capeFearData}</div>
    <h2>Isabel Holmes:</h2>
      <div>{!isabelData? "Loading Isabel Holmes..." : isabelData}</div>
  </div>
  );
}



export default CheckStatus;

