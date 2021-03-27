<template>
  
  <div class="login" v-if="!user.email">
    <h1 class="title">Inicia Sesión</h1>
    <input class="form-input" v-model="email" placeholder="email" />
    <input class="form-input" v-model="password" placeholder="password" />
    <div class="form-submit">
      <button  @click="login" class="btnLogin">Login</button>
    </div>
  </div>
</template>

<script>
import { ref,  computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Login",
  props: {},
  setup() {
    const store = useStore();
    let email = ref("");
    let password = ref("");
    let user = computed(() => {
      return store.getters.getUser;
    });

    function login() {
      fetch("http://localhost:8081/api/users/login", {
        method: "POST",
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
        headers: { "Content-Type": "Application/json" },
      })
        .then((resp) => resp.json())
        .then((user) => {
          if (user) store.commit("setUser", user);
          else alert("Usuario o password incorrectos");
        });
    }

    function logout() {
      store.commit("setUser", {});
    }

    return {
      email,
      password,
      login,
      logout,
      user,
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
border-radius: 40px;}

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
