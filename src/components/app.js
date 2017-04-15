/**
 * Created by BlisS on 20/03/17.
 */
import React from 'react';
// import {Link} from 'react-router';
// import Header from './common/header';
// para psar el componente a redux
import {connect} from 'react-redux';



class App extends React.Component {
  render(){
    return (
      <div className="container">
        <p>Header</p>
        {this.props.children}
        </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired
};



export default App;
