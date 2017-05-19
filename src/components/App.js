// This component handles the App template used on every page.
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Menu from '../components/common/Menu';

class App extends Component {

  render() {

    return (
      <div className="container-fluid">
        <Menu loading={this.props.isLoading}/> 
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};

// export default App
/* 
ajaxCallsInProgress must have the same name in:
 initialState.js, ajaxCallReducer.js, recusers\index.js 
*/
function mapStateToProps(state, ownProps) {
  return {
    isLoading: state.ajaxCallsInProgress > 0, //return bool
    loader: state.loader > 0
  };
}
export default connect(mapStateToProps)(App);


