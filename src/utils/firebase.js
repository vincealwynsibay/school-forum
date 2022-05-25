// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAJKevkiUCpStF3Stbwb80rmhhSaTfJdQY",
	authDomain: "school-forum-185ba.firebaseapp.com",
	projectId: "school-forum-185ba",
	storageBucket: "school-forum-185ba.appspot.com",
	messagingSenderId: "881802332051",
	appId: "1:881802332051:web:e0670b08302821220e4a66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
