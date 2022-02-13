import React from "react";
import CounterWithreducer from "./CounterWithReducer";

interface AppProps {
  message?: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  return (
    <div>
      <CounterWithreducer></CounterWithreducer>
    </div>
  );
};

App.defaultProps = {
  message: "default props",
};

export default App;
