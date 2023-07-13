import { initializeApp } from "firebase/app"
import "firebase/auth"

const app = initializeApp({
  apiKey: "AIzaSyDTzIMv901rKwo6PTNB8X-zu7O3DOUNKFg",
  authDomain: "zeeds-app-9c2fc.firebaseapp.com",
  projectId: "zeeds-app-9c2fc",
  storageBucket: "zeeds-app-9c2fc.appspot.com",
  messagingSenderId: "976521892930",
  appId: "1:976521892930:web:6e5b591a0ec2c8f69109db"
})

export default app