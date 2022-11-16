<template>
    <div style="margin-left:12px;">
        <h1>Are you sure you want to delete this?</h1>
            Producttitle: {{ product.productTitle }} <br>
        <p> Productdescription: {{ product.productDescription}}  </p>
        <p> Productprice: {{ product.productPrice}}  </p>
        <p> Productquantity: {{ product.productQuantity}}  </p>
        <p> Productimage: {{ product.productImage}}  </p>
        <p> Productsize: {{ product.productSize}}  </p>
        <button id="delete" class="btn btn-outline-dark" @click="deleteProduct()">Delete product</button>   
        
        <router-link to="/Productsadmin">
        <button id="cancel" style="margin-left:10px;" class="btn btn-outline-dark">Cancel</button>
        </router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "DeleteProduct",
  props: {
    ProductId: Number
  },
  data() {
    return {
      product: [],
      error: null,
      id: this.$route.params.ProductId
    }
  },
  methods: {
      getProduct() {
        const id = this.$route.params.PId;
        fetch(`https://localhost:7092/api/Products/${id}`)
        .then(response => {
            if(response.ok){
                return response.json()
            } else{
              console.log(response)
                alert("Server returned " + response.status + " : " + response.statusText);
            }
        })
        .then(response => {
            this.product = response;
        })
        .catch(err => {
            this.error = err;
        });
      },
      deleteProduct() {
        const id = this.$route.params.PId;
        axios.delete(`https://localhost:7092/api/Products/${id}`)
        .finally(() => {
                    this.$router.push({ name: 'home' });
                 });

      }
},
      
created: function(){
    this.getProduct(this.id);
  }
}

</script>

<style>

</style>