function ajaxGet(url, callback) {
  var req = new XMLHttpRequest();
  req.open("GET", url);
  req.addEventListener("load", function () {
    if (req.status >= 200 && req.status < 400) {
      callback(req.responseText);
    } else {
      console.error(req.status + " " + req.statusText + " " + url);
    }
  });
  req.addEventListener("error", function () {
    console.error("Erreur réseau avec l'URL " + url);
  });
  req.send(null);
}



ajaxGet("http://localhost:8080/data.json", function (reponse) {
  var user = JSON.parse(reponse);
  user.users.forEach(function (users) {
    parentManager = document.getElementById('table');
    tr = document.createElement('tr');
    nameElement = document.createElement('td');
    nameElement.innerHTML = users.name;


    idElement = document.createElement('td');
    idElement.innerHTML = users.id;

    ageElement = document.createElement('td');
    ageElement.innerHTML = users.age;

    cityElement = document.createElement('td');
    cityElement.innerHTML = users.city;

    parentManager.appendChild(tr);
    tr.appendChild(idElement);
    tr.appendChild(nameElement);
    tr.appendChild(ageElement);
    tr.appendChild(cityElement);
  });
});
