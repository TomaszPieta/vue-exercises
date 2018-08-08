<template>
    <div class="container">
  <h5>Vue Calculator using methods</h5>
  <form class="form-inline">
    <input v-model.number="a" @keyup.enter="calculate" class="form-control">
    <select v-model="operator" class="form-control">
      <option>+</option>
      <option>-</option>
      <option>*</option>
      <option>/</option>
    </select>
    <input v-model.number="b" @keyup.enter="calculate" class="form-control">
    <button type="submit" @click.prevent="calculate" class="btn btn-primary">Calculate</button>
  </form>
  <h5>Result: {{this.a}} {{this.operator}} {{this.b}} = {{this.c}}</h5>
</div>
<div class="container">
  <h5>Vue Calculator using computed methods</h5>
  <form class="form-inline">
    <input v-model.number="a" @keyup.enter="calculate" class="form-control">
    <select v-model="operator" class="form-control">
      <option>+</option>
      <option>-</option>
      <option>*</option>
      <option>/</option>
    </select>
    <input v-model.number="b" @keyup.enter="calculate" class="form-control">
    <button type="submit" @click.prevent="calculate" class="btn btn-primary">Calculate</button>
  </form>
  <h5>Result: {{this.a}} {{this.operator}} {{this.b}} = {{this.c}}</h5>
</div>
</template>

<script>
new Vue({
  el: '.container',
  data: {a:1, b:2, c: null, operator: '+'},
  computed: {
    c() {
      switch (this.operator) {
        case '+':
          this.c = this.a + this.b
          break;
        case '-':
          this.c = this.a - this.b
          break;
        case '*':
          this.c = this.a * this.b
          break;
        case '/':
          this.c = this.a / this.b
          break;
      }
    }
  },
  methods: {
    calculate() {
      switch (this.operator) {
        case '+':
          this.c = this.a + this.b
          break;
        case '-':
          this.c = this.a - this.b
          break;
        case '*':
          this.c = this.a * this.b
          break;
        case '/':
          this.c = this.a / this.b
          break;
      }
    }
  }
})
</script>

<style lang="scss">
body {
  background-color: yellow;
}
.form-control {
  width: 200px;
}
div {
  padding: 40px;  
  margin-top: 40px;
  text-align: center;
  border: 2px solid #666;
}
div:nth-child(1) {
  background-color: orange;
}
div:nth-child(2) {
  background-color: orangered;
}
</style>
