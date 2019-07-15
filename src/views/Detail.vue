<template>
  <v-container grid-list-md text-xs-center>
    <v-layout 
    >
      <v-flex xs12>
        <v-img
          :src="require(`@/assets/articles/${targetItem.image}`)"
          gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
          width="500px"
        ></v-img>
      </v-flex>

      <v-flex xs12>
        <h3 class="title font-weight-bold mb-2">
          {{ targetItem.title }}
        </h3>
        <h3 class="title font-weight-bold mb-2">
          {{ targetItem.price }}円
        </h3>
      </v-flex>
    </v-layout>

    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn outline color="indigo" @click="addCart()">カートに入れる</v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          カートに追加しました。
        </v-card-title>

        <!-- <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text> -->

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


  </v-container>
</template>

<script>
  import {
    mapState
  } from 'vuex';
  import filter from 'lodash/filter'

  export default {
    name: 'Detail',

    components: {

    },

    computed: {
    ...mapState(['articles']),
    },

    data() {
      return {
        image: '',
        title: '',
        targetItem: {},
        dialog: false,
      };
    },

    created() {
      this.$route.params

      const target = filter(this.articles, { id: Number(this.$route.params.id) });
      this.targetItem = target[0];
      this.image = target[0].image;
      this.title = target[0].title;
      this.price = target[0].price;
    },

    methods: {
      addCart() {
        this.dialog = true;
        this.$store.dispatch('addCartItems', this.targetItem)
      }
    },
  }
</script>
