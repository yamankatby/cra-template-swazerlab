import React from 'react';
import { LayoutProps } from './Layout';

const MainLayout = (props: LayoutProps) => {
	const { children } = props;
	return <div className='main-layout'>{children}</div>;
};

export default MainLayout;
