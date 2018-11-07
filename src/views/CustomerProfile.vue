<template>
  <div class="customerprofile">
    <div v-for="priority in priorities"> 
    <li> Tag ID: {{priority.tag_id}}  - Percentage: {{ priority.percentage}} </li>
    </div>
    <a href="/#/survey" class="btn theme-btn-color btn-radius btn-lg">Edit your profile!</a> 
     
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      priorities: []
    };
  },
  created: function() {
     axios
    .get("http://localhost:3000/api/priorities")
    .then(response => {
      this.priorities = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>