const app = Vue.createApp({});

app.component("dice", {
  data() {
    return { rollDice: Math.round(Math.random() * 5) };
  },
  methods: {
    onClick() {
      this.rollDice = Math.round(Math.random() * 5);
    },
  },
  template: `<input @click="onClick" type="button" :value="rollDice + 1">`,
});

app.mount("#app");
