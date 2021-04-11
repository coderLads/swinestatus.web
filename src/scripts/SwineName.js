import firebase from 'firebase/app';
import 'firebase/database';

function ranWord(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// function that handles finding statuses for users based on uid
function SwineName() {
  return new Promise((resolve) => {
    firebase.database().ref('users').once('value').then((snapshot) => {
      const users = snapshot.val();
      console.log(users);
      firebase.database().ref('swinewords').once('value').then((wordSnapshot) => {
        const words = wordSnapshot.val();
        // console.log(
        //   Object.values(words.colors).length
        //   * Object.values(words.adjectives).length
        //   * Object.values(words.emotions).length
        //   * Object.values(words.pigs).length,
        // );
        const testName = ranWord(Object.values(words.adjectives))
          + ranWord(Object.values(words.colors))
          + ranWord(Object.values(words.emotions))
          + ranWord(Object.values(words.pigs));
        resolve(testName);
      });
    });
  });
}

export default SwineName;
