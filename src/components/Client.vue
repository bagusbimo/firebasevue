<template>
<div class="admin">
    <div class="page-header">
      <br>
      <h1 class="display-4">Kafe TETI Firebase Vue</h1>
      <h6>Lower Ground DTETI Depan Workshop</h6>
    </div>
    <div class="card mb-3">
      <div class="card-header">
        <h4>List Dagangan</h4>
      </div>
      <div class="table-responsive">
        <table class="table table-sm">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Stok</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="dagangan in dagangan" :key="dagangan.id">
              <td>{{ dagangan.nama }}</td>
              <td>{{ 'Rp ' + dagangan.harga }}</td>
              <td>{{ dagangan.kuantitas }}</td>
            </tr>
          </tbody>
        </table>
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
          kuantitas: ''
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