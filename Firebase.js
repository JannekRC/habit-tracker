import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, collectionGroup } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBSuf8iiACnQVyHGVm-OOfYksYIVdo7Sc",
  authDomain: "habittracker-9fc6a.firebaseapp.com",
  databaseURL:
    "https://habittracker-9fc6a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "habittracker-9fc6a",
  storageBucket: "habittracker-9fc6a.appspot.com",
  messagingSenderId: "346712267295",
  appId: "1:346712267295:web:2bab2cfcea760622ee132a",
};

initializeApp(firebaseConfig)

const db = getFirestore()

const colRef = collection(db, "habits")

getDocs(colRef)
.then((snapshot) => {
  let habits = []
  snapshot.docs.forEach((doc) => {
    habits.push({ ...doc.data(), id: doc.id })
  })
  console.log(habits);
})
.catch(err => {
  console.log(err.message)
})