<template>
  <div class="login">
    <h1 class="title">Registro</h1>
    <input
      class="form-input"
      v-model="firstname"
      required
      placeholder="Nombre"
    />
    
    <input
      class="form-input"
      v-model="lastname"
      required
      placeholder="Apellidos"
    />
    <input class="form-input" v-model="email" required placeholder="Email" />
    <input
      class="form-input"
      v-model="password"
      required
      placeholder="Password"
    />
    <div class="form-submit">
      <button @click="enviar" class="btnLogin">Guardar</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
export default {
  name: "SingUp",
  components: {},

  setup() {
    let firstname = ref("");
    let lastname = ref("");
    let email = ref("");
    let password = ref("");
    let usuarios = reactive([]);

    onMounted(() => {
      //  listar()
    });

    function listar() {
      fetch("http://localhost:8081/api/users/listar")
        .then((resp) => resp.json())
        .then((datos) => {
          usuarios.splice(0);
          datos.forEach((usuario) => {
            usuarios.push(usuario);
          });
        });
    }

    function enviar() {
      fetch("http://localhost:8081/api/users/guardar", {
        method: "POST",
        body: JSON.stringify({
          firstname: firstname.value,
          lastname: lastname.value,
          email: email.value,
          password: password.value,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((resp) => resp.json())
        .then((datos) => listar())
        .catch((error) => console.log(error))
        //alert("Usuario ya esta registrado");
      
    }

    return {
      firstname,
      lastname,
      email,
      password,
      enviar,
      usuarios,
    };
  },
};
</script>

<style >
.btnLogin {
width: 257px;
height: 49px;
left: 83px;
top: 301px;
color:white;
background: #95E4C8;
border: 1px solid #95E4C8;
box-sizing: border-box;
border-radius: 40px;
font-size: 1.5em;
}


.title {
  text-align: center;
  color: #95E4C8;
  margin-bottom: 50px;
}
.login {
  padding: 2rem;
  color: white;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: #31394D;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  margin: 1em;
}
.form-submit {
  top: 20px;
  border: none;
  border-radius: 10px;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
}
</style>