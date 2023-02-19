/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyA6SNieTQDpdbp7olwL4avAv9j5cMgwCkY",
  authDomain: "friendlychat-502c0.firebaseapp.com",
  projectId: "friendlychat-502c0",
  storageBucket: "friendlychat-502c0.appspot.com",
  messagingSenderId: "104411285893",
  appId: "1:104411285893:web:5cbd18e8ac148057a15cec",
  measurementId: "G-FHEELDJV30",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
