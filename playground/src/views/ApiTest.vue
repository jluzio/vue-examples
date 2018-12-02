<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{serviceMessage}}</div>
    <div>{{serviceResponse}}</div>
  </div>
</template>

<script>
import Vue from 'vue'
import apiTestService from '@/services/api-test-service'

const log = Vue.prototype.$log.debug

export default {
  name: 'ApiTest',
  props: {
    msg: String
  },
  data() {
    return {
      serviceResponse: null,
      serviceMessage: null
    }
  },
  mounted: function() {
    this.downloadData()
  },
  methods: {
    downloadData() {
      // let url = 'https://jsonplaceholder.typicode.com/posts';
      // let url = 'http://localhost:9080/DutyTravelWAR/api/debug/cors/appInfo';
      let url = 'http://localhost:9080/DutyTravelWAR/api/private/debug/appInfo'
      let vm = this

      vm.serviceMessage = 'Retrieving data'
      log(`sending token: ${this.$store.getters.getToken}`)

      apiTestService.getPrivateResource()
        .then(response => {
          vm.serviceResponse = response.data
          vm.serviceMessage = 'Sucess'
        })
        .catch(error => {
          vm.serviceResponse = null
          vm.serviceMessage = 'Error: ' + error
        })
    }
    /*
    downloadDataWithAsync() {
      let vm = this;
      try {
        vm.serviceResponse = this.downloadDataAsync();
        vm.serviceMessage = "Success";
      } catch (error) {
        vm.serviceMessage = "Error: " + error;
      }
    },
    async downloadDataAsync() {
      //let url = 'https://jsonplaceholder.typicode.com/posts';
      //let url = 'http://localhost:9080/DutyTravelWAR/api/debug/cors/appInfo';
      let url = 'http://localhost:9080/DutyTravelWAR/api/debug/appInfo';
      let responsePromise = axios.get(url);
      let response = await responsePromise;
      //let responseJson = response;
      let responseJson = JSON.parse(response);
      log("response: " + responseJson);
      log("response.data: " + responseJson.data);
      //log("response.data: " + response.data);
      return response.data;
    }
    */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
