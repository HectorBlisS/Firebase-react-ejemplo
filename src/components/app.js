/**
 * Created by BlisS on 20/03/17.
 */
import React from 'react';
import Header from '../components/common/Header';
import {browserHistory} from 'react-router';


class App extends React.Component {

  componentWillMount(){
    if (!localStorage.getItem('user')){
      browserHistory.push('login');
    }
  }

  render(){
    let u = JSON.parse(localStorage.getItem('user'));
    console.log(u);
    return (
      <div className="container">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired
};



export default App;
