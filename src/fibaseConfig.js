// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBQqbG9qVTMtvTkEYvYKydRU0dfctck2rU",
	authDomain: "frontend-c.firebaseapp.com",
	databaseURL: "https://frontend-c-default-rtdb.firebaseio.com",
	projectId: "frontend-c",
	storageBucket: "frontend-c.firebasestorage.app",
	messagingSenderId: "1016150805894",
	appId: "1:1016150805894:web:c65f3d25979260a12d7007",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database };
