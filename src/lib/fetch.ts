// @ts-nocheck
import useSWR from "swr";
import { CMS_ACCESS_TOKEN, CMS_ENDPOINT, CMS_REF } from "@/config";

/* TODO:
 * There is an error when defining type of useSWR which needs Fetcher<T> type.
 * Importing Fetcher<T> type is not possible from the library hence becoming
 * a blocker for development. Further fixes needed.
 */

export const swr = (
  query,
  initialData,
  revalidateOnFocus = true,
  revalidateOnMount = true,
  revalidateOnReconnect = true,
  refreshInterval = 0
) => {
  const api = `${CMS_ENDPOINT}/documents/search?ref=${CMS_REF}&access_token=${CMS_ACCESS_TOKEN}&q=[[${query}]]`;

  const fetcher = async (url) => {
    const res = await fetch(url);
    return await res.json();
  };

  return useSWR(api, fetcher, {
    initialData,
    refreshInterval,
    revalidateOnFocus,
    revalidateOnMount,
    revalidateOnReconnect
  });
};
