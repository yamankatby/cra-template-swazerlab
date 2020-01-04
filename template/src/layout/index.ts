import Layout from './Layout';
import NotFound from './404';
import ErrorBoundary from './500';

export interface LayoutConfig {
	title: string;
	layout?: 'AuthLayout' | 'MainLayout';
}

export const setLayoutConfig = (component: any, layoutConfig: LayoutConfig) => {
	component.layoutConfig = layoutConfig;
};

export { Layout, NotFound, ErrorBoundary };
