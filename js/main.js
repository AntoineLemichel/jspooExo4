// function ajaxGet(url, callback) {
//   var req = new XMLHttpRequest();
//   req.open("GET", url);
//   req.addEventListener("load", function () {
//     if (req.status >= 200 && req.status < 400) {
//       callback(req.responseText);
//     } else {
//       console.error(req.status + " " + req.statusText + " " + url);
//     }
//   });
//   req.addEventListener("error", function () {
//     console.error("Erreur réseau avec l'URL " + url);
//   });
//   req.send(null);
// }



// ajaxGet("http://localhost:8080/data.json", function (reponse) {
//   var user = JSON.parse(reponse);
//   user.users.forEach(function (users) {


//     parentManager = document.getElementById('table');
//     tr = document.createElement('tr');
//     nameElement = document.createElement('td');
//     nameElement.innerHTML = users.name;


//     idElement = document.createElement('td');
//     idElement.innerHTML = users.id;

//     ageElement = document.createElement('td');
//     ageElement.innerHTML = users.age;

//     cityElement = document.createElement('td');
//     cityElement.innerHTML = users.city;

//     parentManager.appendChild(tr);
//     tr.appendChild(idElement);
//     tr.appendChild(nameElement);
//     tr.appendChild(ageElement);
//     tr.appendChild(cityElement);

//     document.getElementById('select').addEventListener('change', function (e) {

//     });

//   });
// });


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {

    let myDataObject = JSON.parse(this.responseText);
    myDataObject.users.forEach(function (users) {
      dataJson.getInfos(users);
      function setCompare(){
        users.reverse();
      }
      document.getElementById('select').addEventListener("change", function (e) {
        if (e.target.value == "ID") {
          setCompare(users.id, users.id);
        } else if (e.target.value == "Name") {

        } else if (e.target.value == "Age") {

        } else if (e.target.value == "Ctiy") {

        }
      });
    });
  }
}

xhttp.open("GET", "data.json", true);
xhttp.send();

let dataJson = {
  id: "",
  name: "",
  age: "",
  city: "",

  getInfos: function (object) {

    this.id = object.id;
    this.name = object.name;
    this.age = object.age;
    this.city = object.city;

    htmlManager.setDocument(this.id, this.name, this.age, this.city);

  }
}


let htmlManager = {
  setCompare: function (a, b) {
    console.log("test");
    return Number(a) - Number(b);
  },

  setDocument: function (id, name, age, city) {

    parentManger = document.getElementById("table");
    tr = document.createElement('tr');

    idElement = document.createElement('td');
    idElement.innerHTML = id;

    nameElement = document.createElement('td');
    nameElement.innerHTML = name;

    ageElement = document.createElement('td');
    ageElement.innerHTML = age;

    cityElement = document.createElement('td');
    cityElement.innerHTML = city;



    parentManger.appendChild(tr);
    tr.appendChild(idElement);
    tr.appendChild(nameElement);
    tr.appendChild(ageElement);
    tr.appendChild(cityElement);

  }
}
