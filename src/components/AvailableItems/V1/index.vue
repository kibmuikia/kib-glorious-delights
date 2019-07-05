<template>
  <v-container>
    <v-layout row wrap align-center justify-space-around>
      <v-flex xs12 md12 class="title text-xs-center">
        <h2>
          Categories of available items
        </h2>
        <p class="subheading grey--text mt-2">
          They are grilling celebrities in their own right.
        </p>
      </v-flex>
      <v-flex xs10 md3 v-for="(item, index) in items" :key="index" ma-2>
        <v-card>
          <!-- <v-img :src="item.imageurl" height="200"></v-img> -->
          <v-avatar size="150" class="ma-1" style="margin:auto;">
            <v-img :src="item.imageurl"></v-img>
          </v-avatar>
          <v-card-title>
            <h2 class="title text-xs-center">
              {{ item.title }}
            </h2>
          </v-card-title>
          <v-card-text>
            <p>
              {{ item.desc }}
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

let SELF;
export default {
  name: "available-items-v1-component",
  components: {},
  props: {},
  data() {
    return {
      items: [
        {
          title: "birthday cakes",
          desc: "a wonderful tasty experience",
          imageurl:
            "https://www.hickoryfarms.com/on/demandware.static/-/Sites-Web-Master-Catalog/default/dw5629bcf4/images/products/birthday-celebration-cake-064030-1.jpg"
        },
        {
          title: "wedding cakes",
          desc: "towering over your taste buds expectations",
          imageurl:
            "https://assets.marthastewartweddings.com/styles/wmax-520-highdpi/d45/margo-me-bridal-shower-cake-7280-s112194-0515/margo-me-bridal-shower-cake-7280-s112194-0515_sq.jpg?itok=7jVrTqLZ"
        },
        {
          title: "event catering",
          desc: "excellence in both menu and service",
          imageurl:
            "https://www.eriksdelicafe.com/wp-content/uploads/2016/07/Catering.jpg"
        }
      ]
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
