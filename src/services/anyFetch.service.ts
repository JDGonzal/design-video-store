/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiAnswerInit, ApiAnswerableInterface } from "@/models";

export const anyFetch = async (apiUrl: string | URL, init?: RequestInit): Promise<ApiAnswerableInterface> => {
  let apiAnswer: ApiAnswerableInterface = ApiAnswerInit;
  let data: any = {};
  const abortController = new AbortController();
  try {
    const response = await fetch(apiUrl, ({...init, signal:abortController.signal}),);
    data = await response.json();
    const abort =()=> {
      abortController.abort();
    }
    apiAnswer = ({
      ...apiAnswer,
      data: data,
      abort:abort,
    });
  } catch (err) {
    apiAnswer = ({
      ...apiAnswer,
      error: err
    })
  } finally {
    apiAnswer = ({
      ...apiAnswer,
      loading: false,
    })
  }
  return apiAnswer;
}
