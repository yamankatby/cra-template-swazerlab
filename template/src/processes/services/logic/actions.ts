import { AppAction } from '../../../config/store/types';
import { ActionTypes, AlertType, NavigateAction, ReplaceAction, ShowAlertAction, ShowProgressAction } from './types';
import { history, RouteName } from '../../../config/router';

export const navigate = (routeName: RouteName): NavigateAction => {
	history.push(routeName);
	return {
		type: ActionTypes.navigate,
		routeName,
	};
};
export const replace = (routeName: RouteName): ReplaceAction => {
	history.replace(routeName);
	return {
		type: ActionTypes.replace,
		routeName,
	};
};

export const showProgress = (message: string): ShowProgressAction => ({
	type: ActionTypes.show_progress,
	message,
});
export const hideProgress = (): AppAction => ({
	type: ActionTypes.hide_progress,
});

export const showAlert = (alertType: AlertType, title: string, message: string): ShowAlertAction => ({
	type: ActionTypes.show_alert,
	alertType,
	title,
	message,
});
export const clearAlert = (): AppAction => ({
	type: ActionTypes.clear_alert,
});
