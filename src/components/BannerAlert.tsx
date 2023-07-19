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
    <div className="relative">
      <div
        className={`${
          bannerAlert.back
        } bordermedicalCenter.data-t border-b 
      border-blue-500 ${bannerAlert.color} px-4 py-3 absolute 
      ${bannerAlert.isVisible ? " left-0 inset-x-0 top-0 h-16" : "-left-full"}`}
        role="alert"
      >
        <div className="justify-between flex">
          <p className="font-bold text-lg md:text-2xl">{bannerAlert.title}</p>
          <button onClick={() => dispatch(resetAlert())}>X</button>
        </div>
        <p className="text-sm md:text-base">{bannerAlert.message}</p>
      </div>
    </div>
  );
}

export default BannerAlert;
