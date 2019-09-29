import {connect} from 'react-redux'
import QA from './page'

function mapStateToProps(state) {
    return {
        ...state,
    };
}

export default connect(mapStateToProps)(QA)
