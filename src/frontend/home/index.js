import {connect} from 'react-redux'
import Home from './page'

function mapStateToProps(state) {
    return {
        ...state,
    };
}

export default connect(mapStateToProps)(Home)
