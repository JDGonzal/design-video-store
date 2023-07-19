import { AppStore } from "@/redux";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthWrapper = () => {
  const isFirstTime = useRef(true);
  const tokenAccess = useSelector((state: AppStore) => state.tokenAccess);
  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
    }
    return () => {
      console.log("AuthWrapper.End");
    };
  }, []);

  if (isFirstTime.current) {
    console.log('Token.ok:',tokenAccess.ok);
    return tokenAccess.ok ? (
      <Navigate to="/home" replace />
    ) : (
      <Navigate to="/login" replace />
    );
  }
};

export default AuthWrapper;
