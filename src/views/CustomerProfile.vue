<template>
  <div class="customerprofile">
    <section> 
    <img src="outdoor.jpg" class="space=30 page-transparent"> 
          <div class="container">
              <h3 class="page-tree-text">
                  Select from the options below...
              </h3>
          </div>
    </section><!--page-tree end here-->
    <div class="space-70"></div>
     <a href="/#/survey" class="btn theme-btn-color btn-radius btn-lg">Edit profile!</a> 
     <div class="space-30"></div>
        <div class="container">
          <div class="row">
              <div class="col-lg-12">
              <div v-for="priority in priorities">
              <div class="row product_grid">
              <div v-for="vendor in priority.vendors" class="col-md-4 product_item">
                  <div class="product-thumb">
                      <img v-bind:src="vendor.primary_image_url" alt="" class="img-responsive">
                      <div class="product-thumb-overlay">
                              <!--  <a href="/#/cartindex"><i class="ion-bag"></i> Add to cart</a> -->
                          </p>
                      </div>
                  </div><!--end product thumb-->
                  <div class="product-desc">
                      <h3>{{ vendor.company_name }}</h3>
                      <p></p>
                      <router-link class="btn theme-btn-default btn-lg" v-bind:to="'/vendors/' + vendor.id">View Detail</router-link>
                  </div><!--product desc end-->
              </div><!--product item end-->
              </div>
          </div>
          </div>
        </div>
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
      priorities: []
    };
  },
  created: function() {
     axios
    .get("http://localhost:3000/api/priorities")
    .then(function(response) {
      this.priorities = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};
</script>