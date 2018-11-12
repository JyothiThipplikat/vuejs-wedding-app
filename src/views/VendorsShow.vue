<template>
  <div class="vendors-show">
     <section id="content-region-3" class="padding-40 page-tree-bg page-tree-bg2">
      <div class="container">
          <h3 class="page-tree-text">
              Shop product
          </h3>
      </div>
    </section><!--page-tree end here-->

    <div class="space-70"></div>
     <div class="container">
            <div class="row">
                <div class="col-md-6 ml-auto">

                     <<!-- div v-for="vendor in vendors" id="js-grid-slider-thumbnail" class="cbp ">
                        <div class="cbp-item">
                            <div class="cbp-caption">
                                <div class="cbp-caption-defaultWrap">
                                    <img v-bind:src="images.url"  alt="">
                                </div>
                            </div>
                        </div> -->
                       <!--  <div class="cbp-item">
                            <div class="cbp-caption">
                                <div class="cbp-caption-defaultWrap">
                                    <img src="assets/img/shop/d2.jpg" alt="">
                                </div>
                            </div>
                        </div> -->
                        <!-- <div class="cbp-item">
                            <div class="cbp-caption">
                                <div class="cbp-caption-defaultWrap">
                                    <img src="puppy.jpg" alt="">
                                </div>
                            </div>
                        </div> -->
                   <!--  </div> -->
                   <!--  <div id="js-pagination-slider">
                        <div class="cbp-pagination-item cbp-pagination-active">
                            <img v-bind:src="images.url" alt="">
                        </div> -->
                        <!-- <div class="cbp-pagination-item">
                            <img src="assets/img/shop/d2.jpg" alt="">
                        </div>
                        <div class="cbp-pagination-item">
                            <img src="assets/img/shop/d3.jpg" alt="">
                        </div>
                    </div> -->
                </div>
                <div class="col-md-4">
                    <div class="product-detail">
                        <h2>{{ vendor.company_name }}</h2>                       
                        <form class="cart">
                            <div class="add-to-cart-table">
                                <div class="quantity">
                                    <input type="number" step="1" min ="1" max="1" name="quantity" value="1" title="Qty" class="input-text qty text">
                                </div>
                                  <li class="cart-footer d-flex flex-column pt-4">
                                    <button @click="addCart()" class="btn-dark btn btn-block">Add to cart</button>
                                    <a href="/#/cartindex" class="theme-btn-color btn btn-block">View cart</a>
                                  </li>
                            </div>
                        </form>
                        <div class="space-30"></div>
                        <div class="cart-socials">
                            <ul class="list-inline">
                                <li class="list-inline-item"><a href="#" data-toggle="tooltip" title="" data-original-title="Add to wishlist"><i class="ion-heart"></i></a></li>
                                <li class="list-inline-item"><a href="#" data-toggle="tooltip" title="" data-original-title="Share on FB"><i class="ion-social-facebook-outline"></i></a></li>
                                <li class="list-inline-item"><a href="#" data-toggle="tooltip" title="" data-original-title="Share on Twitter"><i class="ion-social-twitter-outline"></i></a></li>
                                <li class="list-inline-item"><a href="#" data-toggle="tooltip" title="" data-original-title="Share to Pinterest"><i class="ion-social-pinterest-outline"></i></a></li>
                            </ul>
                        </div>
                        <div class="space-30"></div>
                        <ul class="list-unstyled text-left product-extra-info">
                            <li><span>SKU</span> 73253-12</li>
                            <li><span>Tag</span> <a href="#">Men's Wear</a></li>
                            <li><span>Category</span> <a href="#">Watches</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr>
            <div class="space-50"></div>
            <div class="row">
                <div class="col-md-8 mr-auto ml-auto product-information">
                    <!-- Nav tabs -->
                    <ul class="item-info-tabs nav" role="tablist">
                        <li class="nav-item"><a class="active nav-link" href="#Description" data-taget="#Description" role="tab" data-toggle="tab">Description</a></li>
                        <li class="nav-item"><a class=" nav-link" href="#Information" data-taget="#Information" role="tab" data-toggle="tab">Additional Information</a></li>
                        <li class="nav-item"><a class=" nav-link" href="#Reviews" data-taget="#Reviews" role="tab" data-toggle="tab">Reviews <sup>3</sup></a></li>
                    </ul>
                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane show active" id="Description" aria-expanded="true">
                            <p>{{ vendor.description }}</p>
                        </div>
                        <div role="tabpanel" class="tab-pane" id="Information" aria-expanded="false">
                            <table class="table-hover table"><tbody><tr class=""><th>Address</th>
                                        <td><p>{{ vendor.address }}</p>
                                        </td></tr>
                                    <tr class="alt">
                                        <th>Email</th>
                                        <td>
                                            <p>{{ vendor.phone_number }}</p>
                                        </td>
                                    </tr>
                                        <tr class="alt">
                                        <th>Email</th>
                                        <td>
                                            <p>{{ vendor.email }}</p>
                                        </td>
                                    </tr>
                                    <tr class=""><th>Price</th>
                                        <td>
                                            <p>{{ vendor.price }}</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div role="tabpanel" class="tab-pane" id="Reviews" aria-expanded="false">
                            <ul class="reviews list-unstyled">
                                <li class="clearfix">
                                    <span class="avtar">
                                        <img src="assets/img/shop/avtar.png" alt="" class="img-circle" width="60"> 
                                    </span>
                                    <div class="review-content">
                                        <span class="rating"><i class="ion-star"></i><i class="ion-star"></i><i class="ion-star"></i><i class="ion-star"></i><i class="ion-star"></i></span>
                                        <h4>John Doe</h4>
                                        <span class="time-review">12 Days Ago</span>

                                        <p>
                                          
                                        </p>
                                    </div>
                                </li><!--review end-->
                                <li class="clearfix">
                                    <span class="avtar">
                                        <img src="assets/img/shop/avtar.png" alt="" class="img-circle" width="60"> 
                                    </span>
                                    <div class="review-content">
                                        <span class="rating"><i class="ion-star"></i><i class="ion-star"></i><i class="ion-star"></i><i class="ion-star"></i><i class="ion-star"></i></span>
                                        <h4>John Doe</h4>
                                        <span class="time-review">12 Days Ago</span>

                                        <p>
                                            Authentic keffiyeh master cleanse fingerstache. Deep v single-origin coffee cred Thundercats beard.
                                        </p>
                                    </div>
                                </li><!--review end-->
                                <li class="clearfix">
                                    <span class="avtar">
                                        <img src="assets/img/shop/avtar.png" alt="" class="img-circle" width="60"> 
                                    </span>
                                    <div class="review-content">
                                        <span class="rating"><i class="ion-star"></i><i class="ion-star"></i><i class="ion-star"></i><i class="ion-star"></i><i class="ion-star"></i></span>
                                        <h4>John Doe</h4>
                                        <span class="time-review">12 Days Ago</span>

                                        <p>
                                        </p>
                                    </div>
                                </li><!--review end-->
                            </ul>
                            
                            <div class="space-30"></div>
                            <div class="add-review">

                                <h4>Add Review</h4>
                                <hr>
                                <div class="space-30"></div>
                                <form role="form">
                                    <div class="form-group">
                                        <label>Your Review</label>
                                        <textarea class="form-control" rows="6" placeholder="Type Your Review Here"></textarea>
                                    </div>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label>Name</label>
                                                    <input type="text" class="form-control" placeholder="Your Full Name">
                                                </div>
                                            </div>
                                             <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label>Email</label>
                                                    <input type="text" class="form-control" placeholder="Your Email Address">
                                                </div>
                                            </div>
                                        </div>
                                    <div class="text-right">
                                        <button type="button" class="btn btn-lg theme-btn-default">Submit</button>
                                    </div>
                                </form>
                            </div>
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
      vendor: []
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/vendors/" + this.$route.params.id)
    .then(response => {
       this.vendor = response.data;
    });
  },
  methods: {
    addCart: function() {
      this.vendors.push(item);
    }
  },
  computed: {},
  mounted: function() {
    (function ($, window, document, undefined) {
        'use strict';

        // init cubeportfolio
        $('#js-grid-slider-thumbnail').cubeportfolio({
            layoutMode: 'slider',
            drag: true,
            auto: false,
            autoTimeout: 5000,
            autoPauseOnHover: true,
            showNavigation: false,
            showPagination: false,
            rewindNav: true,
            scrollByPage: true,
            gridAdjustment: 'responsive',
            mediaQueries: [{
                    width: 0,
                    cols: 1
                }],
            gapHorizontal: 0,
            gapVertical: 0,
            caption: '',
            displayType: 'fadeIn',
            displayTypeSpeed: 400,
            plugins: {
                slider: {
                    pagination: '#js-pagination-slider',
                    paginationClass: 'cbp-pagination-active'
                }
            }
        });
    })(jQuery, window, document);
  }
};

</script>
