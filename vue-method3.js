var vm = new Vue ({
    el: 'main',
    data: {
        nombres: ['Roberto', 'Ana','Pedro'],
        count: 0
    },
    methods: {
        siguiente: function(){
            this.count += 1;
            if(this.count == 3){ this.count=0; }
        }
    }
})