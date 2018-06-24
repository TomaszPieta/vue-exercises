<template>
  <div id="app">
  <h1>Famous people</h1>
  <div class="sort">
    <label>Find</label>
    <input v-model="findName"type="text" />
  </div>
  <ul>
    <li v-for="name in filteredNames">
      <span>{{name}}</span>
    </li>
  </ul>
</div>
</template>

<script>
new Vue({
  el: '#app',
  data() {
    return {
      findName: '',
      names: [
        'Evan You',
        'John Lindquist',
        'Jen Looper',
        'Miriam Suzanne',
        'Chris Coyier',
        'Geoff Graham',
        'Divya Sasidharan',
        'Lea Verou',
        'Rachel Andrew',
        'Vitaly Friedman',
        'Ryan Florence',
        'Dan Abramov',
        'Jen Simmons',
        'Robin Rendle',
        'Nicole Sullivan'
      ]
    }
  },
  computed: {
    filteredNames() {
      let filter = new RegExp(this.findName, 'i')
      return this.names.filter(
      el => el.match(filter))
    }
  }
})
</script>

<style>
  * {
  box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  display: flex;
  justify-content: center;
  background-color: yellow;
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  animation: 2s ease;
}
#app {
  border-radius: 5vw;
  width: 20rem;
  background-color: orange;
  padding: 20px;
  margin: 20px;
  text-align: center;
  border: 2px solid black;
  box-shadow: 10px 10px yellow;
  transform: translate(0px, 0px);
  transition: background-color 2s, box-shadow 2s, transform 2s;
}
#app:hover{
  background-color: yellowgreen;
  box-shadow: 10px 10px grey;
  transform: translate(-10px, -10px);
  transition: background-color 2s, box-shadow 2s, transform 2s;
}
li {
  list-style: none;
  margin-left: -30px;
}
span {
  transition: background-color 1s, color 1s;
}
span:hover {
  background-color: black;
  color: white;
  transition: background-color 1s, color 1s;
  cursor: pointer;
}
</style>
