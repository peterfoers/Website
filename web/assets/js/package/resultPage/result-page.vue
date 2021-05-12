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
        packageList: []
      }
    },
    created() {
      axios.get('/api/packages/list').then((response) => {
        response.data.packages.forEach(({ id, display_name, repo, description, downloads, avg_rating, developers }) => { 
          var repoType = repo.repo_type
          var devs = []
          developers.forEach(({ id, name }) => {
              devs.push({ id, name }) 
          })
          this.packageList.push({ id, display_name, repoType, description, downloads, avg_rating, devs})
        })
      }, (error) => {
        console.log(error)
      })
    }
}
</script>

<style>

</style>