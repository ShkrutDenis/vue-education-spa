<template>
  <div class="example" @click="test">Example</div>
</template>

<script>
export default {
  name: "Example",
  methods: {
    test() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped>
.example {
  color: red;
}
</style>
