import firebase from 'firebase/app';
import 'firebase/database';

function Status(uid) {
  firebase.database().ref(`/statuses/${uid}/manual`).on('value', (snapshot) => {
    if (snapshot.val()) {
      return snapshot.val();
    }
    return false;
  });

  // check if they have current status

  // else check if they have scheduled status

  // else check if they have recurring status

  // else offline
  return false;
}

export default Status;
