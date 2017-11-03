loadingVue = new Vue({
    el: '#loading',
    data: {
        loadingStatus: true
    },
    methods : {
        setLoading: function (value){
            this.loadingStatus = value;
        }
    }
});

refreshProducts();