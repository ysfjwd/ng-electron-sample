import { ConfigActions } from '@reaction/common/actions';
import { ConfigActionTypes, Configuration } from '@reaction/common/models';

/**
 * Interface to the part of the Store containing ConfigState
 * and other information related to ConfigData.
 */

export const initialState: Configuration = {
  outlet_id: null,
  local_gateway: null,
  api_key: null,
  api_gateway: null,
  errors: null,
};

export function configReducer(state = initialState, action: ConfigActions): Configuration {
  switch (action.type) {
    case ConfigActionTypes.GetConfig:
      return state;

    case ConfigActionTypes.GetConfigFromElectron:
      return state;

    case ConfigActionTypes.GetConfigFromLocalStorage:
      return state;

    case ConfigActionTypes.GetConfigDone:
      return { ...state, ...action.payload };

    case ConfigActionTypes.ValidateConfig:
      return state;

    case ConfigActionTypes.ConfigValidationSuccess:
      return state;

    case ConfigActionTypes.ConfigValidationError:
      return { ...state, errors: action.payload };

    case ConfigActionTypes.SaveConfig:
      return { ...state };

    case ConfigActionTypes.SaveConfigToElectron:
      return { ...state };

    case ConfigActionTypes.SaveConfigToLocalStorage:
      return { ...state };

    case ConfigActionTypes.SaveConfigDone:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
