<template>
  <div>
  <h1>WELCOME TO THE HOME PAGE</h1>
  <b-breadcrumb :items="items"></b-breadcrumb>
  <!-- <a href="/#/Registrers">Acción de Registros</a> -->
  <div class="action-button">
      <router-link to="/registrers" class="btn btn-primary">Acción de Registros</router-link>
    </div>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        items: [
          {
            text: 'Home',
            href: '/'
          }
        ]
      }
    }
  }
</script>

<style scoped>

.action-button {
  margin-top: 20px;
}

</style>