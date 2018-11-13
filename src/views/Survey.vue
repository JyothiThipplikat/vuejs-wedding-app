<template>
  <div class="survey">
    <h1>Begin your wedding planning!</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>  

    <div class="form-group">
        <vue-slider v-model="percentage"></vue-slider> 
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

  <div class="space-30"></div>

  <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#demo">View Percentages</button>
  <div id="demo" class="collapse in">
    <div class="row">
      <div class="col-md-12">
          <h4 class="heading-mini"></h4>
      </div>
    </div>  

    <div class="row">
      <div v-for="priority in priorities" class="col-md-3 col-sm-6  margin-btm-20">
        <div class="pricing-wrapper">
          <div class="pricing-head">
              <h3>{{ priority.tag.name }}</h3>
          </div>
          <div class="pricing-rate">
             <h3>{{priority.formatted.percentage}}<md>%</md></h3>
          </div>
        </div><!--pricing wrapper-->
      </div><!--pricing col end-->
    </div>
    </div>
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
      priorities: [
        {
          tag: {
            name: ""
          },
          formatted: {}
        }
      ]
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
