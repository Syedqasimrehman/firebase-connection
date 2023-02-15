
// const {initializeApp}= require ('firebase/app');
// const{getFirestore, collection, getDoc, getDocs} = require ('firebase/firestore');

// const firebaseConfig = {
//   apiKey: "AIzaSyB0pY3h-N_P-X6F9vhrVXcoL_adxtjBXIQ",
//   authDomain: "code-with-ninja-5288c.firebaseapp.com",
//   projectId: "code-with-ninja-5288c",
//   storageBucket: "code-with-ninja-5288c.appspot.com",
//   messagingSenderId: "445586633642",
//   appId: "1:445586633642:web:b3e716c7000999aa1371d3"
// };
//   // init firebase app
//   initializeApp(firebaseConfig)
  
//   // //init services
//   const db = getFirestore()

//   // //collection ref
//   const conRef = collection(db,'testing')

//   // get collection data
//   getDocs(conRef)
//   .then((snapshop)=>{
//     console.log(snapshop.docs)
//   })


import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0pY3h-N_P-X6F9vhrVXcoL_adxtjBXIQ",
  authDomain: "code-with-ninja-5288c.firebaseapp.com",
  projectId: "code-with-ninja-5288c",
  storageBucket: "code-with-ninja-5288c.appspot.com",
  messagingSenderId: "445586633642",
  appId: "1:445586633642:web:b3e716c7000999aa1371d3"
};

 initializeApp(firebaseConfig);
const db = getFirestore();

//collection refer
const colRef =  collection(db,'testing')

// get collection data
   getDocs(colRef)
   .then((snapshop)=>{
     console.log(snapshop.docs)  })
