<template>
<div class="admin">
    <div class="page-header">
      <br>
      <h1>Kafe TETI Firebase Vue</h1>
    </div>
    <div class="card">
      <div class="card-header">
        <h3>List Dagangan</h3>
      </div>
      <div class="card-body">
        <table class="table table-striped">
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