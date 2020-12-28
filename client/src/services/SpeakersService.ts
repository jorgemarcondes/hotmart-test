import { Speaker } from "@/models/Speaker";

export function fetchSpeakers(): Promise<ReadonlyArray<Speaker>> {
  const urlParams = new URLSearchParams({ highlighted: "true" });
  const url = new URL(`http://${process.env.VUE_APP_BACKEND_HOST}/speakers`);
  url.search = urlParams.toString();

  return fetch(url.toString())
    .then(handleResponseErrors)
    .then(data => {
      return data.json();
    })
    .catch(error => {
      console.error(error);
    });
}

function handleResponseErrors(response: Response) {
  if (!response.ok) throw Error(response.statusText);

  return response;
}
