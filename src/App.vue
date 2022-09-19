<template>
  <div class="app">
    <router-link to="/" class="child">HOME</router-link><br>

    <router-link to="/services" class="child">

      <button class="button" @click="open =!open">SERVICES</button>
        <div class="menu" v-if="open">
          <a class="sub-menu" href="#Service1">SERVICES 1</a>
          <a class="sub-menu" href="#Service2">SERVICES 2</a>
          <a class="sub-menu" href="#Service3">SERVICES 3</a>
        </div>

    </router-link><br>


    <router-link to="/payment" class="child">PAYMENT</router-link><br>
  </div>
  <router-view></router-view>

</template>




<script>
export default {
  name: 'App',

  data(){
    return{
      open:false,
    }
  }


}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  background-color: khaki;
  display: flex;
  justify-content: center;
  padding: 25px;


}

.child {

  padding: 20px;
}

.dropdown {
  list-style: none;
}

.menu{
  width: 100%;
  display: flex;
  flex-direction: column;
}

.sub-menu {
  width: 100%;
  background-color: white;
}

 a{
  text-decoration: none;
  padding: 5px;
}

.button{
  width: 100%;
  padding: 5px;
  background-color: white;
  border: none;
}

</style>
