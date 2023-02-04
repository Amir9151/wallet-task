<template>
    <div class=" rounded-lg pa-7">
      <v-row>
        <v-col
          cols="12"
        >
          <v-text-field
            placeholder="جستجو"
            filled
            rounded
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <router-link to="/wallet" class="text-decoration-none">
        <h2 class="primary--text text-center mb-5">
        کیف پول
        </h2>
      </router-link>
      <account/>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
