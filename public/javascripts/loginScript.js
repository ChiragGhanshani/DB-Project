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

    if (result.username == 'error') {
        window.alert("Invalid username or password.");
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
    var uname = document.getElementById("Username").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;


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
}


function httpSend(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );

}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}