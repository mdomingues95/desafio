Vue.component('products', {
    props: ["box", "nivel", "gtin", "embalagem", "quantidade"],
    template: `
    <div class="element" :style="'padding-left: ' + parseInt(nivel) * 30 + 'px'">
        <a  v-bind:id="'product' + box + '' +  nivel" 
            v-on:mouseover="hoverIcon(box + '' + nivel, 'over')" 
            v-on:mouseout="hoverIcon(box + '' + nivel, 'out')"
            class="list-group-item list-group-item-action product"
            v-bind:class="{'product-hide': productList[box][parseInt(nivel) - 1] != undefined}"
            v-on:click="showChild(box, nivel)"
            >
            <div class="col">
                <div class="row">
                    <i v-bind:id="'icon' + box + '' +  nivel" class="material-icons arrow">{{
                        productList[box][parseInt(nivel) + 1] != undefined ? "keyboard_arrow_down" : ""
                    }}</i>
                    {{gtin}}
                </div>
            </div>
            <div :style="'margin-left: -' + parseInt(nivel) * 30 + 'px'" class="col">
                {{embalagem}}
            </div>
            <div class="col">
                {{quantidade}}
            </div>
            <div class="col">
                <button type="button" class="btn btn-primary btn-sm"><i class="material-icons">insert_link</i></button>
                <button type="button" class="btn btn-warning btn-sm"><i class="material-icons">mode_edit</i></button>
                <button type="button" class="btn btn-danger btn-sm"><i class="material-icons">delete</i></button>
            </div>
        </a>
    </div>`,
    methods: {
        hoverIcon: function (icon_id, action){
            console.log($("#icon" + icon_id))
            action == 'over' ? $("#icon" + icon_id).css("color", "#31BFCD") : $("#icon" + icon_id).css("color", "#121212")
        },
        showChild: function(box, nivel){
            if(productList[box][parseInt(nivel) + 1] != undefined){
                if($("#product" + box + "" + (parseInt(nivel) + 1)).hasClass("product-hide")){
                    $("#product" + box + "" + (parseInt(nivel) + 1)).removeClass("product-hide")
                }
                else{
                    var auxInt = 1;
                    while(productList[box][parseInt(nivel) + auxInt] != undefined){
                        if(!$("#product" + box + "" + (parseInt(nivel) + auxInt)).hasClass("product-hide")){
                            $("#product" + box + "" + (parseInt(nivel) + auxInt)).addClass("product-hide")
                        }
                        auxInt++
                    }
                }
            }
        }
    }
})

new Vue({
    el: '#product-list',
})


