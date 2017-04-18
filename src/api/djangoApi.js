import 'whatwg-fetch'
import $ from 'jquery';


export default {
  getAllData: function(rama){
    const token = 'Bearer facebook ' + JSON.parse(localStorage.getItem('token'));
    console.log(token);
    const url = 'http://localhost:8000/mensajes/';
    const request = {
      url: url,
      type: 'GET',
      headers: {
        'Authorization': token
      }

    };

    return $.ajax(request)
      .done(function(res){
        return res;
      });

  }
}
