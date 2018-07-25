<template>
    <div class="searchWrapper">
    <label for="search">Search</label>
    <input 
      id="search" 
      name="search" 
      v-model="searchValue" 
      @input="handleInput" />
    <!-- <ul>
        <li v-for="item in results" :key="item.data[0].nasa_id">
            <p>{{ item.data[0].description }}</p>
        </li>
    </ul>    -->
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>  
    .searchWrapper {
  display: flex;
  flex-direction: column;
  width: 200px;
     
  label {
    font-family: Montserrat, sans-serif;
    text-align: center;
  }
}
input {
  height: 30px;
  border: 0;
  border-bottom: 1px solid white;
  text-align: center;
  font-size: 1.1rem; 
}
</style>
