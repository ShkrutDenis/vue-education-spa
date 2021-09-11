<template>
  <div>
    <div :title="'Jump to: ' + $router.getRoutes()[0].name"
         class="example" @click="$router.push({ name: 'Home' })">{{ 'Example' }}</div>

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
</style>
