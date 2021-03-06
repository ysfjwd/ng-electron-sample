import { OutletActions } from '@reaction/common/actions';
import { Outlet, OutletActionTypes } from '@reaction/common/models';

export const initialState: Outlet = {
  id: null,
  users: [],
  name: null,
  phone: null,
  address: null,
  country: null,
  currency: null,
  tax: null,
  rims_branch_code: null,
  api_key: null,
  customer: null,
  roles: [],
};

export function outletReducer(state = initialState, action: OutletActions): Outlet {
  switch (action.type) {
    case OutletActionTypes.LoadOutlet:
      return state;

    case OutletActionTypes.LoadOutletDone:
      return action.payload;

    default:
      return state;
  }
}
