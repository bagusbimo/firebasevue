<template>
<div class="admin">
    <div class="page-header">
      <br>
      <h1>Kafe TETI Firebase Vue</h1>
      <h6>Lower Ground DTETI Depan Workshop</h6>
      <v-btn depressed :color="status[2].btn">
        Cafe TETI sedang {{ status[2].status }}
      </v-btn>
      <br>
    </div>
        <v-carousel height=250>
          <v-carousel-item
            v-for="(crsl,i) in crsl"
            :key="i"
            :src="crsl.gambar"
          ></v-carousel-item>
        </v-carousel>
    <div id="app">
      <v-app id="inspire">
        <v-layout>
          <v-flex xs12 pa-2>
            <v-card v-for="dagangan in dagangan" :key="dagangan.id">
              <v-img
                :src="dagangan.gambar"
                aspect-ratio="2.75"
              ></v-img>
              <v-card-title primary-title>
                  <h3 class="headline mb-0">{{ dagangan.nama }}</h3>
              </v-card-title>
              <v-container grid-list-xs py-1>
                <v-layout row>
                  <v-flex mx-2>
                    <v-card dark color="cyan">
                      <v-card-text class="px-3">Rp{{ dagangan.harga }}</v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex>
                    <v-card dark color="secondary">
                      <v-card-text class="px-3">Stok: {{ dagangan.kuantitas }}</v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
              <br>
              <v-divider light></v-divider>
            </v-card>
          </v-flex>
        </v-layout>
      </v-app>
  </div>
  </div>
</template>
<script>
import db from './../config';
  export default {
    name: 'Admin',
      firebase: {
        dagangan: db.ref('dagangan'),
        status: db.ref(),
        crsl: db.ref('carousel')
      },
    data(){
      return {
        newDagangan: {
          nama: '',
          harga: '',
          kuantitas: '',
          gambar: ''
        }
      }
    },
    methods: {
      
    }
  }
</script>
<style>
.pointer {
    cursor: pointer;
  }
</style>