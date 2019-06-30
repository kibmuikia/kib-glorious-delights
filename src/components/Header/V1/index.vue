<template>
  <v-container pt-0 fluid id="headerWrap">
    <v-layout row wrap align-center class="white--text">
      <v-flex xs12 md12>
        <v-layout row justify-space-between align-center wrap>
          <v-flex xs6 md3>
            <v-btn small icon flat color="white">
              <i class="fa fa-twitter"></i>
            </v-btn>
            <v-btn small icon flat color="white">
              <i class="fa fa-facebook"></i>
            </v-btn>
          </v-flex>
          <v-flex xs6 md4>
            <p>
              <span class="right">
                example@mail.com
              </span>
            </p>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 md12>
        <Toolbar />
      </v-flex>
      <v-flex xs12 md6 offset-md3 mt-3 class="banner-content text-xs-center">
        <p class="subheading">
          When We bake, we do so with love
        </p>
        <h1 class="">
          Glorious Delights
        </h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

let SELF;
export default {
  name: "header-v1-component",
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

<style scoped>
#headerWrap {
  /*height: 30vh !important;*/
  max-height: 60vh;
  background-image: url("~@/assets/banner-bg.jpg");
  background-position: top center;
  background-size: cover;
  background-attachment: fixed;
  background-color: grey;
  background-blend-mode: multiply;
}
.banner-content h1 {
  font-weight: 700;
  font-size: 50px;
  border-top: 1px solid #d1ab7f;
  border-bottom: 1px solid #d1ab7f;
  /*text-shadow: 0 0 4px #f8bbd0;*/
}
</style>
