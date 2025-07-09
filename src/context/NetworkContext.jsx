import React, { createContext, useEffect, useState } from "react";

export const NetworkContext = createContext();

const NetworkProvider = ({ children }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [connectionType, setConnectionType] = useState("unknown");

  useEffect(() => {
    const updateNetworkInfo = () => {
      setIsOnline(navigator.onLine);

      const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (conn) {
        setConnectionType(conn.effectiveType || "unknown");
      }
    };

    window.addEventListener("online", updateNetworkInfo);
    window.addEventListener("offline", updateNetworkInfo);

    if (navigator.connection) {
      navigator.connection.addEventListener("change", updateNetworkInfo);
    }

    updateNetworkInfo(); // run once at mount

    return () => {
      window.removeEventListener("online", updateNetworkInfo);
      window.removeEventListener("offline", updateNetworkInfo);
      if (navigator.connection) {
        navigator.connection.removeEventListener("change", updateNetworkInfo);
      }
    };
  }, []);

  return (
    <NetworkContext.Provider value={{ isOnline, connectionType }}>
      {children}
    </NetworkContext.Provider>
  );
};

export default NetworkProvider;
