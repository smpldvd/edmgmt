var config = {
    apiKey: "AIzaSyAL5R5ZYUrR4sRyKGHJ54HcLzp0BSJwGgI",
    authDomain: "employee-data-management-fb0f4.firebaseapp.com",
    databaseURL: "https://employee-data-management-fb0f4.firebaseio.com",
    projectId: "employee-data-management-fb0f4",
    storageBucket: "employee-data-management-fb0f4.appspot.com",
    messagingSenderId: "263107276755"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

/*
  database.ref().push({
    name: name,
    role: role,
    sDate: sDate,
    mRate: mRate     
});
*/
