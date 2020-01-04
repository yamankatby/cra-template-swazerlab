import { applyMiddleware, createStore, Dispatch, Middleware } from 'redux';
import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { AppAction, AppState } from './types';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares: Middleware[] = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
	middlewares.push(
		createLogger({
			predicate: (_, action: AppAction) => action.silent !== true,
		}),
	);
}

export const store = createStore(reducers, applyMiddleware(...middlewares));
sagaMiddleware.run(sagas);

export const useDispatch = (): Dispatch<AppAction> => useReduxDispatch();
export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;
