<template>
  <v-app>
    <Toolbar />

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
/* eslint-disable no-unused-vars */

let SELF;
export default {
  name: "App",
  components: {
    Toolbar: () => import("@/components/Toolbar/V1/")
  },
  props: {},
  data() {
    return {
      //
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

<style>
/*.*/
</style>
