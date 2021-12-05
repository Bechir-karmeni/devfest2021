<template>
  <header class="header-container">
      <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/state">State</router-link></li>
            <li><router-link to="/destination">Destination</router-link></li>
          <li><router-link to="/info">About</router-link></li>
      </ul>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import url('../styles/styles.css');

a{
    color: white;
}
li:hover{
    background-color: white;
}
li:hover > a{
    color: #7600a9;
} 
</style>