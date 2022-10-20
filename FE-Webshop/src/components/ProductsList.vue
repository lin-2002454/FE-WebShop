<template>
      <div class="ProductList">
    <h3>{{ ProductTitle }}</h3>
    <p>
      {{ ProductDescription }}
      <br/>
      {{ ProductPrice }} euro
      <br/>
      {{ ProductQuantity}}
      <br/>
      {{ ProductImage}}
      <br/>
      Size: {{ ProductSize}}
      
    </p>
  </div>
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
    
    </style>
    


