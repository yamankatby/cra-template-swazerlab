import React, { Component } from 'react';

interface Props {
	children: any;
}

interface State {
	hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true };
	}

	render() {
		const { children } = this.props;
		const { hasError } = this.state;
		if (hasError)
			return (
				<>
					<h1>500 Internal Server Error</h1>
					<p>We did something wrong. We'll be notified and we'll look into it.</p>
				</>
			);
		return children;
	}
}
