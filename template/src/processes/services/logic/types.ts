import { AppAction, AppResultAction } from '../../../config/store/types';
import { RouteName } from '../../../config/router';

export enum ActionTypes {
	navigate = 'SERVICES__NAVIGATE',
	replace = 'SERVICES__REPLACE',

	show_progress = 'SERVICES__SHOW_PROGRESS',
	hide_progress = 'SERVICES__HIDE_PROGRESS',

	show_alert = 'SERVICES__SHOW_ALERT',
	clear_alert = 'SERVICES__CLEAR_ALERT',
}

export interface NavigateAction extends AppAction {
	type: ActionTypes.navigate;
	routeName: RouteName;
}

export interface ReplaceAction extends AppAction {
	type: ActionTypes.replace;
	routeName: RouteName;
}

export interface ShowProgressAction extends AppAction {
	type: ActionTypes.show_progress;
	message: string;
}

export interface ShowAlertAction extends AppAction {
	type: ActionTypes.show_alert;
	alertType: AlertType;
	title: string;
	message: string;
}

export type Action =
	AppAction &
	AppResultAction &
	NavigateAction &
	ReplaceAction &
	ShowProgressAction &
	ShowAlertAction;

export type AlertType = 'error' | 'success' | 'warn' | 'info';

export interface Progress {
	visible: boolean;
	message: string;
}

export interface Alert {
	visible: boolean;
	type: AlertType;
	title: string;
	message: string;
}

export interface State {
	progress: Progress;
	alert: Alert;
}
