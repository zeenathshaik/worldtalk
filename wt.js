// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9LdjyD9qgGz7KjtImUHZrp4ap4HuNq0U",
  authDomain: "multipages-6c6a0.firebaseapp.com",
  databaseURL: "https://multipages-6c6a0-default-rtdb.firebaseio.com",
  projectId: "multipages-6c6a0",
  storageBucket: "multipages-6c6a0.appspot.com",
  messagingSenderId: "1098866635386",
  appId: "1:1098866635386:web:492a46273782242de841c3",
  measurementId: "G-WK3T7V5ETK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function logout(){
    window.location="index.html";
}
user_name=localStorage.getItem("name of the user");
document.getElementById("user_name").innerHTML = "Hey.." + user_name;
function addroom()
{
    searchroom = document.getElementById("searchroom").value;
    firebase.database().ref("/").child(searchroom).update({
        purpose:"searching"
    });
    localStorage.setItem("searchroom",searchroom);
    window.location="second.html";
    
}
