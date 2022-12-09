<template>
    
      <div class="card-body" style=" margin-top: 40px; margin-left:20px" >
        <h5 class="card-title"> Producttitle: {{product.productTitle}}</h5>
        <div class="card-text">
          <p class="text-truncate"> Productdescription: {{product.productDescription}}</p>
          <P class="text-truncate"> Productquantity: {{product.productQuantity}} </P>
          <P class="text-truncate"> Productimage: {{product.productImage}} </P>
          <P class="text-truncate"> Productsize: {{product.productSize}} </P>
          <p class="fw-bold"> Productprice: {{product.productPrice }},-</p>
         <!-- <button class="btn btn-warning " type="submit" href="`/productDetails/${ProductId}">more info>></button> -->
         
         <button class="btn btn-outline-dark">
            <a class="nav-link active" aria-current="page" href="/">Back to homepage</a>
         </button>
        </div>
      </div>
 
    
</template>

<script>




export default {
  name: 'ProductDetails',
  data() {
    return {
      product: [],
      error: null,
      id: this.$route.params.ProductId
    }
  },
  mounted() {
    this.getProduct()
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
          console.log(response)
            this.product = response;
        })
        .catch(err => {
            this.error = err;
        });
      },
  },
  created: function(){
    this.getProduct(this.id);
  }
}
</script>