import { Action as ReduxAction } from 'redux';

import { ActionTypes as ServicesActionTypes, State as ServicesState } from '../../processes/services/logic/types';

export type AppActionTypes = ServicesActionTypes;

export interface AppState {
	services: ServicesState;
}

export interface AppAction extends ReduxAction<AppActionTypes> {
	silent?: boolean;
}

export interface AppResultAction extends AppAction {
	hasError: boolean;
}
