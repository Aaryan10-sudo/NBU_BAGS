import { useState } from "react";
import "./App.css";
import MyRoutes from "./routes/MyRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-300">
      <MyRoutes />
    </div>
  );
}

export default App;
