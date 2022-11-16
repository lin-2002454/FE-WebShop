
  
  <template >
   
    
    <div class="container-fluid">
    <p>
        <a asp-action="Create" class="btn btn-outline-dark" href="/Addproduct"  style="margin-top: 20px;;">Create new product</a>
    </p>
     
      <div class="row mt-4">
        
        <div class="col-sm-4" v-for="product in products" v-bind:key="product.productId">
            
        <ProductList
          :ProductTitle="product.productTitle"
          :ProductDescription="product.productDescription"
          :ProductPrice="product.productPrice"
          :ProductQuantity="product.productQuantity"
          :ProductImage="product.productImage"
          :ProductSize="product.productSize"
          :ProductId="product.productId"
          
          
        />
        
      </div>
    
      </div>
    </div>
    
  
  </template>
  
  <script>
  import ProductList from '../components/ProductsList.vue'
  
  
  
  export default {
    name: 'Home',
    components: {
      ProductList
      
  },
    data() {
      return {
        products: [],
        error: null
      }
    },
    mounted() {
      this.getProducts()
    },
    methods: {
      
      getProducts() {
          fetch("https://localhost:7092/api/Products")
          .then(response => {
              if(response.ok){
                  return response.json()
              } else{
                console.log(response)
                  alert("Server returned " + response.status + " : " + response.statusText);
              }
          })
          .then(response => {
            console.log(response)
              this.products = response;
          })
          .catch(err => {
              this.error = err;
          });
        },
    },
    created: function(){
      this.getProducts();
    }
  }
  </script>
  
  <style scoped>
  
  
  
  
  
  
  </style>
  
  