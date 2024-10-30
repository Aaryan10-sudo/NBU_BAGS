import React, { useEffect, useState } from "react";
import "./App.css";
import MyRoutes from "./routes/MyRoutes";

function App() {
  const [loading, setLoading] = useState(true);
  const [serverReady, setServerReady] = useState(false);
  const serverUrl = "https://nbu-bags.onrender.com/product/readall";

  useEffect(() => {
    const checkServer = async () => {
      try {
        const response = await fetch(serverUrl);
        if (response.ok) {
          setServerReady(true);
          setLoading(false);
        } else {
          setTimeout(checkServer, 3000);
        }
      } catch {
        setTimeout(checkServer, 3000);
      }
    };

    checkServer();
  }, [serverUrl]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-300">
        <div class="loader"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-300">
      <MyRoutes />
    </div>
  );
}

export default App;
