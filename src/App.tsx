//https://medium.com/imaginelearning/building-a-react-application-ec8cbf6b8694

import React from "react";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App container mx-auto">
      <h1 className="text-5xl">Spider</h1>
      <div className="py-10">
        <Button onClick={() => alert("Hello world!")} text="OK" />
      </div>
    </div>
  );
}

export default App;
