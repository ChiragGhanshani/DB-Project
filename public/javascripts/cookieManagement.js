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
  document.cookie = cookieName + '=' + JSON.stringify(value) + ';' + 'path=/;' +
    'name=' + cookieName + ';';
}

function addTab() {
  var cook = getCookie('zooLoginCookie');
  var user = JSON.parse(cook);
  var username = user.username;
  var role = user.role;

  if(role === "Customer") {
    document.getElementById('customer').innerHTML = username;
    //document.getElementById('Cname').style.display = "block";
    document.getElementById('customer').style.display = "block";
    //document.getElementById('customer').style.visibility = "visible";
  }

  else if(role === "Manager") {
    document.getElementById('Mname').innerHTML = username;
    document.getElementById('Mname').style.display = "block";
    document.getElementById('manager').style.visibility = "visible";
  }

  else if(role === "Keeper" || role === "Vet") {
    document.getElementById('KVname').innerHTML = username;
    document.getElementById('KVname').style.display = "block";
    document.getElementById('keepVet').style.visibility = "visible";
  }

  else if (role === "") {
    document.getElementById('Cname').style.display = "none";
    document.getElementById('customer').style.visibility = "hidden";

    document.getElementById('Mname').style.display = "none";
    document.getElementById('manager').style.visibility = "hidden";

    document.getElementById('KVname').style.display = "none";
    document.getElementById('keepVet').style.visibility = "hidden";
  }
}