import {connect} from 'react-redux'
import Market from './page'

function mapStateToProps(state) {
    return {
        ...state,
    };
}

export default connect(mapStateToProps)(Market)
