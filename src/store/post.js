import axios from "axios";

const state = {
  url: 'https://jsonplaceholder.typicode.com/posts',
  posts: [],
  errors: [],
  loaded: false
}

const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  },
  setErrors(state, errors) {
    state.errors = errors
  },
  setLoaded(state, loaded) {
    state.loaded = loaded
  }
}

const actions = {
  fetchPosts(context) {
    context.commit('setLoaded', false)
    axios.get(context.getters.getPostURL).then((res) => {
      context.commit('setPosts', res.data)
    }).catch((err) => {
      context.commit('setErrors', [err])
    }).finally(() => {
      context.commit('setLoaded', true)
    })
  }
}

const getters = {
  getPostURL: (state) => {
    return state.url
  },
  getPosts: (state) => {
    return state.posts
  },
  getPostById: (state) => (id) => {
    return state.posts.find(p => {
      return p.id = id
    })
  },
  postsLoaded: (state) => {
    return state.loaded
  },
  getPostsErrors: (state) => {
    return state.errors
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
