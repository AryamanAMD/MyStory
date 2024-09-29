// ./hooks/useAutoCloseOnTabSwitch.ts
import { useEffect } from "react";

const useAutoCloseOnTabSwitch = () => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        window.close();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
};

export default useAutoCloseOnTabSwitch;
