
    var app = new Vue({
        el: '#app',
        data: {
            shops:[],
            temShop:{},
            Shoplength:'',
            filtershop:{}
        },
        methods: {
          
        getShops: function () {
            const vm = this;
    
            const api = 'https://vast-wave-45006.herokuapp.com/api/getShops';
            axios.get(api).then(response => {
                console.log(response.data.list);
                vm.shops = response.data.list;
               
                vm.Shoplength = vm.shops.length;
                console.log(vm.Shoplength)
                return vm.shops;
    
            });
        },
        getOneShop:function(){
            const vm = this;
            // console.log(vm.shops.length)
            let digital= Math.floor(Math.random() * vm.Shoplength);
            
            vm.filtershop = vm.shops[digital]
            console.log(digital )
            console.log(vm.filtershop )
            
        },
          
          openModal(){
            $('#drinkModal').modal('show');
            const vm = this; 
            vm.temShop={};            
            
        },
         
          
          
        addShop(){
            const vm = this;
            let api ='https://vast-wave-45006.herokuapp.com/api/addShops';  
                 

            axios.post(api,vm.temShop).then((response) => {
                 console.log(response.data);
                 if(response.data.success){
                     $('#drinkModal').modal('hide');                     
                     console.log('新增成功');
                     vm.getShops();
                 }else{
                     $('#drinkModal').modal('hide');                     
                     vm.getShops();
                     console.log('新增失敗');
                 }
                
            })
        },
  
          
        },


        
        
        created() {
          
  
        this.getShops();
    
         
        },
  
      });
  