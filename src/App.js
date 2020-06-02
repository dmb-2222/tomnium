import React, { useState, useEffect } from "react";
import promise from "./promise";
import ListItem from "./components/ListItems";

const App = () => {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    promise.then(
      (result) => setRate(result),
      (error) => console.log(error)
    );
  }, []);

  const date = rate && new Date(rate.timestamp).toString();

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Курс валют</h1>
      {rate && (
        <>
          <div> Time: {date} </div>
          <div> Base: {rate.base} </div>
          <ListItem list={rate.rates} />
        </>
      )}
    </div>
  );
};

export default App;
