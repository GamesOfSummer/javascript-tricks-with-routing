<template>
  <div id="app">
    <h1>{{ msg }}</h1>

    <button v-on:click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
import { myNumbers } from "./ExportThis";

export default {
  mounted() {
    console.log();
    console.log("%c Export", "color: orange; font-weight: bold;");
    //console.log({ foo, bar, baz });
    //console.table([foo, bar, baz], "age");
  },
  data() {
    return {
      msg: "page 1",
      show: true
    };
  }
};
</script>
