<template>
  <div class="row justify-content-around" v-if="packageList">
    <div class="col-12 col-md-6 col-lg-4 p-3" v-for="page in packageList" :key="page.id" >
        <resultCard :page="page"></resultCard>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import axios from 'axios'
import resultCard from '../resultCard/result-card.vue'


export default  {
    id: "ResultPage",
    components: {
      resultCard
    },
    data() {
      return {
        packageList: null
      }
    },
    mounted() {
      console.log('mounted')
      axios.post('/api/packages/list').then((response) => {
        console.log(response)
        this.packageList = response.data.packages
      }, (error) => {
        console.log(error)
      })
    }
}
</script>

<style>

</style>