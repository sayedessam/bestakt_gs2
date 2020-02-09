<template>
  <span class="lgo">
    <strong class="bt_name">BesTakt</strong>
    <Logo />

  </span>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo,
  }
}
</script>

<style scoped>
  .lgo {
    position: fixed;
    height: 50px;
    top: 60px;
    left: 10px;
    width: 180px;
    border-radius: 15px 50px;
    background-color:  #9b27af ;
    color: white;
    z-index: 899;
  }

  #logo {
    fill: white;
    width: 50px;
    height: 50px;
    
  }

  .bt_name {
    font-size: 25px;
    margin: 0 8px;
    margin-right: 20px;
    line-height: 45px;
    vertical-align: top;
    
    
  }
</style>>
  
</style>