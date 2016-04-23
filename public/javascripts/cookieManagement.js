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
    //document.getElementById('navbar').style.visibility = "hidden";
    document.getElementById('name').innerHTML = username;
    document.getElementById('name').style.display = "block";
    document.getElementById('customer').style.display = "block";
  }

  else if(role === "Manager") {
    document.getElementById('name').innerHTML = username;
    document.getElementById('name').style.visibility = "visible";
    document.getElementById('manager').style.visibility = "visible";
  }

  else if (role === "") { //finish this else if
    document.getElementById('customer').style.display = "none";
  }
}