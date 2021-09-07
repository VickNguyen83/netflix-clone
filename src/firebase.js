import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyCiC2x4aiG5T4Mw77YZ6fsiURenyi9jpuQ",
    authDomain: "netflix-clone-c1681.firebaseapp.com",
    projectId: "netflix-clone-c1681",
    storageBucket: "netflix-clone-c1681.appspot.com",
    messagingSenderId: "569036633839",
    appId: "1:569036633839:web:05147249320c2909ba4d1a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); 
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;