<template>
  <div class="container">
    <div>Title: {{ title }}</div>
    <div>Value: {{ value }}</div>
    <div>Data: {{ data }}</div>
    <div class="button" @click="increment">Increase `Value`</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      default: 0,
      validator: (val) => {
        return val >= 0;
      },
    },
    data: {
      type: Object,
    },
  },
  methods: {
    increment() {
      this.$emit('calc', this.value + 1)
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border: 1px solid green;
  padding: 3px;
  margin: 5px;
  cursor: pointer;
}
</style>
