for (var i = 0; i < localStorage.length; i++) {
    var jsonString = localStorage.getItem("Record No." + (i + 1));
    var retrievedObject = JSON.parse(jsonString);
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = (i+1);
    cell2.innerHTML = retrievedObject.name;
    cell3.innerHTML = retrievedObject.gender;
    cell4.innerHTML = retrievedObject.address;
    cell5.innerHTML = retrievedObject.education;
    cell6.innerHTML = retrievedObject.profession;
}