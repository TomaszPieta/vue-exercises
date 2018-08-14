Vue.component('task', {
  template: '<li><slot></slot></li>'
});
Vue.component('modal', {
  template: `
    <div class="modal">
  <div class="modal-background"></div>
  <div class="modal-content">
    <div class="box">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, possimus cupiditate exercitationem eveniet consequuntur quis harum facere? Blanditiis odio error eligendi nam.</p>
  </div>
    </div>
  <button class="modal-close is-large" aria-label="close"></button>
</div>
  `
});
Vue.component('message', {
  props: ['title', 'body'],
  data() {
    return {
      isVisible: true
    }
  },
  template: `
  <article class="message">
    <div class="message-header">{{title}}
    <button type="button" @click="hideModal">X</button></div>
    <div class="message-body" v-show="isVisible">{{body}}</div>
  </article>
`,
  methods: {
    hideModal() {
      this.isVisible = !this.isVisible;
    }
  }
})
Vue.component('task-list', {
  template: `<div>
    <task v-for="task in tasks">{{task.task}}</task>
      </div>`,
  data() {
    return {
      tasks: [
      {task: "Go to bank", complete: false},
      {task: "Go to school", complete: true},
      {task: "Go home", complete: false},
      {task: "Go to sleep", complete: true}
    ]
    }
  }
});

let app = new Vue({
  el: "#root",  
  data: {
    newName: '',
    names: ['Joe', 'Alice', 'Jane', 'Jack'],
    isLoading: false,
    showModal: false,
    message: 'Hello World',
    tasks: [
      {description: "go there 1", completed: false},
      {description: "come here 1", completed: true},
      {description: "go there 2", completed: false},
      {description: "come here 2", completed: true},
      {description: "go there 3", completed: false},
      {description: "come here 4", completed: true},
      {description: "go there 5", completed: false},
      {description: "come here 6", completed: true}
    ]
  },
  title: 'new title',
  methods: {
    addName() {
      this.names.push(this.newName);
      this.newName = '';
    },
    toggleClass() {
      this.isLoading = !this.isLoading;
    }
  },
  computed: {
    reverse() {
      return this.message.split('').reverse().join('');
    },
    incomplete() {
      return this.tasks.filter( task => !task.completed );
    },
    complete() {
      return this.tasks.filter( task = task.completed );
    }
  },
  // components: {
  //   task
  // },
})
document.querySelector('#button').addEventListener('click', ()=>{
  let name = document.querySelector('#input');
  app.names.push(name.value);
  name.value = '';
})