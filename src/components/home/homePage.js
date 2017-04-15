/**
 * Created by BlisS on 20/03/17.
 */
import React from 'react';
// import {Link} from 'react-router';
import fixterFirebase from '../../api/fixterFirebase';
import _ from 'lodash';

class HomePage extends React.Component {
  constructor(){
    super();
    this.state = {
      mensajes: [],
      newObj: ''
    };

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
    this.borrar = this.borrar.bind(this);


  }
  componentWillMount(){
    fixterFirebase.getAllData('messages')
      .then((res)=>{
        this.setState({
          mensajes: res
        });
      });
  }

  onChange(e){
    e.preventDefault();
    this.setState({
      newObj: e.target.value
    });
  }

  submit(e){
    e.preventDefault();
    let obj = {
      message: this.state.newObj,
      perro: 'perro'
    };
    fixterFirebase.pushNewData('messages', obj)
      .then((r)=>{
      this.state.mensajes.push(r);
      this.setState({
        mensajes: this.state.mensajes
        });
      });
    this.setState({
      newObj: ''
    });


  }

  borrar(e){
    e.preventDefault();
    // console.log(e.target.value);
    let i = [];
    if(fixterFirebase.delete('messages',e.target.value)){
      _.remove(this.state.mensajes, {
        id:e.target.value
      });
    }
    this.setState({
      mensajes: this.state.mensajes
    });
  }

  render(){
    return (
      <div className="jumbotron">
          <h2>BlisS' Firebase Util Kit for ReactJS</h2>
        <ul>
          {this.state.mensajes.map(m=> {
            return (
              <li key={m.id}>
                <a value={m.id} onClick={this.borrar} className="btn btn-danger" href="#!">
                  X
                </a>
                {m.message} my key: {m.id}
              </li>
            );
          })}
        </ul>
        <form onSubmit={this.submit}>
          <input ref="test" onChange={this.onChange} value={this.state.newObj} type="text" className="form-control"/>
          <input value="Guardar" type="submit" className="btn btn-success"/>
        </form>
      </div>
    );
  }
}

export default HomePage;
