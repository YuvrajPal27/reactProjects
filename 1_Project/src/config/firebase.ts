// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC99oEs_csNbw0uHxDlYFZbugF3v7oeRWI",
  authDomain: "github-react-project-1.firebaseapp.com",
  projectId: "github-react-project-1",
  storageBucket: "github-react-project-1.firebasestorage.app",
  messagingSenderId: "811615204583",
  appId: "1:811615204583:web:2c747c569cc4af23229e42",
  measurementId: "G-VXNFY9G7MC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;