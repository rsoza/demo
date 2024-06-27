// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFz4KJxj6O41GqOGfV6w69HERaBaoFLHM",
  authDomain: "fir-599e4.firebaseapp.com",
  projectId: "fir-599e4",
  storageBucket: "fir-599e4.appspot.com",
  messagingSenderId: "1006562803104",
  appId: "1:1006562803104:web:7a0c052a72519e42aef8c5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig, {
  auth: {
    cookie: {
      sameSite: 'lax',
      secure: true,
    },
  },
});
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
// Initialize Firebase Authorization
export const auth = getAuth(app);