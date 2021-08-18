export interface AccountURL {
  github: AccountURLType;
  medium: AccountURLType;
  able: AccountURLType;
  source_code: AccountURLType;
}

type AccountURLType = {
  link_type: string;
  url: string;
};
