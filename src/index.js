import React from 'react';
import {render} from 'react-dom';
import App from './common/routes';
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import store, {persistor} from './configureStore'
import 'semantic-ui-css/semantic.min.css'
import './style/style.css'
import {IntlProvider} from 'react-intl-redux'
import ErrorBoundary from "./frontend/errorBoundary";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

render(
    <Provider store={store}>
        <IntlProvider>
            <PersistGate loading={null} persistor={persistor}>
                <ErrorBoundary>
                    <App/>
                </ErrorBoundary>
            </PersistGate>
        </IntlProvider>
    </Provider>,
    document.getElementById('root')
);


