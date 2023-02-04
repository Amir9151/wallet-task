<template>
  <v-app class="theme">
   <div>
    <v-toolbar  elevation="2" color="cyan lighten-1" dark>
       <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title class="d-flex flex-column rounded  white--text">
        <v-icon class="rotate">
          mdi-pill
        </v-icon>
        <router-link to="/" class="text-decoration-none white--text">
         کپسول
        </router-link>

        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-badge
        left

        color="red"
        offset-x="19"
        offset-y="19"
        overlap
        content=18
        >
        <v-icon large class="me-2">
        mdi-bell-outline
        </v-icon>

        </v-badge>

    </v-toolbar>
  </div>
  <nuxt class="ap"></nuxt>
  </v-app>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {

    }
  },

}
</script>
<style scoped>
.rotate{
  transform: rotate(80deg)!important;
}

</style>
