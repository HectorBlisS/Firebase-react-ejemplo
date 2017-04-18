/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import fixterFirebase from '../../api/fixterFirebase';


class Header extends React.Component {
    constructor(){
      super();

      if (localStorage.getItem('user')){
        const u = JSON.parse(localStorage.getItem('user'));
        this.state = {
          user: u
        }
      }
    }

    render(){
      return (

          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a class="navbar-brand" href="#!">
                  {localStorage.getItem('user') && <img width="50" alt="Brand" src={this.state.user.photoURL} />}
                </a>
                  {localStorage.getItem('user') && <a className="navbar-right btn btn-danger navbar-btn" onClick={fixterFirebase.logOut} >Cerrar Sesión</a>}
              </div>
            </div>
          </nav>

      );
    }

}

Header.propTypes = {};

export default Header;
