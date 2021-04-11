import firebase from 'firebase/app';
import 'firebase/database';

// gets a random array item
function ranWord(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// generates a name from the words entry in the db
function generateName(words) {
  return (ranWord(Object.values(words.adjectives))
          + ranWord(Object.values(words.colors))
          + ranWord(Object.values(words.emotions))
          + ranWord(Object.values(words.pigs)));
}

// checks nobody else has the same swine name
function tryName(users, words, name) {
  Object.values(users).forEach((element) => {
    if (element.swinename === name) {
      tryName(users, generateName(words));
    }
  });
  return (name);
}

// gets list of users and list of names from the db
function SwineName() {
  return new Promise((resolve) => {
    firebase.database().ref('users').once('value').then((snapshot) => {
      const users = snapshot.val();
      firebase.database().ref('swinewords').once('value').then((wordSnapshot) => {
        const words = wordSnapshot.val();
        resolve(tryName(users, words, generateName(words)));
      });
    });
  });
}

export default SwineName;
