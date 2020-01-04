import React, { useEffect } from 'react';
import { RouteConfig, RouteName } from '../config/router';
import { LayoutConfig } from './index';
import AuthLayout from './AuthLayout';
import MainLayout from './MainLayout';

export interface LayoutProps {
	routeName: RouteName;
	routeConfig: RouteConfig;
	layoutConfig?: LayoutConfig;
	children: any;
}

const Layout = (props: LayoutProps) => {
	const { routeName, layoutConfig } = props;
	useEffect(() => {
		document.title = layoutConfig?.title || routeName;
	}, [routeName, layoutConfig]);

	const RequestedLayout = layoutConfig?.layout === 'AuthLayout' ? AuthLayout : MainLayout;
	return <RequestedLayout {...props} />;
};

export default Layout;
