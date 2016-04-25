function httpSend(theUrl){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("Get", theUrl, false);
  xmlHttp.send(null);
}

function httpGet(theUrl){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("Get", theUrl, false);
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
  return "";
}

function setCookie(cookieName, value, expDays){
  var d = new Date();
  d.setTime(d.getTime() + Math.round(expDays * 24 * 60 * 60 * 1000));
  var expires = 'expires='+d.toUTCString();
  document.cookie = cookieName + '=' + JSON.stringify(value) + ';' + 'path=/;';
}

function addTab() {
  var cook = getCookie('zooLoginCookie');
  var user = JSON.parse(cook);
  var username = user.username;
  var role = user.role;

  if(role === "Customer") {
    document.getElementById('customer').innerHTML = username;
    document.getElementById('customer').style.display = "block";
    document.getElementById('login').style.display = "none";
  }

  else if(role === "Manager") {
    document.getElementById('manager').innerHTML = username;
    document.getElementById('manager').style.display = "block";
    document.getElementById('login').style.display = "none";
  }

  else if(role === "Keeper" || role === "Vet") {
    document.getElementById('keepVet').innerHTML = username;
    document.getElementById('keepVet').style.display = "block";
    document.getElementById('login').style.display = "none";
  }

  else if (role === "") {
    document.getElementById('login').style.display = "block";
    document.getElementById('customer').style.display = "none";
    document.getElementById('manager').style.display = "none";
    document.getElementById('keepVet').style.display = "none";
  }
}

function logOut() {
  document.cookie = 'zooLoginCookie=;path=/';
  document.cookie = 'employeeCookie=;path=/';
  document.cookie = 'customerCookie=;path=/';
  document.cookie = 'shoppingCartCookie=;path=/';

  document.getElementById('login').style.display = "block";

  document.getElementById('login').click();
}
