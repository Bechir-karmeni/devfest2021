<template>
  <div v-show="toggle" class="popup">
      <span>X</span>
                    <div class="search-container">
                        <input type="text" placeholder="Enter you car name">
                        <i class="fas fa-search"></i>
                    </div>
        <div class="btn" @click="openSearch">
                      <router-link to="" click="openSearch">Continue</router-link>
                  </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
props: ['toggle'],
setup(props) {
    console.log('here',props.toggle)
    const toggle = ref(false)
    toggle.value = props.toggle
    return{
        toggle
    }
}
}
</script>

<style scoped>
/* .popup{
    position: relative;
    border-radius: 10px;
    background-color: aqua;
} */
</style>