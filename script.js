const app = new Vue({
  el: "#app",
  data: {
    input: "",
    items: [],
  },
  methods: {
    addTodo: function () {
      this.items.push(this.input);
      this.input = "";
    },
  },
});
