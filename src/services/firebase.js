// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBgGzd93jUYJQG8Br8NZr_lbc_G8gTshH4",
  authDomain: "tp--clone-netflix--cac-react.firebaseapp.com",
  projectId: "tp--clone-netflix--cac-react",
  storageBucket: "tp--clone-netflix--cac-react.appspot.com",
  messagingSenderId: "573340947946",
  appId: "1:573340947946:web:b899726ab2be8bb42ece93",
  measurementId: "G-C0ZJNK376V"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)