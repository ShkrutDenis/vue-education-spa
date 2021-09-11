<template>
  <div>
    <div>Title: {{ title }}</div>
    <div>Value: {{ value }}</div>
    <div>Data: {{ data }}</div>
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
};
</script>
