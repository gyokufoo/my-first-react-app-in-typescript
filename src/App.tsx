import React from "react";
import Counter from "./Counter";

interface AppProps {
  message?: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  return (
    <div>
      <Counter></Counter>
    </div>
  );
};

App.defaultProps = {
  message: "default props",
};

export default App;
