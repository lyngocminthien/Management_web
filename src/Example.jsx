import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getData")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <div>
      <h1>Data List</h1>
      {data.map((item, index) => (
        <div key={index}>{/* Display your data here */}</div>
      ))}
    </div>
  );
}

export default App;
