/**
 * Created by BlisS on 22/03/17.
 */
import React, {PropTypes} from 'react';
import fixterFirebase from '../../api/fixterFirebase';
import { browserHistory } from 'react-router'


class Login extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.gLogin = this.gLogin.bind(this);
    }

    gLogin(e){
      e.preventDefault();
      fixterFirebase.googleLogin('google')
        .then(user=>{
          console.log(user.displayName);
          localStorage.setItem('user', JSON.stringify(user));
          alert('Hola pinche: ' + user.displayName);
          browserHistory.push('/');
        });
    }

    render() {
        return (
          <div>
            <div className="jumbotron">
              <h1>Inicia sesión</h1>
              <p>Con: </p>
              <button onClick={this.gLogin} className="btn btn-danger">Google</button>
              <button className="btn btn-primary">Facebook</button>
            </div>
          </div>
        );
    }
}

Login.propTypes = {
    // myProp: PropTypes.string.isRequired
};


export default Login;
