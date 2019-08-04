import {connect} from 'react-redux'
import Header from './page'
import {updateIntl} from "react-intl-redux/src";
import ja from '../../../i18n/languages/ja'
import * as en from '../../../i18n/languages/en'

const messages = {
    ja: ja,
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
            const messages =
                dispatch(updateIntl({locale: language, messages: messages[language]}))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
