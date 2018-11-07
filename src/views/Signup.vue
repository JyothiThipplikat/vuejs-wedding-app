<template>
  <div class="signup">
    <div class="container">
      <section id="content-region-3" class="padding-40 page-tree-bg">
        <div class="container">
          <h3 class="page-tree-text">Create an account</h3>
        </div>
      </section><!--page-tree end here-->
        <div class="space-70"></div>
    </div>
     <div class="container">
        <div class="row">
          <div class="col-lg-6 ml-auto mr-auto">
              <div class="my-login-form">
                <h4 class="text-uppercase">Sign up</h4><hr>  
                <form v-on:submit.prevent="submit()">
                <ul>
                  <li class="text-danger" v-for="error in errors">{{ error }}</li>
                </ul>
                  <div class="row">
                    <div class="col-md-12 margin-btm-20">
                      <div class="form-group">
                        <input type="email" class="form-control" v-model="email" placeholder="Email..">
                      </div>
                      <div class="form-group">
                        <input type="password" class="form-control" v-model="password" placeholder="Password" >
                      </div>
                      <div class="form-group">
                        <input type="password" class="form-control" v-model="passwordConfirmation" placeholder="Repeat password..">
                      </div>
                      <div class="col-md-12 text-right">
                        <button type="submit" class="btn theme-btn-color">Sign up</button>
                      </div>
                  </div>
              </div>
            <div class="form-btm-link text-center">
              <a href="/#/login">Already have an account? </a>
            </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("http://localhost:3000/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
