import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBQ4D6_4n0sQz8txH9eywdcJErojXW5y5k",
  authDomain: "creativeblog-3488a.firebaseapp.com",
  projectId: "creativeblog-3488a",
  storageBucket: "creativeblog-3488a.appspot.com",
  messagingSenderId: "329510092547",
  appId: "1:329510092547:web:2ee02d955bf43ae3093336"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export  {
    auth,
    db
}