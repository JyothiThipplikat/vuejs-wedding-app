<template>
  <div class="vendors-show">
   
     <h1> {{ vendor.company_name }} </h1> 
     <h1> {{ vendor.description }} </h1> 

  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      vendor: {
        company_name: "",
        description: ""
      }
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/vendors/" + this.$route.params.id)
    .then(response => {
       this.vendor = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>