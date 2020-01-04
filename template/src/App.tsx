import React from 'react';
import { Provider } from 'react-redux';
import { store } from './config/store';
import AppRouter from './config/router';
import { ErrorBoundary } from './layout';

const App = () => {
    return <AppRouter />;
};

export default () => (
    <Provider store={store}>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </Provider>
);
