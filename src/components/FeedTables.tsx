/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { createAlert, createCity, createEstado, resetTokenAccess } from "@/redux";
import { anyFetch } from "@/services";
import { VITE_API_URL, alertMessageUtility, anyFetchUtility, methodType } from "@/utilities";
import { createCityAdapter, createEstadoAdapter } from "@/adapters";

const FeedTables = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetTokenAccess);
    const apiState = `${VITE_API_URL}state`;
    anyFetch(apiState, anyFetchUtility(methodType.Get)).then(
      ({ data: estados, error, /* loading, abort */ }) => {
        if (!estados || error) {
          dispatch(createAlert(alertMessageUtility({})));
        } else {
          estados.map(async (estado: any) => {
            dispatch(createEstado(createEstadoAdapter(estado)));
            const apiState = `${VITE_API_URL}city/${estado.stateId}`
            anyFetch(apiState, anyFetchUtility(methodType.Get)).then(
              ({ data: cities, error, /* loading, abort */ }) => {
                if (!cities || error) {
                  dispatch(createAlert(alertMessageUtility({})));
                } else {
                  cities.map(async (city: any) => {
                    await dispatch(createCity(createCityAdapter(city)));
                  });
                }
              }
            );
          });
        }
        console.log('FeedTables.Estados:', estados);
      }
    );
    return()=>{
      console.log('FeedTables.End');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <></>
  )
}

export default FeedTables;
