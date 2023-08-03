import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAqN5iJCx4IdavIhyF9ucIFy7rCResG8DI",
  authDomain: "ticketdamsen.firebaseapp.com",
  projectId: "ticketdamsen",
  storageBucket: "ticketdamsen.appspot.com",
  messagingSenderId: "476379918617",
  appId: "1:476379918617:web:3c41a41f04576f5c755588",
  measurementId: "G-Z9H391947J"
};
  
// Kiểm tra nếu Firebase chưa được khởi tạo
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();
const storage = firebase.storage();

export { firestore, storage };
