import React from "react";
import useNetworkStatus from "../hooks/useNetworkStatus";

const NetworkStatusBanner = () => {
  const { isOnline, connectionType } = useNetworkStatus();

  return (
    <div
      className={`text-sm text-white px-4 py-2 text-center ${
        isOnline ? "bg-green-600" : "bg-red-600"
      }`}
    >
      {isOnline
        ? `✅ Online — Connection: ${connectionType}`
        : "⚠️ You are offline. Changes will sync when back online."}
    </div>
  );
};

export default NetworkStatusBanner;
