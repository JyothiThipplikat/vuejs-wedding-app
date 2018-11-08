<template>
  <div class="tags-index">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Begin your wedding planning!</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <tr>
        <div class="form-group">
          <label for="Categories">Select Category</label>
          <select class="form-control" id="Category" v-model="tagId">
            <option v-for="tag in tags" v-if="tag.specialty" v-bind:value="tag.id"> {{tag.name}}</option>
          </select>
        </div>  
        <div class="form-group">
          <label>Select Priority:</label>
          <input type="text" class="form-control" v-model="percentage">
        </div> 
        </tr>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
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
      tags: [],
      percentage: "",
      tagId: 0,
      errors: []
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/tags")
    .then(response => {
      this.tags = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
        // date: this.date,
        // budget: this.budget,
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
      
    // axios
    //   .patch("http://localhost:3000/api/users/" + localStorage.getItem("user_id"), params)
    //   .then(response => {

        // this.$router.push("/customerprofile/" + response.data.id)

    //   })
    //   .catch(error => {
    //     this.errors = error.response.data.errors;
    // });
    },
  },
  computed: {}
};
</script>
