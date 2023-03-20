export interface LocationStates {
  "/"?: {};
  "/#"?: {};
  "/characters"?: {};
  "/episode"?: {};
  "/locations"?: {};
  "/watchlist"?: {};
}
export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: any;
  name?: string;
}
