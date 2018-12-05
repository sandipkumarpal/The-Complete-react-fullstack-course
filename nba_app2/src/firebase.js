import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCTX0A9ArX1ybZBIB_8trpL6O4rb5gZSt0",
    authDomain: "nb-full.firebaseapp.com",
    databaseURL: "https://nb-full.firebaseio.com",
    projectId: "nb-full",
    storageBucket: "nb-full.appspot.com",
    messagingSenderId: "622457350775"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseArticles = firebaseDB.ref('articles');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebaseVideos = firebaseDB.ref('videos');

  const firebaseLooper = function(snapshot) {
    const data = [];
    snapshot.forEach((childSnapShot) => {
        data.push({
            ...childSnapShot.val(),
            id: childSnapShot.key
        });
    });
    return data;
  };

  export {
      firebase,
      firebaseDB,
      firebaseArticles,
      firebaseTeams,
      firebaseVideos,
      firebaseLooper
  };
  