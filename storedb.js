// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-analytics.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const datasetdb = getFirestore(app)

async function getDataset(datasetdb) {
  const foodCol = collection(datasetdb, 'food_db')
  const foodDocs = await getDocs(foodCol)
  return foodDocs
}

$('.openDB').on('click', async function () {
  let ref = await getDataset(datasetdb)
  ref.forEach(food => {
    const foodarray = Object.values(food.data());
    console.log(foodarray)
    const randomArray = foodarray[Math.floor(Math.random() * foodarray.length)]
    $('.modal-body').html(`<img class="card-img-top shadow p-0 m-0" src='${randomArray[1]}' style="width:100%">` + `<h2 class="text-center lh-lg p-0 m-0 text-warning">${randomArray[0]}</h2> 
  <a id="smalltide" class="btn btn-sm py-0 btn-outline-success" href="${randomArray[1]}" target="_blank">แหล่งที่มา ${randomArray[2]}</a>`)
  });
})
