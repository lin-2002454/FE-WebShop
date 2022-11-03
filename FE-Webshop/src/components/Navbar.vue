<template>
<header>
    
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      
    </nav>
    

    
  
</header>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style>
 header {
  line-height: 1.5;
  max-height: 100vh;
}




nav a.router-link-exact-active {
  color: palevioletred;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: black;
}
 

nav a:first-of-type {
  border: 0;
}



  nav {
    display: flex;
   
    margin-right: -13rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 2rem;
   font-family:Georgia, 'Times New Roman', Times, serif; 
  }
  .fashionfoto {
  
  }
   
   
</style>