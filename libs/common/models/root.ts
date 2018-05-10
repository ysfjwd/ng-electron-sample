import { Params, RouterState } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';
import { ConfigState } from './config';

/**
 * Interface for the 'Router' state
 */
export interface ReactionRouter {
  url: string;
  params: Params;
  queryParams: Params;
}

/**
 * Interface to the part of the Store containing MainState
 * and other information related to MainData.
 */
export interface RoutertState {
  readonly router: RouterReducerState<ReactionRouter>;
}

export interface RootState extends RouterState, ConfigState {}