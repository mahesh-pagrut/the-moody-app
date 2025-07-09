import { useContext } from "react";
import { NetworkContext } from "../context/NetworkContext";

const useNetworkStatus = () => {
  const { isOnline, connectionType } = useContext(NetworkContext);
  return { isOnline, connectionType };
};

export default useNetworkStatus;
