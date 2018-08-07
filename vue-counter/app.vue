<template>
    <div class="container">
        <button v-on:click="count++" class="plus">Plus</button>
          <span class="counter">{{count}}</span>
        <button v-on:click="count--" class="minus">Minus</button>
    </div>
</template>

<script>
new Vue({
    el: '.container',
    data: { count: 0 }
    })
// export default {
    
// }
</script>

<style lang="scss">
body {
  background-color: #0059ff;
  margin: 40vh 25vw;
}
body, button {
  font-size: 2rem;
  font-family: sans-serif;
  text-align: center;
}
.container {
  width: 22rem;
}
%space {
  background-color: yellow;
  border: 2px solid #000;
  padding: 0rem 1rem;
  outline: none;
  height: 4rem;
}
.counter {
  @extend %space;
  border-radius: 100%;
  display: inline-block;
  line-height: 4rem;  
  width: 4rem;
}
button {
  @extend %space;
  border-radius: .5rem;
}
</style>
