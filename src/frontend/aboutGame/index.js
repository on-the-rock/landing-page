import {connect} from 'react-redux'
import AboutGame from './page'

function mapStateToProps(state) {
    return {
        ...state,
    };
}
export default connect(mapStateToProps)(AboutGame)
