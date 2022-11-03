<template >
  
  <div class="foto">
    <img alt="foto" src="@/assets/FashionFoto1.jpg" width="1000"  />
    </div>
  <div class="HomePage">
    
    <div class="Productlist" v-for="product in products" v-bind:key="product.productId">
      
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
.HomePage{
  margin-top: 0px;
  
}
.Productlist{
  margin-top: 10rem;
}
.foto {
  margin-top: 10rem;
 margin-right: 10rem;
}



</style>

