
<template>
  <div>
    <h1>REGISTROS</h1>
    <b-breadcrumb :items="bred"></b-breadcrumb>

    <!-- Sección del formulario -->
    <div class="form-section">
      <div class="form-container">
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
            <b-form-input id="nombre" v-model="form.nombre" placeholder="Ingrese su nombre" required type="text"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Edad:" label-for="input-2">
            <b-form-input id="edad" v-model="form.edad" placeholder="Ingrese su edad" required type="number" min="1" max="100"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Cuatrimestre:" label-for="input-2">
            <b-form-input id="cuatrimestre" v-model="form.cuatrimestre" placeholder="Cuatrimestre actual" required type="number" min="1" max="12"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Carrera:" label-for="input-2">
            <b-form-input id="carrera" v-model="form.carrera" placeholder="Carrera actual" required></b-form-input>
          </b-form-group>

          <!-- Botones separados del formulario -->
          <div class="button-container">
            <b-button type="submit" variant="primary">Enviar</b-button>
            <b-button type="reset" variant="danger">Eliminar datos</b-button>
          </div>
        </b-form>
      </div>
    </div>

    <!-- Sección de la tabla -->
    <div class="table-section">
      <div class="table-container overflow-auto">
        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>

        <b-table id="my-table" :items="items" :per-page="perPage" :current-page="currentPage" 
        small :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" responsive="sm"></b-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortBy: 'Nombre',
      sortDesc: false,
      fields: [
        { key: 'Nombre', sortable: true },
        { key: 'Edad', sortable: true },
        { key: 'cuatrimestre', sortable: true },
        { key: 'carrera', sortable: false }
      ],
      bred: [
        { 
          text: 'Home', 
          href: '/' 
        },
        { 
          text: 'Registrers', 
          href: '/registrers' 
        },
      ],
      perPage: 3,
      currentPage: 1,
      items: [
        { "ID": 1, "Nombre": "Juan", "Edad": 20, "cuatrimestre": 3, "carrera": "Ingeniería Civil" },
        { "ID": 2, "Nombre": "María", "Edad": 22, "cuatrimestre": 5, "carrera": "Medicina" },
        { "ID": 3, "Nombre": "Luis", "Edad": 19, "cuatrimestre": 2, "carrera": "Psicología" },
        { "ID": 4, "Nombre": "Ana", "Edad": 21, "cuatrimestre": 4, "carrera": "Derecho" },
        { "ID": 5, "Nombre": "Pedro", "Edad": 23, "cuatrimestre": 6, "carrera": "Administración de Empresas" }
      ],
      form: {
        nombre: '',
        edad: null,
        cuatrimestre: null,
        carrera: ""
      },
    }
  },
  computed: {
    rows() {
      return this.items.length
    }
  },
  methods: {
    onSubmit(event) {
      if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(this.form.nombre)) {
        alert("No se permiten números ni caracteres especiales en el campo Nombre");
      } else if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(this.form.carrera)) {
        alert("No se permiten números en el campo Carrera");
      } else {
        const registro = {
          ID: this.items.length + 1,
          Nombre: this.form.nombre,
          Edad: this.form.edad,
          cuatrimestre: this.form.cuatrimestre,
          carrera: this.form.carrera
        };
        this.items.push(registro);
        alert("¡Registrado exitosamente!");
        event.preventDefault();
        return;
      }
    },
    onReset(event) {
      event.preventDefault();
      this.form.nombre = '';
      this.form.edad = null;
      this.form.cuatrimestre = null;
      this.form.carrera = '';
    }
  }
}
</script>

<style scoped>
.form-section {
  background-color: #cfcfcf;
  padding: 20px;
  margin-bottom: 20px;
}

.form-container {
  max-width: 500px;
  margin: 0 auto;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.table-section {
  background-color: #c2e6f7;
  padding: 20px;
}

.table-container {
  max-width: 100%;
}
</style>
