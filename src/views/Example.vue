<template>
  <div>
    <div :title="'Jump to: ' + $router.getRoutes()[0].name"
         :class="{example: true, clickable: true}"
         :style="{'font-size': '25px'}"
         @click="$router.push({ name: 'Home' })">{{ 'Example' }}</div>

    <card :title="'Title'" :value="5" :data="{ a: 1, b: 2 }"></card>
  </div>
</template>

<script>
import Card from "../components/Card";

export default {
  name: "Example",
  components: { Card },
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
