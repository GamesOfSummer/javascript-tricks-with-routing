<template>
  <div id="app">
    <h1>{{ msg }}</h1>

    <hr />
    <router-link to="/">Home</router-link>
    <br />
    <router-link to="/Page1/">Page One</router-link>
    <br />
    <router-link to="/Page2/10">Page Two with ID 10</router-link>
    <br />
    <router-link to="/Page2/20">Page Two with ID 20</router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome"
    };
  }
};
</script>

