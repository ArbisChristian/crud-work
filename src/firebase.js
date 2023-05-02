import "firebase/database";
import {initializeApp} from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyCZN3z9aYPZdV_Dq_AnXwfEd0XbBnyseOc",
  authDomain: "finalactivity1-ac634.firebaseapp.com",
  projectId: "finalactivity1-ac634",
  storageBucket: "finalactivity1-ac634.appspot.com",
  messagingSenderId: "890287096301",
  appId: "1:890287096301:web:c32290986df6fb12b627e4",
  measurementId: "G-BWFC41NBC4"
};



const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();