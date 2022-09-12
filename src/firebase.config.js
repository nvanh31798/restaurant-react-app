import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from  'firebase/storage'

  const firebaseConfig = {
    apiKey: "AIzaSyAdMl2sRctzWrM3JoOQCJLqG1ml7aJXgX4",
    authDomain: "restaurantapp-92b53.firebaseapp.com",
    databaseURL: "https://restaurantapp-92b53-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-92b53",
    storageBucket: "restaurantapp-92b53.appspot.com",
    messagingSenderId: "645310779498",
    appId: "1:645310779498:web:406c55ffceda56eaf93a13"
  }; 

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export{app, firestore, storage};