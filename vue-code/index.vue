let app = new Vue({
  el: '#root',
  data: {
    message: 'Hello',
    text: 'Later',
    newName: '',
    names: ['adam', 'anna', 'wojtek'],
    title: 'Different',
    className: 'color-red',
    isLoading: false,
    tasks: [
      {description: 'buy milk', completed: true},
      {description: 'buy water', completed: true},
      {description: 'buy salmon', completed: false},
      {description: 'buy chicken', completed: false},
      {description: 'buy tomato', completed: true},
    ]
  },
  methods: {
    addName() {
      this.names.push(this.newName);
      this.newName = '';
    },
    toggleClass() {
      this.isLoading = true;
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    },
    incompleteTasks() {
      return this.tasks.filter( task => !task.completed )
    }
  }
//   mounted() {
//   document.querySelector('#button1').addEventListener('click', ()=>{
//   let name1 = document.querySelector('#input1')
//   app.names.push(name1.value);
//   name1.value = '';
// })
//   }
})
