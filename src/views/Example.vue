<template>
  <div>
    <div class="example" @click="test">Example</div>
    <card :title="'Title'" :value="5" :data="{ a: 1, b: 2 }"></card>
  </div>
</template>

<script>
import Card from "../components/Card";

export default {
  name: "Example",
  components: { Card },
  methods: {
    test() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.example {
  color: red;
}
</style>
