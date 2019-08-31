import {combineReducers, createStore} from 'redux'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as ja from './i18n/languages/ja'
import {addLocaleData} from 'react-intl';
import jaLocaleData from 'react-intl/locale-data/ja';
import enLocaleData from 'react-intl/locale-data/en';
import {intlReducer} from 'react-intl-redux'
import flatten from 'flat'


addLocaleData(enLocaleData);
addLocaleData(jaLocaleData);

const initialState = {
    intl: {
        locale: 'ja',
        messages: flatten(ja.default),
    },
}

function localesReducer(state = {}, action) {
    switch (action.type) {
        case 'UPDATE_LOCALES':
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state
    }
}

// 永続化の設定
const persistConfig = {
    key: 'landing',
    storage,
};

const reducers = combineReducers({
    locales: localesReducer,
    intl: intlReducer,
});

// 永続化設定されたReducerとして定義
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
    persistedReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


export const persistor = persistStore(store)
export default store
