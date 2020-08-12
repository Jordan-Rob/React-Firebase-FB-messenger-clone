import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAFzwWW-HHO9VX6vL6uOpPJX3szBNsk89U",
        authDomain: "fb-messenger-clone-9a304.firebaseapp.com",
        databaseURL: "https://fb-messenger-clone-9a304.firebaseio.com",
        projectId: "fb-messenger-clone-9a304",
        storageBucket: "fb-messenger-clone-9a304.appspot.com",
        messagingSenderId: "469074019876",
        appId: "1:469074019876:web:88c2d1988117954451fab1",
        measurementId: "G-4500QQDNHC"
})

const db = firebaseApp.firestore()

export default db 

