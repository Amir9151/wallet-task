<template>
  <div class="pa-12">
    <v-row>
    <v-col
     cols="12" md="4"
     class="white rounded-xl pa-8">
     <div class="d-flex justify-lg-space-between justify-space-around text-center small-f">
      <div class="d-flex flex-column  justify-center me-4 me-md-0">
        <span class="small-f" >موجودی کیف پول</span>
         <h4 class="mt-2">{{this.walletInfo[0].wallet}} <span>تومان</span></h4>
      </div>
      <v-divider
      vertical
      ></v-divider>
      <div class="d-flex flex-column  justify-center ms-4 ms-md-0">
        <span class="small-f">موجودی بلوکه شده</span>
         <h4 class="mt-2">{{this.walletInfo[0].block}} <span>تومان</span></h4>
      </div>
     </div>

     <div class="d-flex justify-center mt-8 text-center small-f ">
      <div class="d-flex flex-column  mx-6 ">
          <v-icon x-large color="primary" >
         mdi-plus-box
          </v-icon>
          <div>
            افزایش موجودی
          </div>
      </div>
      <div class="d-flex flex-column  mx-6 ">
      <v-icon x-large color="primary">
     mdi-cash-multiple
      </v-icon>
      <div >
      درخواست استرداد
      </div>
      </div>

     </div>
    </v-col>
   </v-row>


     <v-row>
    <v-col
    class="px-4  white mt-3 rounded-lg"
     cols="12" md="4">
     <div class="d-flex flex-row justify-space-between small-f">
      <div class="px-2 pb-1 blue lighten-5 rounded-lg ">
        <v-icon large color="primary">
        mdi-cash-multiple
        </v-icon>
      </div>
      <div class="d-flex flex-column ">
        <div >
          وضعیت درخواست استرداد
        </div>
        <div
        @click="open"
         class="primary--text curser pt-3 pb-1">
          برای پیگیری درخواست استرداد کلیک نمایید
        </div>
      </div>
      <div class="mt-1 ">
        <span class="py-1 px-2  rounded border-tag">لغو شده</span>
      </div>

     </div>
    </v-col>
   </v-row>
   <modal
   :openModal="openModal"
   @close="close"
   />
  </div>
</template>

<script>
import { mapGetters} from "vuex";
export default {
  data () {
    return {
     openModal:false,
    }
  },
    computed:{
     ...mapGetters(["walletInfo"]),
  },
  methods:{
    open(){
      this.openModal=true
    },
    close(){
       this.openModal=false
    }
  },

}
</script>

<style>

</style>
