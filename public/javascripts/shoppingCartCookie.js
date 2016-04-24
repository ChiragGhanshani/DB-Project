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

function addCartInfo() {
    var cart = {'1':  0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0};

    for (var i=1; i<4; i++) {
        var element = document.getElementById(i.toString());
        cart[i.toString()] = parseInt(element.value);
    }

    for (var i=4; i<10; i++) {
        var element = document.getElementById(i.toString());
        if(element.checked) {
            cart[i.toString()] = 1;
        }
    }

    setCookie('shoppingCartCookie', cart, .04);
    document.getElementById('cart').click();
}

function populateCart() {
    var cartCookie = getCookie('shoppingCartCookie');
    var cartCookie = JSON.parse(cartCookie);

    for(var key in cartCookie) {
        document.getElementById(key).innerHTML = cartCookie[key];
        document.getElementById(key).style.display = "block";
    }

}