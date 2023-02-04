<template>
  <div>
   <v-row>
    <v-col
    v-for="(item,index) in info"
    :key="index"
     cols="12" md="4">
      <v-card color="white"
      class="px-3 rounded-lg">
         <v-card-text>
      <v-row align="center" justify="space-between">
        <v-col cols="3">
          <img
            src="~/static/nurse.png"
            class="rounded-lg "
            width="60px"
            height="60px"
          />
        </v-col>
        <v-col cols="9">
         <div class="d-flex justify-space-between">
          <div class="d-flex flex-column">
            <h3 class="mb-2">
               {{item.name}}
            </h3>
            <div class="d-flex flex-row align-cente  justify-center">
            <v-icon small class="me-1">
            mdi-map-marker-outline
            </v-icon>
            <span>{{item.city}}</span>
            </div>
          </div>
          <div>
            <span class="px-2 py-1 rounded white--text"
            :class="[item.status=='انجام شده'|| item.status=='تکمیل شده'? 'light-green accent-4' :'blue-grey darken-1']">
              {{item.status}}
            </span>
          </div>
         </div>

        </v-col>
      </v-row>
        </v-card-text>

        <v-list class="transparent">
      <v-list-item class="small-f">
        <div class="row">
        <v-icon class="me-2">mdi-calendar-text</v-icon>
        <div class="font-weight-bold blue-grey--text me-2">
          تاریخ اخذ شیفت:
        </div>
        <span>
          {{item.get_shift_date}}
        </span>

        </div>
      </v-list-item>
      <v-list-item  class="small-f">
        <div class="row">
        <v-icon class="me-2">mdi-calendar-text</v-icon>
        <div class="font-weight-bold blue-grey--text me-2">
         تاریخ شیفت:
        </div>
        <span>
         {{item.shift_date}}
        </span>

        </div>
      </v-list-item>

       <v-list-item class="small-f">
        <div class="row">
        <v-icon class="me-2">mdi-clock</v-icon>
        <div class="font-weight-bold blue-grey--text me-2 ">
          ساعت شیفت:
        </div>
        <span>
          {{item.shift_hour}}
        </span>

        </div>
      </v-list-item>
    </v-list>

      </v-card>
    </v-col>
   </v-row>
  </div>
</template>

<script>
import { mapGetters} from "vuex";
export default {
  name: 'account',
  data () {
    return {
     info:[],

    }
  },
  computed:{
     ...mapGetters(["showInformation"]),
  },
  methods:{
    getInfo(){
     this.info=this.showInformation
       console.log("smmms",this.info)
    }
  },
 mounted(){
this.getInfo()
  },
}
</script>

<style>

</style>
