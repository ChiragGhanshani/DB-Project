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
  document.cookie = 'zooLoginCookie=' + JSON.stringify(value) + ';' + 'path=/;' +
    'name=' + cookieName + ';';
}
