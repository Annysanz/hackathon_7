<template>
  <div class="hello">
    <div class="container">
    <button class="enter" @click="$router.push('/SingIn')">Entra</button>
    <button class="create" @click="$router.push('/SingUp')">Crea tu cuenta</button>
    </div>
  </div>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.enter {
  width: 264px;
  height:69px;
  left: 72px;
  top: 308px;
  background: #95E4C8;
  border-radius: 40px;
  border: none; 
  color: white;
  margin-bottom: 1em
}
.create {
width: 271px; 
height: 69px; 
left: 72px; 
top: 416px; 
background: #FFFFFF; 
border: 1px solid #95E4C8; 
box-sizing: border-box; 
border-radius: 40px; 
color:#95E4C8;
}

.container {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
  margin: 6em ;

}

</style>
