<template>
  <div class="home">
    
  </div>
</template>

<style>
</style>

<script>
  var axios = require('axios');

export default {
  data: function() {
    return {
      carted_vendors: []
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/carted_vendors")
    .then(response => {
      this.carted_vendors = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>