<template>
<div class="admin">
    <div class="page-header">
      <br>
      <h1 class="display-4">Kafe TETI Firebase Vue</h1>
      <h6>Lower Ground DTETI Depan Workshop</h6>
      <br>
    </div>
    <div class="card mb-3">
      <div class="card-header">
        <h4>List Dagangan</h4>
      </div>
      <div class="card-group">
      <div class="card text-center" v-for="dagangan in dagangan" :key="dagangan.id">
        <img class="card-img-top" :src="dagangan.gambar" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">{{ dagangan.nama }}</h5>
        <p class="card-text">Harga : Rp {{ dagangan.harga }},-
          <br>
          Stok Tersisa : {{ dagangan.kuantitas }}</p>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import daganganRef from './../config';
  export default {
    name: 'Admin',
      firebase: {
        dagangan: daganganRef
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
    }
  }
</script>
<style>
.pointer {
    cursor: pointer;
  }
</style>