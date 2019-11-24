import { RouteComponentProps } from "@reach/router"

export interface IPageSettings {
}

export interface IRoutesSchema {
  [key: string]: React.ComponentType<RouteComponentProps>
}
