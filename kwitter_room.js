
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA0aB-Cc5VSVrlu0VFk4lvnE34arUh4g9Q",
      authDomain: "kwitter-f58bb.firebaseapp.com",
      databaseURL: "https://kwitter-f58bb-default-rtdb.firebaseio.com",
      projectId: "kwitter-f58bb",
      storageBucket: "kwitter-f58bb.appspot.com",
      messagingSenderId: "270630593102",
      appId: "1:270630593102:web:ffcec20d581b26ac3cd91f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room names - " + Room_names);
      row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      });});}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_room.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_room.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

