# kinraidee
My educational website features a variety of random food selections, utilizing Firebase and Bootstrap 5 to enhance the learning experience.

## Preview
![image](https://github.com/MCPETH/kinraidee/assets/30114061/7221b29a-2cbb-4932-90fc-442ba68bb861)

## Modal Example.

## Setup
```js
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
```

## Initialize Firebase
```js
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const datasetdb = getFirestore(app)

async function getDataset(datasetdb) {
  const foodCol = collection(datasetdb, 'food_db')
  const foodDocs = await getDocs(foodCol)
  return foodDocs
}
```
## on click random array
```js
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
```
