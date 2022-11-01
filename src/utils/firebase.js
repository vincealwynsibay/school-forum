// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBkxiwyQQiG1vf5qc4M88yiATNB9dw80No",

	authDomain: "school-forum-e6228.firebaseapp.com",

	projectId: "school-forum-e6228",

	storageBucket: "school-forum-e6228.appspot.com",

	messagingSenderId: "14878543173",

	appId: "1:14878543173:web:d94be52652f16a3882422c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

export const timestamp = serverTimestamp();
