<template>
  <div class="survey">
    <!-- <h1>Begin your wedding planning!</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>   -->

    <div class="form-group">
      <div v-for="priority in priorities">
        <h1>{{ priority.tag.name }}</h1>
        <vue-slider v-on:input="OdacityOfHope(priority)" v-model="priority.percentage" ></vue-slider>
      </div>
      <!-- <vue-slider input v-model="percentage"></vue-slider>
      <vue-slider input v-model="percentage"></vue-slider>
      <vue-slider input v-model="percentage"></vue-slider>   -->
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
   <!-- <div class="tags-index">
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
  </div> -->
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
      priorities: [],
      currentPriorityId: 0,
      changedPriorities: {},
      timeStamp: null
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
      
    // axios
    //   .patch("http://localhost:3000/api/users/" + localStorage.getItem("user_id"), params)
    //   .then(response => {

        // this.$router.push("/customerprofile/" + response.data.id)

    //   })
    //   .catch(error => {
    //     this.errors = error.response.data.errors;
    // });
    },
    OdacityOfHope: function(inputPriority) {
      if (!this.changedPriorities[inputPriority.tag.name]) {
        this.changedPriorities[inputPriority.tag.name] = true;
      } else {
        if (this.currentPriorityId !== inputPriority.id && this.$emit('myEvent').$children[0].moveEnd() === false) {
          this.currentPriorityId = inputPriority.id;
          console.log(inputPriority.tag.name);
        }
      // console.log(this.$emit('myEvent').$children[0].moveEnd());
      }
    },
    updatePriority: function(inputPriority) {
      console.log("updatePriority");
      axios
      .post("http://localhost:3000/api/change_priorities", {tag_id: inputPriority.tag.id, percentage: inputPriority.percentage})
      .then(response => {
        this.priorities = response.data;
      });
    }
  },
  // watch: {
  //   priorities: function(val, oldVal) {
  //     var changedProperty = val.filter(function(i) {return oldVal.indexOf(i) < 0;})[0]; 
  //     console.log(changedProperty);         
  //   }
  // },
  components: {
    vueSlider
  },
  computed: {}
};

</script>
    
