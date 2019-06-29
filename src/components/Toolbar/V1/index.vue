<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <span>Glorious</span>
      <span class="font-weight-light">DELIGHTS</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn v-for="(link, index) in links" :key="index" flat :to="link.path">
      <span class="mr-2">
        {{ link.title }}
      </span>
    </v-btn>
  </v-toolbar>
</template>

<script>
/* eslint-disable no-unused-vars */

let SELF;
export default {
  name: "toolbar-v1-component",
  components: {},
  props: {},
  data() {
    return {
      links: this.$store.getters.basiclinks
    };
  },
  methods: {
    // .
  },
  computed: {},
  watch: {},
  beforeCreate() {
    SELF = this;
  },
  created() {},
  mounted() {}
};
</script>

<style scoped>
/*.*/
</style>
