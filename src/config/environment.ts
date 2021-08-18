type EnvironmentVars = {
  env: {
    NEXT_PUBLIC_CMS_ACCESS_TOKEN: string;
    NEXT_PUBLIC_CMS_ENDPOINT: string;
    NEXT_PUBLIC_CMS_REF: string;
  };
};

declare const process: EnvironmentVars;

export const CMS_ACCESS_TOKEN = process.env.NEXT_PUBLIC_CMS_ACCESS_TOKEN;
export const CMS_ENDPOINT = process.env.NEXT_PUBLIC_CMS_ENDPOINT;
export const CMS_REF = process.env.NEXT_PUBLIC_CMS_REF;
