/* Guide reference
 * https://prismic.io/docs/technologies/integrating-with-an-existing-project-javascript
 */
import Prismic from "@prismicio/client";
import { CMS_ACCESS_TOKEN, CMS_ENDPOINT } from "@/config";

/* 'declare namespace' reference
 * https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html#objects-with-properties
 */

export const Client = (req = null) =>
  Prismic.client(CMS_ENDPOINT, createClientOption(req, CMS_ACCESS_TOKEN));

const createClientOption = (req: any, token: string) => {
  const reqOption: object = req ? { req } : {};
  const option: object = token ? { accessToken: token } : {};

  return {
    ...reqOption,
    ...option
  };
};

export const formatTime = (time: string): string => {
  const date: string[] = time.split("T")[0].split("-");
  let y: string = date[0];
  let m: string = date[1];
  let d: string = date[2];

  switch (m) {
    case "01":
      m = "January";
      break;
    case "02":
      m = "February";
      break;
    case "03":
      m = "March";
      break;
    case "04":
      m = "April";
      break;
    case "05":
      m = "May";
      break;
    case "06":
      m = "June";
      break;
    case "07":
      m = "July";
      break;
    case "08":
      m = "August";
      break;
    case "09":
      m = "September";
      break;
    case "10":
      m = "October";
      break;
    case "11":
      m = "November";
      break;
    case "12":
      m = "December";
      break;
    default:
      m = "Unknown";
  }

  return `${d} ${m} ${y}`;
};
