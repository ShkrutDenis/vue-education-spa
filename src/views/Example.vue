<template>
  <div>
    <div :title="'Jump to: ' + $router.getRoutes()[0].name"
         :class="{example: value < 5, clickable: clickable}"
         :style="{'font-size': '25px'}"
         @click="$router.push({ name: 'Home' })">{{ name }}</div>

    <card :title="'Title'" :value="value" :data="data" @calc="handler"></card>
    <div>Result: {{ result }}</div>
    <div>Amount: {{ amount }}; Step: {{ step }}</div>
    <div v-if="loaded">
      <div>POSTS</div>
      <template v-if="errors.length">
        <div v-for="(error, index) in errors" :key="index">
          {{ error }}
        </div>
      </template>
      <div v-for="post in posts" :key="post.id">
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
import axios from "axios";

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
      posts: [],
      loaded: false,
      errors: []
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
  mounted() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    axios.get(url).then((res) => {
      this.posts = res.data
    }).catch((err) => {
      this.errors.push(err)
    }).finally(() => {
      this.loaded = true
    })
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
