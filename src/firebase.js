import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyB8ILo38WtgHi6zPnd9wBf2uJS4aFkkWzQ",
    authDomain: "studio-441a5.firebaseapp.com",
    projectId: "studio-441a5",
    storageBucket: "studio-441a5.appspot.com",
    messagingSenderId: "655257173559",
    appId: "1:655257173559:web:46ad4c802cb9f4ff4209b2",
    measurementId: "G-5JFWNK7XVL" //optional
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, signOut };
