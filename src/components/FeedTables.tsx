/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppStore, createAlert, createCity, createEstado } from "@/redux";
import { getCities, getStates } from "@/api-services";
import { alertErrorUtility } from "@/utilities";
import { createCityAdapter, createEstadoAdapter } from "@/adapters";

const FeedTables = () => {

  const estadosList = useSelector((state: AppStore) => state.estadosList);

  const dispatch = useDispatch();

  useEffect(() => {
    getStates().then(async(estados: any) => {
      if (await !estados) {
        await dispatch(createAlert(alertErrorUtility));
      } else {
        console.log('estados:', estados);
        await estados.map(async(estado: any) => {
          await dispatch(createEstado(createEstadoAdapter(estado)));
          await getCities(estado.stateId).then(async(cities: any) => {
            if (await !cities) {
              await dispatch(createAlert(alertErrorUtility));
            } else {
              await cities.map(async(city: any) => {
                await dispatch(createCity(createCityAdapter(city)));
              })
            }
          });
        })
      }
    });
  }, [dispatch, estadosList]);

  return (
    <></>
  )
}

export default FeedTables;
