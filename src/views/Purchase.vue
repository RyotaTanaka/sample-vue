<template>
  <div id="detail">
    <v-layout>
      <v-flex xs10 offset-xs3>
        <v-list two-line>
          <template v-for="(item, index) in cartItems">

            <v-divider
              :key="index"
              inset
            ></v-divider>

            <v-list-tile
              :key="item.title"
              avatar
            >

            <div width="100px">
              <v-img
                :width="'75px'"
                :src="require(`@/assets/articles/${item.image}`)"
                gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
              
              > </v-img>
            </div>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.price + '円'"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-flex>

      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on }">
          <v-btn outline color="indigo" @click="dialog = true">購入する</v-btn>
        </template>

        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            購入しました。
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
              @click="confirmPurchase()"
            >
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
  import every from 'lodash/every';

  import {
    mapState
  } from 'vuex';


  export default {
    name: 'Detail',

    components: {

    },

    computed: {
      cartItems(){
        return this.$store.getters.cartItems;
      }
    },

    data() {
      return {
        image: '',
        title: '',
        dialog: false,
      };
    },

    created() {
      console.log('purchase', this.cartItems);
      every(this.cartItems, (item) => {
        console.log(item)
      })
    },

    methods: {
      confirmPurchase() {
        this.dialog = false;
        console.log(this.cartItems);
        this.$router.push({
          name: home
        })
      }
    },
  }
</script>
