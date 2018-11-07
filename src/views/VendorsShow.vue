<template>
  <div class="vendors-show">
    <div v-for="vendor in vendors"> 
      {{ vendor.description }}
     {{ vendor.company_name}}
    </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      vendors: []
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/vendors/2")
    .then(response => {
      this.vendors = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>