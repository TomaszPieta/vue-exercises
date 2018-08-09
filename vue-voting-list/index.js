new Vue({
  el: '.container',
  data: {
      candidates: [
          {name: "Mr. Black", votes: 0, id: 1},
          {name: "Mr. White", votes: 0, id: 2},
          {name: "Mr. Pink", votes: 0, id: 3},
          {name: "Mr. Brown", votes: 0, id: 4},
      ]
  },
  computed: {
      mayor: function () {
          let sorted = this.candidates.sort( (a, b) => b.votes - a.votes);
          return sorted[0];
      }
  },
  methods: {
      start() {
        this.candidates[0].votes = 20;
        this.candidates[1].votes = 21;
        this.candidates[2].votes = 22;
        this.candidates[3].votes = 23;
      },
      clear() {
          this.candidates = this.candidates.map(candidate =>{
              candidate.votes = 0;
              return candidate;
          })
      }
  }
})