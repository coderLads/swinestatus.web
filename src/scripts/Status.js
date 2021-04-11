import firebase from 'firebase/app';
import 'firebase/database';

// function that handles finding statuses for users based on uid
function Status(uid) {
  return new Promise((resolve, reject) => {
    firebase.database().ref(`/statuses/${uid}/manual`).on('value', (snapshot) => {
      console.log(snapshot.val());
      if (snapshot.val()) {
        resolve(Object.values(snapshot.val())[0]);
      }
      reject(Error(false));
    });
  });
}

export default Status;
