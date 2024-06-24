<template>
  <div class="member-card d-flex flex-column pa-20">
    <img :src="url" class="rounded-image"/>
    <div style="height: 30px;"></div>
    <p class="pa-0 ma-0 f-22">{{name}}</p>
    <div style="height: 10px;"></div>
    <p class="pa-0 ma-0" style="max-width: 250px;">{{title}}</p>
    <div style="height: 40px;"></div>
  </div>
</template>

<script>
export default {
  name: "TeamMember",
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
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
.member-card {
  min-width: 300px;
  max-width: 450px;
}

.rounded-image {
  width: 250px;
  height: 250px;
  border-radius: 15px;
  object-fit: cover;
}
</style>
