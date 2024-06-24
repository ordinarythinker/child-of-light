<template>
  <v-app dark>
    <v-main>
      <v-container fluid class="ma-0 pa-0">
        <div id="error-container" class="d-flex flex-column align-center justify-center ma-0 pa-0">
          <h1 v-if="error.statusCode === 404">
            {{ pageNotFound }}
          </h1>
          <h1 v-else>
            {{ otherError }}
          </h1>
          <NuxtLink to="/" style="text-decoration: none; color: white;">
            Home page
          </NuxtLink>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: "Сторінку не знайдено",
      otherError: 'Ой, виникла несподівана помилка 😢'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
#error-container {
  width: 100vw;
  height: 100vh;
  color: white;
  background-color: #252525;
}

h1 {
  font-size: 20px;
}
</style>
