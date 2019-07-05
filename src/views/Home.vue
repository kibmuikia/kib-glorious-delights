<template>
  <v-container>
    <v-layout row wrap align-center justify-space-around>
      <v-flex xs12 class="text-xs-center">
        <h2>
          We’ve baked every item from the core of our heart to serve you
        </h2>
        <p class="subheading">
          We are here to listen from you deliver exellence by any means
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
          do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit, sed do eiusmod temp or incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim.
        </p>
      </v-flex>
      <AvailableItems />
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable no-unused-vars */

let SELF;
export default {
  name: "home-view",
  title: "Home | Glorious Delights", // Home | Glorious Delights
  components: {
    AvailableItems: () => import("@/components/AvailableItems/V1/")
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

<style scoped>
/*.*/
</style>
