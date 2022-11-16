<!--<template>
  <div class="ProductList">
<h3>{{ ProductTitle }}</h3>
<p>
  {{ ProductDescription }}
  <br/>
  {{ ProductPrice }} euro
  <br/>
  Quantity:{{ ProductQuantity}}
  <br/>
  {{ ProductImage}}
  <br/>
  Size: {{ ProductSize}}
  
</p>
</div>
</template> -->
<template>
        <a class="card mb-4 text-decoration-none text-black styled-card" :href="'/products/' + ProductId">
          <button class="btn btn-warning " type="submit" href="'/products/' + ProductId">more info>></button>
          
          <div class="card-body">
            <h5 class="card-title">{{ProductTitle}}</h5>
            <div class="card-text">
              <p class="text-truncate">{{ProductDescription}}</p>
              <P class="text-truncate">Quantity:{{ProductQuantity}} </P>
              <P class="text-truncate">{{ProductImage}} </P>
              <P class="text-truncate"> Size: {{ProductSize}} </P>
              <p class="fw-bold">{{ProductPrice }},-</p>
             <!-- <button class="btn btn-warning " type="submit" href="`/productDetails/${ProductId}">more info>></button> -->
            </div>
          </div>
        </a>
</template>

<script>



export default {
  name: 'ProductListComponent',
  props: {
    ProductTitle: String,
    ProductDescription: String,
    ProductPrice: Number,
    ProductQuantity: Number,
    ProductImage: String,
    ProductSize: String,
    ProductId: Number
    
  }    
}
</script>


<style scoped>
.styled-card {
  background-color: transparent;
  border-style: double;
  border-color: red;
}
</style>



