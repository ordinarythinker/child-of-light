<template>
  <div class="d-flex flex-column">
    <p class="ma-0 pa-0 f-22">{{name}}</p>
    <div style="height: 5px;"></div>
    <a :href="'tel:'+phone">{{phone}}</a>
    <div style="height: 30px;"></div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: darkblue;
}
</style>
