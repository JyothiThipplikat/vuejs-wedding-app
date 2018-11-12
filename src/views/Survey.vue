<template>
  <div class="survey">
    <h1>Begin your wedding planning!</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>  

    <div class="form-group">
      <div v-for="priority in priorities">
        <h1>{{ priority.tag.name }}</h1>
        <vue-slider v-model="percentage"></vue-slider>
      </div>
    
    </div> 
    <form v-on:submit.prevent="submit()">
      <div class="form-group">
        <label for="Categories">Select Category</label>
        <select class="form-control" id="Category" v-model="tagId">
          <option v-for="tag in tags" v-if="tag.specialty" v-bind:value="tag.id"> {{tag.name}}</option>
        </select>
      </div>  

      <input type="submit" class="btn btn-primary" value="Submit">
    </form>

  </div>
  
</template>

<style>

</style>

<script>
var axios = require('axios');
import vueSlider from 'vue-slider-component';

export default {
  data: function() {
    return {
      tags: [],
      percentage: "",
      tagId: 0,
      errors: [],
      priorities: []
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/tags")
    .then(response => {
      this.tags = response.data;
    });

    axios
    .get("http://localhost:3000/api/priorities")
    .then(response => {
      this.priorities = response.data;
      this.priorities.forEach(priority => {
        this.changedPriorities[priority.tag.name] = false;
      });
    });
  },
  methods: {
    submit: function() {
      var params = {
        percentage: this.percentage,
        tag_id: this.tagId
      };

      axios
      .post("http://localhost:3000/api/change_priorities", params)
      .then(response => {
        // console.log(response.data);
        this.$router.push("/customerprofile");
      })
      .catch(error => {
        this.errors = error.response.data.errors;
      });
    },
  },
  components: {
    vueSlider
  },
  computed: {}
};

</script>
    
