<template>
  <div>
    <h1>This is the actual Vue</h1>
    <div v-for="card in packageList" :key="card.id">
      <resultCard :page="card"></resultCard>
    </div>
  </div>
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
h1 {
  border: 2px dashed purple;
}
</style>