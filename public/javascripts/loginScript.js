function enterListener(e) {
    if (e.keyCode == 13 || e.which == 13){
        checkLogin();
        return false;
    }
    else return true;
}

function checkLogin() {
    var username_in, text;
    var password_in, text;
    username_in = document.getElementById("username").value;
    password_in = document.getElementById("password").value;
    var result = httpGet('login/checkCredentials?ID=' + username_in + '&password=' + password_in);
    console.log(result);

    if (result.username == 'error') {
        window.alert("Invalid username or password.");
        return;
    }
    if (result.active == 0){
      window.alert("Invalid username or password.");
      return;
    }

    else {
        if(result.role == "Customer") {
            var customerResult = httpGet('login/getCustomer?ID=' + result.user_id);
            if (customerResult.customer_firstName == "error") {
                window.alert("Invalid user or password");
                return;
            }
            else {
                setCookie('zooLoginCookie', result, .04);
                setCookie('customerCookie', customerResult, .04);
            }
        }

        if(result.role == "Employee") {
            var employeeResult = httpGet('login/getEmployee?ID=' + result.user_id);
            if (employeeResult.customer_firstName == "error" || employeeResult.active == 0) {
                window.alert("Invalid user or password");
                return;
            }
            else {
                setCookie('zooLoginCookie', result, .04);
                setCookie('employeeCookie', employeeResult, .04);
            }
        }

        document.getElementById('home').click();
    }
}

function addCustomer() {
    var valid = true;
    var address = document.getElementById('address').value;
    var fname = document.getElementById("fn").value;
    var lname = document.getElementById("ln").value;
    var pass = document.getElementById("pw").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var phone = document.getElementById("phone").value;
    var uname = document.getElementById("username").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;

    if(!address.match(/[0-9]{1-7} [-A-Za-z0-9 ]+/) || !fname.match(/[A-Z][a-z]+/) || !lname.match(/[A-Z][a-z]+/)
        || !pass.match(/[-A-Za-z0-9]{8-20}/) || !city.match(/[A-Z][a-z]+/) || !zip.match(/[0-9]{5}/) ||
        !phone.match(/[0-9]{3}-[0-9]{3}-[0-9]{4}/) || !uname.match(/[A-Za-z0-9]{7-20}/) || !email.match(/[-A-Za-z0-9_.]+@[-A-Za-z0-9_.]+.[a-z]{2-3}/)){
      console.log("there is an error");
      return;
    }


    /*Here is how to detect which radio button: */
    var x = document.getElementsByName("memberType");
    for(var i=0;i<x.length;i++){
        if(x[i].checked){window.alert(x[i].value);}
    }

    if(document.getElementById("pw").value != document.getElementById("pw2").value) {
        window.alert("Passwords do not match!");
        valid = false;
        console.log("nope");
    }

    if (valid) {
        window.alert("Passes validation!");
        location = "#";
        location.reload(true);
        httpSend('/login/registerUser?username=' + uname + '&password=' + pass + '&firstName=' + fname +
            '&lastName=' + lname + '&street=' + address + '&city=' + city + '&state=' + state + '&zip=' + zip +
            '&phone=' + phone + '&dob=' + dob + '&email=' + email.replace('@', '%40'));
    }

    document.getElementById('login').click();
}

function submitNewEmployee() {
    var valid = true;
    var address = document.getElementById('address').value;
    var fname = document.getElementById("fn").value;
    var lname = document.getElementById("ln").value;
    var pass = document.getElementById("pw").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var phone = document.getElementById("phone").value;
    var uname = document.getElementById("username").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var nid = document.getElementById("nid").value;
    var manager_id = document.getElementById("manager_id").value;
    var salary = document.getElementById("salary").value;
    var role = document.getElementById("role").value;


    if(document.getElementById("pw").value != document.getElementById("pw2").value) {
        window.alert("Passwords do not match!");
        valid = false;
        console.log("nope");
    }

    if (valid) {
        window.alert("Passes validation!");
        location = "#";
        location.reload(true);
        httpSend('/login/registerEmployee?username=' + uname + '&password=' + pass + '&firstName=' + fname +
            '&lastName=' + lname + '&street=' + address + '&city=' + city + '&state=' + state + '&zip=' + zip +
            '&phone=' + phone + '&dob=' + dob + '&email=' + email.replace('@', '%40') + '&natioanlID=' + nid +
            '&managerID=' + manager_id + '&salary=' + salary + '&role=' + role);
    }

    document.getElementById('login').click();
}


function httpSend(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );

}

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}

function getUserData() {
    var customerData = getCookie('customerCookie');
    var customerData = JSON.parse(customerData);

    var userData = getCookie('zooLoginCookie');
    var userData = JSON.parse(userData);

    for (key in customerData) {
        if(key == 'customer_DOB'){
          console.log(customerData[key] + '\n' + customerData[key].split('T'));
          var dob = customerData[key].split('T')[0];
          document.getElementById(key).innerHTML = dob;
        }
        else if (key == 'customer_state') {
            document.getElementById('username').innerHTML = userData['username'];

        }
        else {
            document.getElementById(key).innerHTML = customerData[key];
        }
    }
}
