<template>
  <div id="app">
    
    <!--header-->
    <header class="header header-sticky header-transparent header-dark">
        <div class="top-bar navbar">
            <div class="container">
                <ul class="navbar-nav flex-row nav ml-auto">
                    <li class="nav-item"><a href="/#/signup" class="nav-link">Create an account?</a></li>
                    <li class="nav-item">
                        <a href="/#/login" class="nav-link"><i class="ion-android-lock mr-2"></i> Login</a></li>
                    </li>
                </ul>
            </div><!--container end-->
        </div>
        <nav class="navbar navbar-expand-lg yamm">
            <div class="container">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="index.html">
                    <h2><span>STREAM</span>LINE</b></h2>
                </a>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="nav navbar-nav ml-auto">
                        <li class="active dropdown nav-item">
                            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">Home</a> 
                            <ul class="dropdown-menu">
                                <li><a href="index.html" class="dropdown-item">Home - Default</a></li>
                                <li><a href="home-master.html" class="dropdown-item">Home - Master Slider</a></li>
                                <li><a href="home-animation.html" class="dropdown-item">Home - Animations</a></li>
                                <li><a href="home-carousel.html" class="dropdown-item">Home Carousel</a></li>
                                <li><a href="home-boxed.html" class="dropdown-item">Home boxed</a></li>
                                <li><a href="home-onepage.html" class="dropdown-item">One Page</a></li>
                                <li class="dropdown-submenu">
                                    <a tabindex="-1" href="#"  class="dropdown-item">Multi level menu </a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#" class="dropdown-item"> menu level 2</a></li>
                                        <li class="dropdown-submenu">
                                            <a tabindex="-1" href="#" class="dropdown-item">menu level 2 </a>
                                            <ul class="dropdown-menu">
                                                <li><a href="#" class="dropdown-item"> menu level 3</a></li>
                                                <li><a href="#" class="dropdown-item"> menu level 3</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown nav-item">
                            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">Portfolio</a>
                            <ul class="dropdown-menu">
                                <li><a href="portfolio.html" class="dropdown-item">Portfolio 3 col</a></li>
                                <li><a href="portfolio-masonry.html" class="dropdown-item">Portfolio Masonry</a></li>
                                <li><a href="portfolio-full.html" class="dropdown-item">Portfolio Full width</a></li>
                                <li><a href="portfolio-full-boxed.html" class="dropdown-item">Full width boxed</a></li>                            
                                <li><a href="portfolio-single.html" class="dropdown-item">Portfolio Single</a></li>
                            </ul>
                        </li>
                        <li class=" dropdown nav-item">
                            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">Blog</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="blog-full.html">Blog Full width</a></li>
                                <li><a class="dropdown-item" href="blog-sidebar.html">Blog Sidebar</a></li>  
                                <li><a class="dropdown-item" href="blog-masonry.html">Blog Masonry</a></li>
                                <li><a class="dropdown-item" href="blog-post.html">Blog Post</a></li>
                            </ul>
                        </li>
                        <!--mega menu-->
                        <li class="dropdown dropdown-fw nav-item">
                            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">More  <i class="fa fa-angle-down"></i></a>
                            <ul class="dropdown-menu">
                                <li>
                                    <div class="yamm-content">
                                        <div class="row">
                                            <div class="col-lg-3">
                                                <h3 class="heading">Pages 1</h3>
                                                <ul class="mega-vertical-nav list-unstyled">  
                                                    <li><a class="dropdown-item" href="about.html">About Us</a></li>
                                                    <li><a class="dropdown-item" href="contact.html">Contact Us</a></li>
                                                    <li><a class="dropdown-item" href="services.html">Services</a></li>
                                                    <li><a class="dropdown-item" href="our-team.html">Our Team</a></li>
                                                    <li><a class="dropdown-item" href="login.html">Login</a></li>
                                                    <li><a class="dropdown-item" href="signup.html">Sign up</a></li>
                                                </ul>

                                            </div>
                                            <div class="col-lg-3">
                                                <h3 class="heading">Pages 2 </h3>
                                                <ul class="mega-vertical-nav list-unstyled">
                                                    <li><a class="dropdown-item" href="page-fullwidth.html">Full Width</a></li>
                                                    <li><a class="dropdown-item" href="page-leftbar.html">Left Sidebar</a></li>
                                                    <li><a class="dropdown-item" href="page-rightbar.html">Right Sidebar</a></li>
                                                    <li><a class="dropdown-item" href="faqs.html">Faqs</a></li>
                                                    <li><a class="dropdown-item" href="page-error.html">Error 404</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-3">
                                                <h3 class="heading">Features</h3>
                                                <ul class="mega-vertical-nav list-unstyled">
                                                    <li><a class="dropdown-item" href="typography.html">Typography</a></li>
                                                    <li><a class="dropdown-item" href="shortcodes.html">Shortcodes</a></li>                              
                                                    <li><a class="dropdown-item" href="pricing.html">Pricing Tables</a></li>
                                                    <li><a class="dropdown-item" href="footer-option.html">Footer option</a></li><li><a class="dropdown-item" href="gallery-lightbox.html">Lightbox-gallery</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-2">
                                                <img src="assets/img/ipad.png" alt="" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li> 
                        <li class=" dropdown nav-item">
                            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">Shop</a>
                            <ul class="dropdown-menu dropdown-menu-right">
                                <li><a class="dropdown-item" href="shop-default.html">Shop 3 columns</a></li><li><a href="shop-sidebar.html" class="dropdown-item">Shop Sidebar</a></li>
                                <li><a class="dropdown-item" href="product-detail.html">Product Detail</a></li>                              
                                <li><a class="dropdown-item" href="shop-cart.html">Cart</a></li>
                                <li><a class="dropdown-item" href="shop-checkout.html">Checkout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="right-search ml-4 dropdown">
                    <a class="icon-search" href="#!" data-toggle="dropdown">
                        <i class="ion-ios-search-strong"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <form class="form-inline">
                            <input type="text" placeholder="Search" class="form-control">
                            <button type="button" class="form-search-button">
                                <i class="ion-ios-search-strong"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </nav><!--nav end-->

    </header><!--header main end-->

    <div style="height:100px"></div>

        <router-link to="/">Home</router-link> |
        <router-link to="/logout">Logout</router-link> |
        <router-link to="/survey">Survey</router-link> |
        <router-link to="/vendors">All Vendors</router-link> |
    <router-view/>

    <div style="height:100px"></div>
   
    <div class="cta-bg">
            <div class="container text-center">
                <h3>Making weddings simple to plan
                   <!--  <a href="#" class="btn btn-lg btn-white btn-radius">Purchase Now</a> -->
                </h3>
            </div>
        </div>
        <!--footer-->

  </div>
</template>

<style>
 h2 {
color: black; 
}
span{
color: #32D2BA;
}
</style>
