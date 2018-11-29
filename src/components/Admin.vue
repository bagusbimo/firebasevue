<template>
<div class="admin">
    <div class="page-header">
      <br>
      <h1>Kafe TETI Firebase Vue Admin</h1>
    </div>
    <div class="card">
  <div class="card-header">
    <h4>Tambah Dagangan</h4>
  </div>
  <div class="card-body">
    <form id="form"
          @submit.prevent="addDagangan">
      <div class="form-group row mx-sm-3 mb-2">
        <label for="nama" class="sr-only">Nama</label>
        <input id="nama"
               type="text"
               class="form-control"
               placeholder="Nama Dagangan"
               v-model="newDagangan.nama" />
      </div>
      <div class="form-group row mx-sm-3 mb-2">
        <label for="kuantitas" class="sr-only">Stok</label>
        <input id="kuantitas"
               type="number"
               class="form-control"
               placeholder="Kuantitas"
               v-model="newDagangan.kuantitas" />
      </div>
      <div class="form-group row mx-sm-3 mb-2">
        <label for="harga" class="sr-only">Harga</label>
        <input id="harga"
               type="number"
               class="form-control"
               placeholder="Harga (Rp)"
               v-model="newDagangan.harga" />
      </div>
      <div class="form-group row mx-sm-3 mb-2">
        <label for="gambar" class="sr-only">URL Gambar</label>
        <input id="gambar"
               type="text"
               class="form-control"
               placeholder="Direct URL Gambar"
               v-model="newDagangan.gambar" />
      </div>
      <small id="noduplicate" class="text-muted">
      Pastikan tidak ada data yang terduplikasi
      </small>
    </form>    
        <div>
        <button class="btn btn-primary btn-sm mx-sm-3 mb-2" @click="addDagangan(dagangan)">Tambahkan</button>
        </div>
  </div>
</div>
    <div class="card">
      <div class="card-header">
        <h4>List Dagangan</h4>
      </div>
      <div class="table">
        <table class="container table-hover table-sm">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Stok</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="dagangan in dagangans" :key="dagangan.id">
              <td>{{ dagangan.nama }}</td>
              <td>{{ 'Rp ' + dagangan.harga }}</td>
                <td>
                <button class="btn badge btn-outline-danger" @click="substractKuantitas(dagangan)">-</button>
                {{ dagangan.kuantitas }}
                <button class="btn badge btn-outline-success" @click="addKuantitas(dagangan)">+</button>
                </td>
              <td>
                <span class="pointer"
                      @click="removeDagangan(dagangan)">
                  <i class="fas fa-trash"></i>
                </span>
              </td>
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
        dagangans: daganganRef
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
      addDagangan() {
        daganganRef.push(this.newDagangan);
          this.newDagangan.nama = '';
          this.newDagangan.harga = '';
          this.newDagangan.kuantitas = '';
          this.newDagangan.gambar = '';
      },
      removeDagangan(dagangan) {
        daganganRef.child(dagangan['.key']).remove(); 
      },
      addKuantitas: function(dagangan) {
        daganganRef.child(dagangan['.key']).child('kuantitas').set(++dagangan.kuantitas)
      },
      substractKuantitas: function(dagangan) {
        daganganRef.child(dagangan['.key']).child('kuantitas').set(--dagangan.kuantitas)
      }
    }
  }
</script>
<style>
.pointer {
    cursor: pointer;
  }
.form-group {
  margin:0 auto;
}
</style>