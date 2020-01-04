import React from 'react';
import { BrowserRouter, Route, RouteProps, Switch } from 'react-router-dom';

import NotFound from '../layout/404';

export type RouteName = string;

export interface RouteConfig extends RouteProps {

}

export const routes: { [name in RouteName]: RouteConfig } = {};

export default () => {
	const renderRoutes = Object.entries(routes).map(([key, config]) => {
		return <Route key={key} {...config} />;
	});

	return (
		<BrowserRouter>
			<Switch>
				{renderRoutes}
				<Route path='/*' component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};
