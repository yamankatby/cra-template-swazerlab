import React from 'react';
import { LayoutProps } from './Layout';

const AuthLayout = (props: LayoutProps) => {
	const { children } = props;
	return <div className='auth-layout'>{children}</div>;
};

export default AuthLayout;
