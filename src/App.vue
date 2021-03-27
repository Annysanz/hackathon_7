<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/SingIn">SingIn</router-link> |
    <router-link to="/SingUp">SingUp</router-link>
  </div> -->
  <div class="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Inicio</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/"
              >Home <span class="sr-only"></span
            ></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/SingIn">Inicie Sesión</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/SingUp">Registrarse</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/TaskDetail">Registrar tarea</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/TaskCreate">Crear tarea</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/SessionUser">Sesión Usuario</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Contact">Contacto</router-link>
          </li>
        </ul>
      </div>
     
      </div>
    </nav>
  </div>
  <router-view />
</template>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar.bg-custom {
  background-color: #258565;
  margin-bottom: 30px;
  -webkit-box-shadow: 0px 10px 5px 5px rgba(156, 214, 202, 1);
  -moz-box-shadow: 0px 10px 5px 5px rgba(156, 214, 202, 1);
  box-shadow: 0px 10px 5px 5px rgba(156, 214, 202, 1);
  border-bottom: 7px solid rgb(8, 83, 71);
}

/* #nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
</style>
