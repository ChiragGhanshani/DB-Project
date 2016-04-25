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
    var user = getCookie('zooLoginCookie');
    var user = JSON.parse(user);
    var employee = getCookie('employeeCookie');
    if(employee != "") {
        var employee = JSON.parse(employee);
    }


    var username = user.username;
    var role = user.role;
    var employeeName = employee.employee_firstname + ' ' +  employee.employee_lastname;
    var employeeRole = employee.role_name;


    if(role == "Customer") {
    document.getElementById('customer').innerHTML = username;
    document.getElementById('customer').style.display = "block";
    document.getElementById('login').style.display = "none";
    }

    else if(role == "Employee") {
        if(employeeRole == "Manager") {
            document.getElementById('manager').innerHTML = employeeName;
            document.getElementById('manager').style.display = "block";
            document.getElementById('login').style.display = "none";
        }

        else if(employeeRole == "Keeper" || employeeRole == "Veterinarian") {
            document.getElementById('keepVet').innerHTML = employeeName;
            document.getElementById('keepVet').style.display = "block";
            document.getElementById('login').style.display = "none";
        }
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

    function updateUserInfo(sectionEdit){
    var fields = {'editAddress' : ['address', 'city', 'state', 'zipcode'],
    'editEmail' : ['email'], 'editPass' : ['oldPass', 'newPass'],
    'editNumber' : ['phoneNumber']
    };

    for(var element in fields[sectionEdit]){
    if(document.getElementById(fields[sectionEdit][element]).value == ''){
      window.alert('Invalid Input. Please check your entry for: ' + fields[sectionEdit][element]);
      return;
    }
    }

    var customer = getCookie('customerCookie');
    customer = JSON.parse(customer);

    var user = getCookie('zooLoginCookie');
    var user = JSON.parse(user);

    if(sectionEdit == "editAddress") {
        customer['customer_streetAddress'] = document.getElementById('address').value;
        customer['customer_city'] = document.getElementById('city').value;
        customer['customer_state'] = document.getElementById('state').value;
        customer['customer_zipcode'] = document.getElementById('zipcode').value;

        document.getElementById('customer_streetAddress').innerHTML = customer['customer_streetAddress'];
        document.getElementById('customer_city').innerHTML = customer['customer_city'];
        document.getElementById('state_name').innerHTML = customer['state_name'];
        document.getElementById('customer_zipcode').innerHTML = customer['customer_zipcode'];

        document.getElementById(sectionEdit).style.display = "none";
        httpSend('/editInfo/editAddress?ID=' + customer['membership_id'].replace(/-/g, '%2D') +
            '&address=' + customer['customer_streetAddress'] + '&city=' + customer['customer_city']
            + '&state=' + customer['customer_state'] + '&zip=' + customer['customer_zipcode']);
    }

    else if(sectionEdit == "editEmail") {
        customer['customer_email'] = document.getElementById('email').value;
        document.getElementById('customer_email').innerHTML = customer['customer_email'];

        httpSend('/editInfo/editEmail?ID=' + customer['membership_id'].replace(/-/g, '%2D') +
            '&email=' + customer['customer_email'].replace(/@/g, '%40'));

        document.getElementById(sectionEdit).style.display = "none";
    }

    else if(sectionEdit == "editNumber") {
        customer['customer_phoneNumber'] = document.getElementById('phoneNumber').value;
        document.getElementById('customer_phoneNumber').innerHTML = customer['customer_phoneNumber'];
        httpSend('/editInfo/updatePhone?ID=' + customer['membership_id'].replace(/-/g, '%2D') +
            '&phone=' + customer['customer_phoneNumber'].replace(/-/g, '%2D'));

        document.getElementById(sectionEdit).style.display = "none";
    }

    else if(sectionEdit == "editPass") {
        if(document.getElementById('oldPass').value == user['password']) {
            user['password'] = document.getElementById('newPass').value;
            document.getElementById(sectionEdit).style.display = "none";
            httpSend('/editInfo/updatePass?username=' + user['username'] + '&pass=' +
              document.getElementById('oldPass').value + '&newpass=' + user['password']);
        }

        else {
            window.alert('Current password is incorrect');
        }

    }
    setCookie('zooLoginCookie', user, .04);
    setCookie('customerCookie', customer, .04);
}
