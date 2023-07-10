import { VITE_API_URL } from "@/utilities";
const site = 'state';

export const getStates = async () => {

  const apiUrl = await `${VITE_API_URL}${site}`;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let response: any = {};
    try {
      // console.log('getStates:', apiUrl);
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
      console.log('getStates:',err);
    }
}
