import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { BannerAlert, Header } from "@/components";
import { Sidebar, Content } from ".";

const Home = () => {
  const tokenAccess = useSelector((state: AppStore) => state.tokenAccess);

  return tokenAccess.ok ? (
    <div className="min-h-screen">
      <Header />
      <BannerAlert/> 
      <div className="h-[90vh] flex p-8">
        <Sidebar />
        <Content />
      </div>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default Home;
