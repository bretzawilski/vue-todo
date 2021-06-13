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
    removeTodo: function (e) {
      let target = e.currentTarget.id.split("-")[1];
      this.items.splice(target, 1);
    },
  },
});
