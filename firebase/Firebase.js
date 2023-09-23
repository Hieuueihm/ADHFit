import * as firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyAdqzjJAHRmue7jItIfKp-_5_pwjtmw91Q",
    authDomain: "Q8zqUxpOUXOq44W2af1XZOQmxCwK9wOBTuYS4ljw",
    databaseURL: "https://adhfit-ddb6d-default-rtdb.asia.southeast1.firebasedatabase.app",
    projectId: "adhfit-ddb6d",
    storageBucket: "adhfit-ddb6d.appspot.com",
    messagingSenderId: "1076954851180",
    appId: "1:1076954851180:android:59cb5d8ebd47c531b93549"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firebaseDatabase = getDatabase();
export {
    auth,
    firebaseDatabase
} 
