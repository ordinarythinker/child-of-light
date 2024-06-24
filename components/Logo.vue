<template>
  <div class="logo-container">
    <div class="me-2 f-22">Дитя Світла</div>

    <img class="logo" alt="Logo" src="/child_of_light.svg"/>
  </div>
</template>

<script>
export default {
  name: "Logo"
}
</script>

<style scoped>
.logo-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
}

.logo {
  height: 32px;
  width: 32px;
}
</style>

