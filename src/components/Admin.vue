<template>
<div class="admin">
    <div class="page-header">
      <br>
      <h1>Kafe TETI Firebase Vue Admin</h1>
    </div>
    <div class="card">
  <div class="card-header">Tambah Dagangan</div>
  <div class="card-body">
    <form id="form"
          class="form-inline"
          @submit.prevent="addDagangan">
      <div class="form-group mb-2">
        <label for="nama" class="sr-only">Nama</label>
        <input id="nama"
               type="text"
               class="form-control"
               placeholder="Nama"
               v-model="newDagangan.nama" />
      </div>
      <div class="form-group mx-sm-3 mb-2">
        <label for="kuantitas" class="sr-only">Stok</label>
        <input id="kuantitas"
               type="text"
               class="form-control"
               placeholder="Kuantitas"
               v-model="newDagangan.kuantitas" />
      </div>
      <div class="form-group mb-2">
        <label for="harga" class="sr-only">Harga</label>
        <input id="harga"
               type="text"
               class="form-control"
               placeholder="Rp"
               v-model="newDagangan.harga" />
      </div>

    </form>
          <div>
        <button class="btn btn-primary mx-sm-3 mb-2" @click="addDagangan(dagangan)">Tambahkan</button>
      </div>
  </div>
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
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="dagangan in dagangan" :key="dagangan.id">
              <td>{{ dagangan.nama }}</td>
              <td>{{ 'Rp ' + dagangan.harga }}</td>
                <td>
                <button class="btn btn-outline-danger mx-sm-3 mb-2" @click="substractKuantitas(dagangan)">-</button>
                {{ dagangan.kuantitas }}
                <button class="btn btn-outline-success mx-sm-3 mb-2" @click="addKuantitas(dagangan)">+</button>
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
        dagangan: daganganRef
      },
    data(){
      return {
        newDagangan: {
          nama: '',
          harga: '',
          kuantitas: 0
        }
      }
    },
    methods: {
      addDagangan() {
        daganganRef.push(this.newDagangan);
          this.newDagangan.nama = '';
          this.newDagangan.harga = '';
          this.newDagangan.kuantitas = '';
      },
      removeDagangan(dagangan) {
        daganganRef.child(dagangan['.key']).remove(); 
      },
      addKuantitas(dagangan) {
        var newKuantitas = parseInt(dagangan.kuantitas);
        this.newDagangan.nama = dagangan.nama;
        this.newDagangan.harga = dagangan.harga;
        this.newDagangan.kuantitas = newKuantitas + 1;
        daganganRef.push(this.newDagangan);
        daganganRef.child(dagangan['.key']).remove();   
        this.newDagangan.nama = '';
        this.newDagangan.harga = '';
        this.newDagangan.kuantitas = '';
      },
      substractKuantitas(dagangan) {
        var newKuantitas = parseInt(dagangan.kuantitas);
        this.newDagangan.nama = dagangan.nama;
        this.newDagangan.harga = dagangan.harga;
        this.newDagangan.kuantitas = newKuantitas - 1;
        daganganRef.push(this.newDagangan);
        daganganRef.child(dagangan['.key']).remove();   
        this.newDagangan.nama = '';
        this.newDagangan.harga = '';
        this.newDagangan.kuantitas = '';
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