Vue.component('composition', {
    template: `
        <div class="list-group">
            <a  class="list-group-item black">
                <div class="col" style="padding-left: 10px">GTIN</div>
                <div class="col">Unidade de embalagem</div>
                <div class="col">Quantidade de embalagem</div>
                <div class="col">Ações</div>
            </a>
            <div id="product-list">
                <div v-for="(productbox, index) in productList">
                    <products v-for="(item, itemindex) in productbox"
                    v-bind:box="index"
                    v-bind:nivel="itemindex"
                    v-bind:gtin="item.gtin"
                    v-bind:embalagem="item.embalagem"
                    v-bind:quantidade="item.quantidade"
                    ></products>
                </div>
            </div>
        </div>
    `
})

new Vue({
    el: '#composition-container'
})