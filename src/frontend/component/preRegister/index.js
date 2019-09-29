import {connect} from 'react-redux'
import PreRegister from './page'

function mapStateToProps(state) {
    return {
        ...state,
    };
}

export default connect(mapStateToProps)(PreRegister)
