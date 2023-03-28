import { ReactNode } from "react";

export type RouteType = {
  heading: string,
  element: ReactNode,
  state: string,
  index?: boolean,
  path?: string,
  child?: RouteType[],
  sidebarProps?: {
    displayText: string,
    icon?: ReactNode;
  };
};