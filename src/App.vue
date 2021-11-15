    <!-- sahifa qayta yuklanishdagi loader stylei ekran blur effect bo'lib ochilsin  -->
<template>
  <div id="app" >
    
    <router-view />
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
  min-height: 100vh;
  overflow-x: hidden;
  transition: .5s;
   &.bgWarning{
    background-color: #f43648;
  }
}
:root {
  --blue: steelblue;
  --white: #fff;
  --gray: #f5f5f5;
  --black1: #222;
  --black2: #999;
}
a {
  text-decoration: none;
}

#app {
  position: relative;
  width: 100%;
}
.container {
  max-width: 95%;
  margin: 0 auto;
}


</style>
