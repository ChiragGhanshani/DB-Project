function addCartInfo() {
    var cart = {'child': 0, 'adult': 0, 'senior': 0, 'single': 0, 'dual': 0,
        'singleFam': 0, 'family': 0, 'famPlus': 0, 'grandparent': 0};

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

    setCookie('shoppingCartCookie', cart, .04);
    document.getElementById('cart').click();
}

function populateCart() {
    var itemCost = {'child': 12, 'adult': 15, 'senior': 10, 'single': 65, 'dual': 85,
    'singleFam': 110, 'family': 125, 'famPlus': 145, 'grandparent': 100};

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

function completeTransaction(){
  var itemsMap = {'child': '1', 'adult': '2', 'senior': '3', 'single': '4', 'dual': '5',
    'singleFam': '6', 'family': '7', 'famPlus': '8', 'grandparent': '9'};
  var items = JSON.parse(getCookie('shoppingCartCookie'));
  var memberID = JSON.parse(getCookie('zooLoginCookie')).user_id.replace(/-/g, '%2D');
  var queries = '?ID=' + memberID;
  for (key in items){
    queries = queries + '&item' + itemsMap[key] + '=' + items[key].toString();
  }
  httpSend('/shoppingCart/completeTransaction' + queries);
  setCookie('shoppingCartCookie', '', .04);
}
