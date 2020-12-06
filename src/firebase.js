import firebase from 'firebase'
import env from "react-dotenv";

const firebaseApp = firebase.initializeApp({
        apiKey: env.API_KEY,
        authDomain: env.AUTH_DOMAIN,
        databaseURL: env.DB_URL,
        projectId: env.PROJECT_ID,
        storageBucket: env.BUCKET,
        messagingSenderId: env.SENDER_ID,
        appId: env.APP_ID,
        measurementId: env.MES_ID 
})

const db = firebaseApp.firestore()

export default db 

