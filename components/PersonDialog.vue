<template>
  <div class="d-flex flex-column dialog-style">
    <img class="image-style" :src="url"/>
    <p class="pa-0 ma-0 f-18">{{name}}</p>
  </div>
</template>

<script>
export default {
  name: "PersonDialog",
  props: {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.f-18 {
  font-size: 18px;
}

.dialog-style {
  padding: 20px;
  background-color: #FAE4CA;
  border-radius: 8px;
}
.image-style {
  width: 292px;
  height: 292px;
  padding-bottom: 20px;
}
</style>
