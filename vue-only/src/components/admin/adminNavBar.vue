<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Brand Name</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>

<div class="sidebar">
  <ul>
    <li><a href="#">Feature 1</a></li>
    <li><a href="#">Feature 2</a></li>
    <li><a href="#">Feature 3</a></li>
  </ul>
</div>
        
    </div>
</template>
<script>
</script>
<style scoped>
.sidebar {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
  padding-top: 60px;
}
  
.sidebar ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar li {
  padding: 10px 20px;
}

.sidebar a {
  display: block;
  color: #000;
}

.sidebar a:hover {
  color: #fff;
  background-color: #000;
}

@media (max-width: 767px) {
  .sidebar {
    display: none;
  }
}
</style>