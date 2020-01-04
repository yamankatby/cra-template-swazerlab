import React from 'react';
import { BrowserRouter, Route, RouteProps, Switch } from 'react-router-dom';

import { Layout, NotFound } from '../layout';

export type RouteName = string;

export interface RouteConfig extends RouteProps {

}

export const routes: { [name in RouteName]: RouteConfig } = {};

export default () => {
	const renderRoutes = Object.entries(routes).map(([key, config]) => {
		const ThePageComponent = config.component as any;
		const component = () => (
			<Layout routeName={key} routeConfig={config} layoutConfig={ThePageComponent.layoutConfig}>
				<ThePageComponent />
			</Layout>
		);
		return (<Route key={key} {...config} component={component} />);
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
