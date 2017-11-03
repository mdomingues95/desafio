newProductVue = new Vue({
    el: '#newProduct',
    data: {
       tittle: "",
       action: "insert",
       product: {
           gtin: "",
           embalagem: "",
           quantidade: ""
       },
       box: 0,
       nivel: 0,
       notimplemeted:{
           alt: "",
           larg: "",
           prof: "",
           pesob: "",
           pesol: ""
       }
    },
    methods : {
        openRegister: function (){
            switch(this.action){
                case "insert":
                this.tittle = "Adicionar uma nova composição"
                break;
                case "edit":
                this.tittle = "Editando um produto"
                break;
                case "link":
                this.tittle = "Cadastrar um nivel pai"
                break;
            }
            $('#newProductModal').modal("show");
        },
        closeRegister: function(){
            $('#newProductModal').modal("hide");
            this.clearRegister();
        },
        clearRegister: function(){
            this.product = {gtin: "", embalagem: "", quantidade: ""};
            this.notimplemeted = {
                alt: "",
                larg: "",
                prof: "",
                pesob: "",
                pesol: ""
            }
        },
        executeAction: function(){
            if(this.product.gtin != "" && 
            this.product.embalagem != "" && 
            this.product.quantidade != "" ){
                switch(this.action){
                    case "insert":
                    var productBox = []
                    productBox.push(this.product)
                    saveProductBox(productsVue.getList().length, productBox)
                    break;
                    case "edit":
                    console.log(this.product)
                    productsVue.getList()[this.box][this.nivel] = this.product
                    saveProductBox(this.box, productsVue.getList()[this.box])
                    break;
                    case "link":
                    productsVue.getList()[this.box].splice([this.nivel], 0, this.product);
                    saveProductBox(this.box, productsVue.getList()[this.box])
                    break;
                }

                this.closeRegister();
            }
        }
    }
});

$('#newProductModal').on('hide.bs.modal', function () {
    newProductVue.clearRegister();
})