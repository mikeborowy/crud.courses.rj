/*
CoursePage Container (Controller)
 */
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as courseActions from '../../store/actions/courseActions';
import CoursesPage from './coursePageUI/CoursesPage';


/**
 * state.courses - this is a reducer name 
 */

const mapStateToProps = (state, ownProps) => {
    return{
        courses: state.courses 
    };
}

//bind actions way of dispatch
const mapDispatchToProps = (dispatch) => {
    return{
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);