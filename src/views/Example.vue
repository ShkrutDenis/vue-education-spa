<template>
  <div>
    <div :title="'Jump to: ' + $router.getRoutes()[0].name"
         :class="{example: Value < 5, clickable: Clickable}"
         :style="{'font-size': '25px'}"
         @click="$router.push({ name: 'Home' })">{{ Name }}</div>

    <card :title="'Title'" :value="Value" :data="Data" @calc="handler"></card>
  </div>
</template>

<script>
import Card from "../components/Card";

export default {
  name: "Example",
  components: { Card },
  data() {
    return {
      Name: "Example",
      Data: { a: 1, b: 2 },
      Clickable: false,
      Value: 0
    }
  },
  methods: {
    handler(value) {
      this.Value = value
    }
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
