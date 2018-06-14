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

let name = '';
let role = '';
let sDate = '';
let mRate = 0;

$(document).on('click', '#submit', function (event) {
    event.preventDefault();

    name = $('#empName').val().trim();
    role = $('#empRole').val().trim();
    sDate = $('#empStartDate').val().trim();
    mRate = $('#empMonthlyRate').val().trim();

    database.ref().push({
        name: name,
        role: role,
        sDate: sDate,
        mRate: mRate
    });
});

database.ref().on('child_added', function (childSnap) {
    name = $("<td>").text(childSnap.val().name);
    role = $("<td>").text(childSnap.val().role);
    sDate = $("<td>").text(childSnap.val().sDate);
    mRate = $("<td>").text(childSnap.val().mRate);

    let tBody = $('<tbody>');
    let tRow = $('<tr>');

    tRow.append(name, role, sDate, mRate);
    tBody.append(tRow);
})