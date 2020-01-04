import { Reducer } from 'redux';
import { Action, ActionTypes, State } from './types';

const initialState: State = {
	progress: {
		visible: false,
		message: '',
	},
	alert: {
		visible: false,
		type: 'info',
		title: '',
		message: '',
	},
};

const services: Reducer<State, Action> = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.show_progress:
			return {
				...state,
				progress: {
					...state.progress,
					visible: true,
					message: action.message,
				},
			};
		case ActionTypes.hide_progress:
			return {
				...state,
				progress: initialState.progress,
			};
		case ActionTypes.show_alert:
			return {
				...state,
				alert: {
					...state.alert,
					visible: true,
					type: action.alertType,
					title: action.title,
					message: action.message,
				},
			};
		case ActionTypes.clear_alert:
			return {
				...state,
				alert: initialState.alert,
			};
		default:
			return state;
	}
};

export default services;
