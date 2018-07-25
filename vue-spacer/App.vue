<template>
  <div class="wrapper search">
    <Claim />
    <SearchInput />
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
import Claim from '@/components/Claim';
import SearchInput from '@/components/SearchInput';
const API = `https://images-api.nasa.gov`;

export default {
  name: 'App',
  components: {
    Claim,
    SearchInput,
  },
  data() {
      return {
          searchValue: '',
          results: [],
    }
  },
  methods: {
      // eslint-disable-next-line
      handleInput: debounce( function() {          
        axios.get(`${API}/search?q=${this.searchValue}&media_type=image`)
            .then( response => {
                this.results = response.data.collection.items;
            } )
            .catch( error => console.log(error) )      
      }, 500 ),
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 30px;
  width: 100%; 
  background-image: url('./assets/bg.jpg');
}
.wrapper::after {
  content: '';
  background: rgba(0,0,0,0.4);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  
}
.search {
  display: flex;
  flex-direction: column;
  width: 500px;
     
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
input:focus {
  outline: none;
}
</style>
