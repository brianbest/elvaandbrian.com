const firebaseConfig = {
  apiKey: "AIzaSyC98zxXrBwEGsMqSX53BY_MLp3qD7rp6XA",
  authDomain: "elvaandbrian-com.firebaseapp.com",
  projectId: "elvaandbrian-com",
  storageBucket: "elvaandbrian-com.appspot.com",
  messagingSenderId: "51926797195",
  appId: "1:51926797195:web:628642d35cbbb5603c3d8e",
  measurementId: "G-X7QXK8K13W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
const db = firebase.firestore();

db.collection("movies").orderBy("last_watched").then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    const movie = doc.data();
    $('#movie-list').append(`<li>${movie.title}</li>`);
  });
});
