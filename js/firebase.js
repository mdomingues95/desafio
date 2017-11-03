var config = {
    apiKey: "AIzaSyBMpP3JgiLrz0JvVcKGoo1W-L4SXDGpYsc",
    authDomain: "desafio-df4d4.firebaseapp.com",
    databaseURL: "https://desafio-df4d4.firebaseio.com",
    projectId: "desafio-df4d4",
    storageBucket: "desafio-df4d4.appspot.com",
    messagingSenderId: "127736464376"
};

firebase.initializeApp(config);

var database = firebase.database();

function refreshProducts(){
    var products = firebase.database().ref('/products/');
    loadingVue.setLoading(true);
    products.on('value', function(snapshot) {
        console.log(snapshot.val())
        $.each(snapshot.val(), function(i, j){
            var productBox = [];
            $.each(j, function(x, y){
                productBox.push({gtin: y.gtin, embalagem: y.embalagem, quantidade: y.quantidade})
            });
            productsVue.updateList(i, productBox)
        });
        loadingVue.setLoading(false);
    });
}

function saveProductBox(box, value){
    firebase.database().ref('/products/' + box + '/').set(value);
}

function firebaseRemoveProduct(box, nivel){
    var productref =  firebase.database().ref('/products/' + box + "/" + nivel + "/");
    productref.on('value', function(snapshot){
        if(snapshot.val() != null){
            productref.remove();
            productsVue.emptyList();
            refreshProducts();
            firebaseRemoveProduct(box, nivel+1);
        }
    })
}




