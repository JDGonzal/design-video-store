import { Navigate } from "react-router-dom";

const AuthWrapper=(props: {
  isAuthenticated:boolean;}
  ) => {
    console.log(props.isAuthenticated);
  return props.isAuthenticated ? (
    <Navigate to="/home" replace />
  ) : (
    <Navigate to="/login" replace />
  );
}

export default AuthWrapper;
