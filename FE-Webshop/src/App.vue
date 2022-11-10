<template>
  
 
  <Navbar/>
 
  
  
  
  
  <RouterView />

</template>

<script>
import Navbar from "./components/Navbar.vue";
import ProductsList from "./components/ProductsList.vue";
export default {
  name: 'App',
  components: {
    Navbar,
    ProductsList
  }
}

</script>
<style>



</style>
