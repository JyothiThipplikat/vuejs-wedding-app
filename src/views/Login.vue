<template>

<div class="container">
   <section id="content-region-3" class="padding-40 page-tree-bg">
      <div class="container">
        <h3 class="page-tree-text">
          Login into your account
        </h3>
      </div>
    </section><!--page-tree end here-->
    <div class="space-70"></div>

  <div class="row">
    <div class="col-lg-6  ml-auto mr-auto">
      <div class="login">
      <h4 class="text-uppercase">Login</h4><hr>
        <form v-on:submit.prevent="submit()">
          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>
          <div class="form-group">
            <input type="email" class="form-control" v-model="email" placeholder="Email..">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" v-model="password" placeholder="Password..">
          </div>
          <div class=" text-right">
            <input type="submit" class="btn theme-btn-color" value= "Login">
          </div>
          <div class="form-btm-link text-center">
            <a href="/#/signup">Create new account</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  template: "#login-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("http://localhost:3000/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push("/customerprofile/");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
