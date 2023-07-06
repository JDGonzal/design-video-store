import { AppStore, resetAlert } from "@/redux";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function BannerAlert() {
  const bannerAlert = useSelector((state: AppStore) => state.bannerAlert);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(resetAlert());
    }, bannerAlert.timeout);
    return () => clearTimeout(timer);
  }, [bannerAlert, dispatch]);

  return (
    <div
      className={`${
        bannerAlert.background} bordermedicalCenter.data-t border-b 
        border-blue-500 ${bannerAlert.textColor} px-4 py-3 fixed 
        ${bannerAlert.isVisible ? "left-0" : "-left-full"}`} role="alert"
    >
      <div className="justify-between flex">
        <p className="font-bold">{bannerAlert.title}</p>
        <button onClick={() => dispatch(resetAlert())}>X</button>
      </div>
      <p className="text-sm">{bannerAlert.message}</p>
    </div>
  );
}

export default BannerAlert;
