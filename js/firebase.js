// Initialize Firebase
var config = {
    apiKey: "AIzaSyBMpP3JgiLrz0JvVcKGoo1W-L4SXDGpYsc",
    authDomain: "desafio-df4d4.firebaseapp.com",
    databaseURL: "https://desafio-df4d4.firebaseio.com",
    projectId: "desafio-df4d4",
    storageBucket: "desafio-df4d4.appspot.com",
    messagingSenderId: "127736464376"
};
firebase.initializeApp(config);

productList = [
    [
       {gtin: '1123456781', embalagem: "CAIXA", quantidade: 1},
       {gtin: '1123456782', embalagem: "CAIXA", quantidade: 1},
       {gtin: '1123456783', embalagem: "CAIXA", quantidade: 1},
    ],
    [
        {gtin: '1123456781', embalagem: "CAIXA", quantidade: 1},
        {gtin: '1123456782', embalagem: "CAIXA", quantidade: 1},
        {gtin: '1123456783', embalagem: "CAIXA", quantidade: 1},
    ],
  ]