<template>
  <div>
    <div :title="'Jump to: ' + $router.getRoutes()[0].name"
         :class="{example: value < 5, clickable: clickable}"
         :style="{'font-size': '25px'}"
         @click="$router.push({ name: 'Home' })">{{ name }}</div>

    <card :title="'Title'" :value="value" :data="data" @calc="handler"></card>
    <div>Result: {{ result }}</div>
    <div>Amount: {{ amount }}; Step: {{ step }}</div>
    <div ref="test"></div>
  </div>
</template>

<script>
import Card from "../components/Card";

export default {
  name: "Example",
  components: { Card },
  data() {
    return {
      name: "Example",
      data: { a: 1, b: 2 },
      clickable: false,
      value: 0,
      amount: 0,
      step: 0,
    }
  },
  computed: {
    result() {
      return {a: this.data.a + this.value,
        b: this.data.b + this.value}
    }
  },
  watch: {
    value(val) {
      this.amount += val
    },
    amount(newVal, oldVal) {
      this.step = newVal - oldVal
    }
  },
  methods: {
    handler(value) {
      this.value = value
    }
  },
  created() {
    this.$refs.test.innerText = "TEST"
  },
  mounted() {
    this.$refs.test.innerText = "TEST2"
  }
};
</script>

<style scoped>
.example {
  color: red;
}
.clickable {
  cursor: pointer;
}
</style>
