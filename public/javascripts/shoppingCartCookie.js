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
    //var cart = {'1':  0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0};

    var cart = {'child': 0, 'adult': 0, 'senior': 0, 'single': 0, 'dual': 0,
        'singleFam': 0, 'family': 0, 'famPlus': 0, 'grandparent': 0};

    var itemsMap = {'child': '1', 'adult': '2', 'senior': '3', 'single': '4', 'dual': '5',
        'singleFam': '6', 'family': '7', 'famPlus': '8', 'grandparent': '9'};

    for(var key in cart) {
        var quantity = document.getElementById(key);

        if(parseInt(quantity.value) > 0) {
            cart[key] = parseInt(quantity.value);
            console.log(cart[key]);
        }
        else if(quantity.checked) {
            cart[key] = 1;
            console.log(cart[key]);
        }
    }


    //for (var i=1; i<4; i++) {
    //    var element = document.getElementById(i.toString());
    //    cart[i.toString()] = parseInt(element.value);
    //}
    //
    //for (var i=4; i<10; i++) {
    //    var element = document.getElementById(i.toString());
    //    if(element.checked) {
    //        cart[i.toString()] = 1;
    //    }
    //}

    setCookie('shoppingCartCookie', cart, .04);
    document.getElementById('cart').click();
}

function populateCart() {
    var itemCost = {'child': 12, 'adult': 15, 'senior': 10, 'single': 65, 'dual': 85,
    'singleFam': 110, 'family': 125, 'famPlus': 145, 'grandparent': 100};

    var itemsMap = {'child': 'childTix', 'adult': 'adultTix', 'senior': 'seniorTix',
        'single': 'singleMem', 'dual': 'dualMem', 'singleFam': 'singleFamMem',
        'family': 'familyMem', 'famPlus': 'famPlusMem', 'grandparent': 'grandMem'};

    var cartCookie = getCookie('shoppingCartCookie');
    var cartCookie = JSON.parse(cartCookie);

    var total = 0;

    for(var key in cartCookie) {
        if(cartCookie[key] > 0) {
            var type = key+'Purchase';
            var price = parseInt(cartCookie[key]) * itemCost[key];
            var priceType = key+'Price';
            total += parseInt(cartCookie[key]) * itemCost[key];
            document.getElementById(key).innerHTML = cartCookie[key];
            document.getElementById(priceType).innerHTML = '$' + price;
            document.getElementById(type).style.display = "table-row";
            //document.getElementById(key).style.display = "table-cell";
            console.log(total);
        }
    }

    document.getElementById('total').innerHTML = 'Total:  $' + total;
}

function runOnLoad() {
    addTab();
    populateCart();
}

function displayCheckoutForm() {

    document.getElementById('checkOut').style.display = "block";
    document.getElementById('clickCheckOut').style.display = "none";
}
