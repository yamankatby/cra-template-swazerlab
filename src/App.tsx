import React from 'react';
import { Provider } from 'react-redux';
import { store } from './config/store';

const App = () => {
    return (
        <h4>Hi, App Component!</h4>
    );
};

export default () => (
    <Provider store={store}>
        <App />
    </Provider>
);
