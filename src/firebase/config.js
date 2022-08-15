import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCzYG7xGgwpRgLvj0MtYV-ibkrzLdKyM7A",
    authDomain: "vuex-4-fb-auth-48424.firebaseapp.com",
    projectId: "vuex-4-fb-auth-48424",
    storageBucket: "vuex-4-fb-auth-48424.appspot.com",
    messagingSenderId: "849972896008",
    appId: "1:849972896008:web:a5cfb7e86b5415420a0cbd"
};

//init firebase
initializeApp(firebaseConfig);

//init firebase auth
const auth = getAuth();


export { auth };