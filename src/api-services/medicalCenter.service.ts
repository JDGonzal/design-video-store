import { VITE_API_URL } from "@/utilities";
const site = 'medicalcenter';

export const getMedicalCenter = async (id: number) => {

  const apiUrl = await `${VITE_API_URL}${site}/medicalcentername/${id}`;
  if (await !isNaN(id)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let response: any = {};
    try {
      console.log('getMedicalCenter:', apiUrl);
      const result = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      response = await result.json();
    } catch (err) {
      console.log(err);
      return err;
    }
    return response;
  }
}
