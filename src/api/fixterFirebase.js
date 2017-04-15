/**
 * Created by BlisS on 15/04/17.
 */
import firebase from 'firebase';
import _ from 'lodash';

const config = {
  apiKey: "AIzaSyCF74a_S31pSmQb0ZqfbKLSRdO4XOPgv3k",
  authDomain: "autonomo-7e183.firebaseapp.com",
  databaseURL: "https://autonomo-7e183.firebaseio.com",
  projectId: "autonomo-7e183",
  storageBucket: "autonomo-7e183.appspot.com",
  messagingSenderId: "192787601022"
};
firebase.initializeApp(config);

export default {
  getAllData: function (rama) {
    let array = [];
    return firebase.database().ref(rama).once('value')
      .then(
        (snap) => {
          let obj = snap.val();
          Object.keys(obj).forEach(function (key) {
            // console.log('llave? ',key);
            // console.log('data? ',obj[key]);
            array.push(_.merge({id: key}, obj[key]));
          });
          console.log('el array: ',array);
          return array;
        });


  },

  pushNewData: function (rama, obj) {
    let newPostKey = firebase.database().ref().child(rama).push().key;
    // console.log(newPostKey);
    let updates = {};
    updates[rama + '/' + newPostKey] = obj;
    return firebase.database().ref().update(updates)
      .then(() => {return _.merge({id:newPostKey}, obj)})
      .catch(err => console.log(err));
  },

  delete: function(rama, id){
    let updates = {};
    updates[rama + '/' + id] = null;
    return firebase.database().ref().update(updates)
      .then(() => {return true})
      .catch(err => console.log(err));

  }
}
