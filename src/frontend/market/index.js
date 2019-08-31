import {connect} from 'react-redux'
import Home from './page'
import * as ja from '../../i18n/languages/ja'
import * as en from '../../i18n/languages/en'
import {updateIntl} from "react-intl-redux";
import flatten from 'flat'

const messages = {
    ja: ja.default,
    en: en.default
}

function mapStateToProps(state) {
    return {
        ...state,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleOnChangeLanguage: async (language) => {
            dispatch(updateIntl({locale: language, messages: flatten(messages[language])}))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
