<template>
  <div class="vendors-index">
      <section>
        <img src="table.jpg" class="space=30 page-transparent"> 
          
            <div class="container">
                <h3 class="page-tree-text">
                </h3>
            </div>
        </section><!--page-tree end here-->
        <div class="space-70"></div>

        <div class="container">
            <div class="row product_grid">
                <div v-for="vendor in vendors" class="col-md-4 product_item">
                    <div class="product-thumb">
                        <img v-bind:src="vendor.primary_image_url" alt="" class="img-responsive">
                        <div class="product-thumb-overlay">
                            <p>
                              <a href="#"><i class="ion-bag"></i> Add to cart</a>
                              <a href="#"><i class="ion-eye"></i> Add to wishlist</a>
                              <a href="#"><i class="ion-refresh"></i> Add to compare</a>
                            </p>
                        </div>
                    </div><!--end product thumb-->
                    <div class="product-desc">
                      <h3> {{ vendor.company_name }} </h3>
                      <router-link class="btn theme-btn-default btn-lg" v-bind:to="'/vendors/' + vendor.id">View Detail</router-link>
                    </div><!--product desc end-->    
                </div><!--product item end-->
            <div class="space-40"></div>
            <div class="clearfix">
                <div class="float-right">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
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
      vendors: []
    };
  },
  created: function() {
     axios
    .get("http://localhost:3000/api/vendors")
    .then(function(response) {
      this.vendors = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};
</script>