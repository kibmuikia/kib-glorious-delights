<template>
  <div id="navigationWrap">
    <v-toolbar flat>
      <!-- <v-toolbar-title class="title text-uppercase">
        <span>Glorious</span>
        <span class="font-weight-light">DELIGHTS</span>
      </v-toolbar-title> -->
      <v-btn icon flat color="pink">
        <v-icon>cake</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="(link, index) in links"
          :key="index"
          flat
          :to="link.path"
          class="linkbtn mx-1"
        >
          <span class="mr-2">
            {{ link.title }}
          </span>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-toolbar-side-icon>
    </v-toolbar>
    <!-- . -->
    <v-navigation-drawer v-model="drawer" app fixed temporary right width="250">
      <v-list dense>
        <v-list-tile
          v-for="(link, index) in links"
          :key="index"
          :to="link.path"
        >
          <!-- @click="goto(link.path)" -->
          <v-list-tile-action>
            <v-icon>
              {{ link.icon }}
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ link.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
  <!-- . END -->
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
      links: this.$store.getters.basiclinks,
      drawer: false
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
.linkbtn {
  max-height: 60%;
}
</style>
