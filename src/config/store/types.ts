import { Action as ReduxAction } from 'redux';

export type AppActionTypes = string;

export interface AppState {

}

export interface AppAction extends ReduxAction<AppActionTypes> {
	silent?: boolean;
}

export interface AppResultAction extends AppAction {
	hasError: boolean;
}
