
<template>
  <nav class="navbar navbar-expand-lg bg-danger">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Leen Webshop</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Parfums</a></li>
            <li><a class="dropdown-item" href="#">Beauty</a></li>
            <li><a class="dropdown-item" href="#">Accessories</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/productscrud">Products</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-warning" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>



<style>
.dropdown-menu{
 background-color:azure;
}
</style>






<!--<template>
<div class="header">
    
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>.
      <RouterLink to="/login">Login</RouterLink>
      
    </nav>
   
    
    
</div>
    
  

</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style>
 .header {
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

   
   
</style> -->