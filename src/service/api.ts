// import { request } from "./axios";

import { request } from "./request";

export async function searchSuggest(text: string) {
  return request<any>(`/api/suggestion/${text}`, {
    method: "GET",
  });
}
