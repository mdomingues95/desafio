productsVue = new Vue({
    el: '#product-list',
    data: {
        productList: [],
        laoding: false
    },
    methods: {
        hoverIcon: function (icon_id, action){
            action == 'over' ? $("#icon" + icon_id).css("color", "#31BFCD") : $("#icon" + icon_id).css("color", "#121212")
        },
        showChild: function(box, nivel){
            if(this.productList[box][parseInt(nivel) + 1] != undefined){
                if($("#product" + box + "" + (parseInt(nivel) + 1)).hasClass("product-hide")){
                    $("#product" + box + "" + (parseInt(nivel) + 1)).removeClass("product-hide")
                    $("#icon" + box + "" + nivel).empty()
                    .append("keyboard_arrow_down")
                }
                else{
                    var auxInt = 1;
                    $("#icon" + box + "" + nivel).empty()
                    .append("keyboard_arrow_right")
                    while(this.productList[box][parseInt(nivel) + auxInt] != undefined){
                        if(!$("#product" + box + "" + (parseInt(nivel) + auxInt)).hasClass("product-hide")){
                            $("#product" + box + "" + (parseInt(nivel) + auxInt)).addClass("product-hide")
                        }
                        if($("#icon" + box + "" + (parseInt(nivel) + auxInt)).html() == "keyboard_arrow_down"){
                            $("#icon" + box + "" + (parseInt(nivel) + auxInt)).empty()
                            .append("keyboard_arrow_right")
                        }
                        auxInt++
                    }
                }
            }
        },
        createLink: function (event, box, nivel){
            event.stopPropagation();
            newProductVue.action = "link"
            newProductVue.box = box
            newProductVue.nivel = nivel 
            newProductVue.openRegister()
        },
        emptyList: function(){
            this.productList = [];
        },
        removeProduct: function (event, box, nivel){
            event.stopPropagation();
            firebaseRemoveProduct(box, nivel)
            console.log(box + "" + nivel)
        },
        createProduct: function (){
            newProductVue.action = "insert" 
            newProductVue.openRegister()
        },
        editProduct: function (event, box, nivel){
            event.stopPropagation();
            newProductVue.product = this.productList[box][nivel];
            newProductVue.action = "edit" 
            newProductVue.box = box
            newProductVue.nivel = nivel
            newProductVue.openRegister()
        },
        getList: function (){
            return this.productList;
        },
        updateList: function (key, value){
            this.$set(this.productList, key, value);
        },
        setLoading: function (value){
            this.loading = value;
        }
    },
    
})


