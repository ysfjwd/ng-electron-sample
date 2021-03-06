import { User } from './user';

export interface Outlet {
  id: number;
  users: Array<User>;
  name: string;
  phone: string;
  address: string;
  country: string;
  currency: string;
  tax: number;
  rims_branch_code: string;
  api_key: string;
  customer: number;
  roles: Array<number>;
}

export enum OutletActionTypes {
  LoadOutlet = '[OUTLET] Load Outlet',
  LoadOutletDone = '[OUTLET] Load Outlet Done',
}
