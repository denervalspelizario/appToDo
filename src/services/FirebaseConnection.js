
import firebase from 'firebase/app'  // imports necessarios para acesso do firebase no app
import 'firebase/auth'
import 'firebase/database'   


const firebaseConfig = {
  apiKey: "AIzaSyC4X12Vyoilp_VC-oXhiGJHJtalg_XlmAs",
  authDomain: "apptodo-af701.firebaseapp.com",
  projectId: "apptodo-af701",
  storageBucket: "apptodo-af701.appspot.com",
  messagingSenderId: "345543579006",
  appId: "1:345543579006:web:3986162cbcc7386e804f2f"
};

// Vai dar erro no async para arrumar ver documentacao 31_Farebase repositorio react_native2

if(!firebase.apps.length){                     // condicional para chamar o firebase e evitar erro
    firebase.initializeApp(firebaseConfig)     // essa condicional é meio que default 
}

export default firebase;  // expostando o database

