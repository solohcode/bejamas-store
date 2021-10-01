import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBsT1yepdTeE7S_lTthtuPrS_WEUm3E6eY",
  authDomain: "bejamas-prods.firebaseapp.com",
  projectId: "bejamas-prods",
  storageBucket: "bejamas-prods.appspot.com",
  messagingSenderId: "171943847937",
  appId: "1:171943847937:web:3552870b14599554727800"
};



firebase.initializeApp(firebaseConfig)

export default firebase