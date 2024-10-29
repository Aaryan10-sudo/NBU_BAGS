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
        <div className="w-full gap-x-2 flex justify-center items-center animate-pulse">
          <div className="w-7 bg-[#d991c2] animate-bounce h-7 rounded-full flex justify-center text-white items-center font-bold delay-0">
            N
          </div>
          <div className="w-7 h-7 bg-[#9869b8] animate-bounce rounded-full flex justify-center text-white items-center font-bold delay-700">
            B
          </div>
          <div className="w-7 h-7 bg-[#6756cc] animate-bounce rounded-full flex justify-center text-white items-center font-bold delay-1000">
            U
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-300 max-w-[1280px] mx-auto">
      <MyRoutes />
    </div>
  );
}

export default App;
