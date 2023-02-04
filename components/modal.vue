<template>
  <div
   @click.self="$emit('close')">
    <v-row
      justify="center"

    >
      <v-dialog
        :value="openModal"
        max-width="500px"
        @click:outside="$emit('close')"
        light
      >
     <div class="white  pa-4">
        <div class="d-flex flex-row justify-space-between mb-4 ">
        <h4>افزایش اعتبار</h4>
        <button
        @click="$emit('close')"
        class="px-2 border-btn rounded-xl">
          x
        </button>
      </div>
      <v-divider>
      </v-divider>
         <v-text-field
            placeholder="مبلغ درخواستی خود را وارد کنید"
            filled
            rounded
            dense
            class="mt-8 mb-1"
          ></v-text-field>
          <v-divider></v-divider>
          <v-btn  block class="mt-3 cyan lighten-1 white--text rounded-lg">
                افزایش
          </v-btn>
     </div>

      </v-dialog>

    </v-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    props:["openModal"]
  }
</script>
