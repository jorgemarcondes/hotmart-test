<template>
  <div id="app">
    <Page />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Page from "./components/Page.vue";

@Component({
  components: {
    Page
  }
})
export default class App extends Vue {}
</script>

<style lang="less">
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5 {
  margin: 0;
}
</style>
