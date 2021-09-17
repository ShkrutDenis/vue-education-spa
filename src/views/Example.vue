<template>
  <div>
    <div :title="'Jump to: ' + $router.getRoutes()[0].name"
         :class="{example: value < 5, clickable: clickable}"
         :style="{'font-size': '25px'}"
         @click="$router.push({ name: 'Home' })">{{ name }}</div>

    <card :title="'Title'" :value="value" :data="data" @calc="handler"></card>
    <div>Result: {{ result }}</div>
    <div>Amount: {{ amount }}; Step: {{ step }}</div>
    <div v-if="postsLoaded">
      <div>POSTS</div><div @click="fetchPosts">Reload</div>
      <template v-if="getPostsErrors.length">
        <div v-for="(error, index) in getPostsErrors" :key="index">
          {{ error }}
        </div>
      </template>
      <div v-for="post in getPosts" :key="post.id">
        <div>Title: {{ post.title }}</div>
        <div>ID: {{ post.id }}. User: {{ post.userId }}</div>
        <div>Body: {{ post.body }}</div>
      </div>
    </div>
    <div v-else>Loading....</div>
  </div>
</template>

<script>
import Card from "../components/Card";
import { mapGetters, mapActions } from "vuex"

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
    },
    ...mapGetters('posts', ['getPosts', 'postsLoaded', 'getPostsErrors']),
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
    },
    ...mapActions('posts', ['fetchPosts']),
  },
  mounted() {
    this.fetchPosts()
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
