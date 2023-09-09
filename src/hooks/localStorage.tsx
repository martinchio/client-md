import { useState, useEffect } from "react";
import InitialMd from "@/utils/InitialMd";

function useLocalStorage(): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
] {
  const [md, setMd] = useState<string>(() => {
    if (typeof window === "undefined") return InitialMd; // Use InitialMd instead of an empty string
    return localStorage.getItem("md-content") || InitialMd; // Fall back to InitialMd if not set
  });

  useEffect(() => {
    localStorage.setItem("md-content", md);
  }, [md]);

  return [md, setMd];
}

export default useLocalStorage;
