// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFjnX6k0SmjqVUapfXoXHN0_QsCCcJT_E",
  authDomain: "meonrent-9012b.firebaseapp.com",
  databaseURL: "https://meonrent-9012b-default-rtdb.firebaseio.com",
  projectId: "meonrent-9012b",
  storageBucket: "meonrent-9012b.appspot.com",
  messagingSenderId: "781693210443",
  appId: "1:781693210443:web:fd427350b3e07c3d1022ce",
  measurementId: "G-X1VWXM45DT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app