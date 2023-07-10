import { VITE_API_URL } from "@/utilities";
const site = 'city';

export const getCities = async (estadoId:number) => {

  const apiUrl = await `${VITE_API_URL}${site}/${estadoId}`;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let response: any = {};
    try {
      // console.log('getCities:', apiUrl);
      const result = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      response = await result.json();
      return response;
    } catch (err) {
      console.log('getCities:',err);
    }
}
