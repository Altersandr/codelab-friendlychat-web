// TODO: Set up Firebase Cloud Messaging service worker

import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
import { getFirebaseConfig } from "./firebase-config";

const firebaseApp = initializeApp(getFirebaseConfig());
getMessaging(firebaseApp);
console.info("Firebase messaging service worker is set up");
